import { View, Image, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { images } from '../../constants/images';

export default function Onboarding1() {
  return (
    <View className="flex-1 bg-white">
      <TouchableOpacity 
        className="absolute right-5 top-12 z-10"
        onPress={() => router.replace('/screens/splash2')}
      >
        <Text className="text-primary font-semibold">Skip</Text>
      </TouchableOpacity>

      <Image
        source={images.pizza}
        className="w-full h-[60%]"
        resizeMode="cover"
      />

      <View className="flex-1 px-5 pt-8">
        <Text className="text-2xl font-bold text-dark text-center mb-4">
          Order For Food
        </Text>
        <Text className="text-base text-light text-center mb-8">
          Lorem ipsum dolor sit ame, consectetur adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </Text>

        <View className="flex-row justify-center space-x-2 mb-8">
          <View className="w-6 h-2 rounded-full bg-primary" />
          <View className="w-2 h-2 rounded-full bg-accent" />
          <View className="w-2 h-2 rounded-full bg-accent" />
        </View>

        <TouchableOpacity
          className="bg-primary py-4 rounded-lg items-center"
          onPress={() => router.replace('/screens/onboarding2')}
        >
          <Text className="text-white font-semibold text-base">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 