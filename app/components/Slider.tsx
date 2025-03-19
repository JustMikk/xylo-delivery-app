import { View, Text, TouchableOpacity, Animated, Dimensions, Image } from 'react-native';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { icons } from '../../constants/icons';

const { width } = Dimensions.get('window');

interface SliderProps {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Slider({ isVisible, onClose, title, children }: SliderProps) {
  const slideAnim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.spring(slideAnim, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: width,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          className="absolute inset-0 bg-black/50"
        />
      )}
      
      <Animated.View
        className="absolute top-0 right-0 bottom-0 w-[85%] bg-primary rounded-l-3xl p-5"
        style={{
          transform: [{ translateX: slideAnim }],
        }}
      >
        <View className="flex-row items-center mb-8">
          <TouchableOpacity onPress={onClose}>
            <Image 
              source={icons.back}
              className="w-6 h-6"
              style={{ tintColor: '#fff' }}
            />
          </TouchableOpacity>
          <Text className="text-white text-xl font-semibold ml-4">{title}</Text>
        </View>

        {children}
      </Animated.View>
    </>
  );
} 