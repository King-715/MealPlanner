import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";
import { BackendURL } from "@env";

const api = axios.create({
	baseURL: BackendURL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Secure storage functions
const setToken = async (key, value) => {
	try {
		if (key.includes("token")) {
			await SecureStore.setItemAsync(key, value);
		} else {
			await AsyncStorage.setItem(key, value);
		}
	} catch (error) {
		console.error("Error storing token:", error);
	}
};

const getToken = async (key) => {
	try {
		if (key.includes("token")) {
			return await SecureStore.getItemAsync(key);
		}
		return await AsyncStorage.getItem(key);
	} catch (error) {
		console.error("Error getting token:", error);
		return null;
	}
};

// Request interceptor
api.interceptors.request.use(
	async (config) => {
		const token = await getToken("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const refreshToken = await getToken("refreshToken");
				const response = await axios.post(
					`${BackendURL}/auth/refresh`,
					{ refreshToken }
				);

				await setToken("token", response.data.token);
				if (response.data.refreshToken) {
					await setToken("refreshToken", response.data.refreshToken);
				}

				originalRequest.headers.Authorization = `Bearer ${response.data.token}`;
				return api(originalRequest);
			} catch (refreshError) {
				await SecureStore.deleteItemAsync("token");
				await SecureStore.deleteItemAsync("refreshToken");
				return Promise.reject(refreshError);
			}
		}

		return Promise.reject(error);
	}
);

export default api;
