import { useState } from "react";
import api from "../services/api";
import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useUserAPI = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const storeData = async (key, value) => {
		try {
			if (key.includes("token")) {
				await SecureStore.setItemAsync(key, value);
			} else {
				await AsyncStorage.setItem(key, value);
			}
		} catch (e) {
			console.error("Error storing data:", e);
		}
	};

	const registerUser = async (userData) => {
		try {
			setLoading(true);
			setError(null);
			const response = await api.post("/auth/register", userData);
			return response.data;
		} catch (err) {
			const errorMsg = err.response?.data?.error || "Registration failed";
			setError(errorMsg);
			throw new Error(errorMsg);
		} finally {
			setLoading(false);
		}
	};

	const loginUser = async (credentials) => {
		try {
			setLoading(true);
			setError(null);
			const response = await api.post("/auth/login", credentials);

			await storeData("token", response.data.token);
			if (response.data.refreshToken) {
				await storeData("refreshToken", response.data.refreshToken);
			}
			console.log(response.data.token);
			return response.data;
		} catch (err) {
			const errorMsg = err.response?.data?.error || "Login failed";
			setError(errorMsg);
			throw new Error(errorMsg);
		} finally {
			setLoading(false);
		}
	};

	const logoutUser = async () => {
		try {
			await SecureStore.deleteItemAsync("token");
			await SecureStore.deleteItemAsync("refreshToken");
			return true;
		} catch (err) {
			setError("Logout failed");
			throw err;
		}
	};

	const getUserProfile = async () => {
		try {
			setLoading(true);
			setError(null);
			const response = await api.get("/users/me");
			return response.data;
		} catch (err) {
			const errorMsg =
				err.response?.data?.error || "Failed to fetch profile";
			setError(errorMsg);
			throw new Error(errorMsg);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		error,
		registerUser,
		loginUser,
		logoutUser,
		getUserProfile,
		clearError: () => setError(null),
	};
};

export default useUserAPI;
