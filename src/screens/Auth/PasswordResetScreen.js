import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  Keyboard,
} from 'react-native';
import { useFonts, WorkSans_500Medium, WorkSans_700Bold } from '@expo-google-fonts/work-sans';
import { styled } from 'nativewind';
import { auth, db } from "../../config/firebase";
import { updatePassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchable = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledTextInput = styled(TextInput);

export default function PasswordResetScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    WorkSansMedium: WorkSans_500Medium,
    WorkSansBold: WorkSans_700Bold,
  });

  // Validate whenever form changes
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {
        newPassword: '',
        confirmPassword: '',
      };

      // Validate new password
      if (form.newPassword.length > 0 && form.newPassword.length < 8) {
        newErrors.newPassword = 'Password must be at least 8 characters';
      }

      // Validate password match (only if both fields have content)
      if (form.confirmPassword.length > 0 && form.newPassword !== form.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }

      setErrors(newErrors);

      // Check if form is completely valid
      setIsValid(
        form.newPassword.length >= 8 &&
        form.confirmPassword.length >= 8 &&
        form.newPassword === form.confirmPassword
      );
    };

    validateForm();
  }, [form]);

  const handleChange = (field, value) => {
    setForm(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleReset = async () => {
    Keyboard.dismiss(); // Hide keyboard before showing alert
    
    if (!isValid) {
      Alert.alert(
        'Validation Error',
        'Please make sure:\n\n• Password is at least 8 characters\n• Passwords match'
      );
      return;
    }
	setIsLoading(true);
    // API call would go here
    try {
      const user = auth.currentUser;
      
      if (!user) {
        throw new Error('No authenticated user found');
      }

      await updatePassword(user, form.newPassword);
      
      Alert.alert(
        'Success', 
        'Password has been reset successfully', 
        [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
      );
    } catch (error) {
      console.error('Password reset error:', error);
      let errorMessage = 'Failed to reset password. Please try again.';
      
      if (error.code === 'auth/requires-recent-login') {
        errorMessage = 'For security, please log in again before changing your password.';
      }
      
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <StyledView className="items-center mt-8 mx-6 mb-6">
        <StyledText style={{ fontFamily: 'WorkSansBold', fontSize: 36, color: '#FF7A6C' }}>
          Password Reset
        </StyledText>
      </StyledView>

      {/* Password Reset Image */}
      <StyledView className="items-center mb-8 px-6">
        <StyledImage
          source={require('../../../assets/images/reset-password.png')}
          resizeMode="contain"
        />
      </StyledView>

      {/* Form */}
      <StyledView className="px-6 flex-1">
        {/* New Password Input */}
        <StyledView className="mb-4">
          <StyledText style={{ fontFamily: 'WorkSansMedium', fontSize: 18, color: '#FF7A6C', marginBottom: 8 }}>
             Enter your new password:
          </StyledText>
          <StyledTextInput
            className="border-2 p-4"
            style={{
              fontFamily: "WorkSansMedium",
              fontSize: 16,
              borderRadius: 18,
              borderColor: errors.newPassword ? "red" : "#6B7280",
            }}
            placeholder="Minimum 8 characters"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={form.newPassword}
            onChangeText={(text) => handleChange('newPassword', text)}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.newPassword ? (
            <StyledText style={{ fontFamily: 'WorkSansMedium', color: 'red', fontSize: 12, marginTop: 4 }}>
              {errors.newPassword}
            </StyledText>
          ) : (
            <StyledText style={{ fontFamily: 'WorkSansMedium', color: '#6B7280', fontSize: 12, marginTop: 4 }}>
              {form.newPassword.length > 0 ? `${form.newPassword.length}/8 characters` : ''}
            </StyledText>
          )}
        </StyledView>

        {/* Confirm Password Input */}
        <StyledView className="mb-6">
          <StyledText style={{ fontFamily: 'WorkSansMedium', fontSize: 18, color: '#FF7A6C', marginBottom: 8 }}>
            Confirm Password
          </StyledText>
          <StyledTextInput
            className="border border-2 p-4"
            style={{
              fontFamily: 'WorkSansMedium',
              fontSize: 16,
              borderRadius: 18,
              borderColor: errors.confirmPassword ? 'red' : '#6B7280',
            }}
            placeholder="Re-enter your password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={(text) => handleChange('confirmPassword', text)}
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={handleReset}
          />
          {errors.confirmPassword && (
            <StyledText style={{ fontFamily: 'WorkSansMedium', color: 'red', fontSize: 12, marginTop: 4 }}>
              {errors.confirmPassword}
            </StyledText>
          )}
        </StyledView>

        <StyledText style={{ fontFamily: 'WorkSansMedium', fontSize: 14, color: '#6B7280', textAlign: 'center' }}>
          Your password must be at least 8 characters long.
        </StyledText>
      </StyledView>

      {/* Reset Button */}
      <StyledView className="px-6 pb-8">
        <StyledTouchable
          className={`py-4 rounded-xl items-center ${isValid ? 'bg-[#FF7A6C]' : 'bg-gray-300'}`}
          onPress={handleReset}
          activeOpacity={0.8}
          disabled={!isValid}
        >
          <StyledText style={{ fontFamily: 'WorkSansBold', fontSize: 18, color: 'white' }}>
            Reset Password
          </StyledText>
        </StyledTouchable>
      </StyledView>
    </SafeAreaView>
  );
}