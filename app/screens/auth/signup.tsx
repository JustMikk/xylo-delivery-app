import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import { icons } from '../../../constants/icons';

export default function Signup() {
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
        <Text className="text-2xl font-bold ml-4">New Account</Text>
      </View>

      {/* Form */}
      <View className="space-y-4">
        <View>
          <Text className="text-base mb-2">Full name</Text>
          <TextInput
            placeholder="example@example.com"
            className="bg-accent/20 p-4 rounded-lg"
            autoCapitalize="words"
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

        <View>
          <Text className="text-base mb-2">Email</Text>
          <TextInput
            placeholder="example@example.com"
            className="bg-accent/20 p-4 rounded-lg"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text className="text-base mb-2">Mobile Number</Text>
          <TextInput
            placeholder="+ 123 456 789"
            className="bg-accent/20 p-4 rounded-lg"
            keyboardType="phone-pad"
          />
        </View>

        <View>
          <Text className="text-base mb-2">Date of birth</Text>
          <TextInput
            placeholder="DD / MM / YYYY"
            className="bg-accent/20 p-4 rounded-lg"
          />
        </View>

        <View className="mt-4">
          <Text className="text-center text-sm text-gray-500">
            By continuing, you agree to{' '}
            <Text className="text-primary">Terms of Use</Text> and{' '}
            <Text className="text-primary">Privacy Policy</Text>.
          </Text>
        </View>

        <TouchableOpacity 
          className="bg-primary py-4 rounded-lg items-center mt-4"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-white font-semibold text-base">Sign Up</Text>
        </TouchableOpacity>

        <View className="items-center mt-4">
          <Text className="text-gray-500">or sign up with</Text>
          <View className="flex-row space-x-4 mt-4">
            <TouchableOpacity>
              <Image 
                source={icons.google}
                className="w-8 h-8"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image 
                source={icons.apple}
                className="w-8 h-8"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image 
                source={icons.fingerprint}
                className="w-8 h-8 opacity-20"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-500">Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/screens/auth/login')}>
            <Text className="text-primary">Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
} 