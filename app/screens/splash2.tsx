import { View, Image, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { images } from '../../constants/images';

export default function Splash2() {
  return (
    <View className="flex-1 bg-white items-center justify-center p-5">
      <Image 
        source={images.logo} 
        className="w-36 h-36 mb-8"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold mb-2 text-dark">Welcome to Xylo</Text>
      <Text className="text-base text-light mb-10">Your favorite delivery app</Text>
      
      <View className="w-full space-y-4">
        <TouchableOpacity 
          className="w-full bg-primary py-4 rounded-lg items-center"
          onPress={() => router.replace('/screens/onboarding1')}
        >
          <Text className="text-white text-base font-semibold">Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-accent py-4 rounded-lg items-center"
          onPress={() => router.replace('/screens/onboarding1')}
        >
          <Text className="text-primary text-base font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 