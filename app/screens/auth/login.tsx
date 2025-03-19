import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { icons } from '../../../constants/icons';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 bg-white px-5 pt-12">
      {/* Back button and title */}
      <View className="flex-row items-center mb-8">
        <TouchableOpacity onPress={() => router.back()}>
          <Image 
            source={icons.back}
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4">Login</Text>
      </View>

      {/* Form */}
      <View className="space-y-4">
        <View>
          <Text className="text-base mb-2">Email</Text>
          <TextInput
            placeholder="example@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-accent/20 p-4 rounded-lg"
          />
        </View>

        <View>
          <Text className="text-base mb-2">Password</Text>
          <View className="relative">
            <TextInput
              placeholder="••••••••••••"
              secureTextEntry={!showPassword}
              className="bg-accent/20 p-4 rounded-lg pr-12"
            />
            <TouchableOpacity 
              className="absolute right-4 top-4"
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image 
                source={icons.eye}
                className="w-5 h-5 opacity-50"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          onPress={() => router.push('/screens/auth/reset-password')}
          className="self-end"
        >
          <Text className="text-primary">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="bg-primary py-4 rounded-lg items-center mt-4"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-white font-semibold text-base">Login</Text>
        </TouchableOpacity>

        {/* Social Login */}
        <View className="mt-8">
          <Text className="text-center text-gray-500 mb-4">Or continue with</Text>
          <View className="flex-row justify-center space-x-4">
            <TouchableOpacity className="bg-accent/20 p-4 rounded-full">
              <Image source={icons.google} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-accent/20 p-4 rounded-full">
              <Image source={icons.apple} className="w-6 h-6" />
            </TouchableOpacity>
            <TouchableOpacity 
              className="bg-accent/20 p-4 rounded-full"
              onPress={() => router.push('/screens/auth/fingerprint')}
            >
              <Image source={icons.fingerprint} className="w-6 h-6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign up link */}
        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-500">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/screens/auth/signup')}>
            <Text className="text-primary">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 