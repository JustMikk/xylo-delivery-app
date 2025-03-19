import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { icons } from '../../../constants/icons';

export default function Fingerprint() {
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
        <Text className="text-2xl font-bold ml-4">Set Your Fingerprint</Text>
      </View>

      <Text className="text-base text-light mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Fingerprint Icon */}
      <View className="flex-1 items-center justify-center">
        <Image 
          source={icons.fingerprintLarge}
          className="w-48 h-48 opacity-20"
        />
      </View>

      {/* Bottom Buttons */}
      <View className="flex-row space-x-4 mb-8">
        <TouchableOpacity 
          className="flex-1 py-4 rounded-lg items-center bg-accent/20"
          onPress={() => router.back()}
        >
          <Text className="text-primary font-semibold">Skip</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="flex-1 bg-primary py-4 rounded-lg items-center"
          onPress={() => router.replace('/(tabs)')}
        >
          <Text className="text-white font-semibold">Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
} 