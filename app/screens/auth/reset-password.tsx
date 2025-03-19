import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { icons } from '../../../constants/icons';

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <Text className="text-2xl font-bold ml-4">Set Password</Text>
      </View>

      <Text className="text-base text-light mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Form */}
      <View className="space-y-4">
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

        <View>
          <Text className="text-base mb-2">Confirm Password</Text>
          <View className="relative">
            <TextInput
              placeholder="••••••••••••"
              secureTextEntry={!showConfirmPassword}
              className="bg-accent/20 p-4 rounded-lg pr-12"
            />
            <TouchableOpacity 
              className="absolute right-4 top-4"
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Image 
                source={icons.eye}
                className="w-5 h-5 opacity-50"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity 
          className="bg-primary py-4 rounded-lg items-center mt-8"
          onPress={() => router.replace('/screens/auth/fingerprint')}
        >
          <Text className="text-white font-semibold text-base">Create New Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 