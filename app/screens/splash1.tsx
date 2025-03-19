import { View, Image } from 'react-native';
import { useEffect } from 'react';
import { router } from 'expo-router';
import { images } from '../../constants/images';

export default function Splash1() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/screens/onboarding1');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Image 
        source={images.logo} 
        className="w-48 h-48"
        resizeMode="contain"
      />
    </View>
  );
} 