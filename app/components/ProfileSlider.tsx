import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { icons } from '../../constants/icons';
import Slider from './Slider';

interface MenuItemProps {
  icon: any;
  label: string;
  onPress: () => void;
}

function MenuItem({ icon, label, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity 
      className="flex-row items-center py-4 border-b border-white/10"
      onPress={onPress}
    >
      <View className="w-10 h-10 rounded-full bg-white items-center justify-center">
        <Image 
          source={icon} 
          className="w-5 h-5"
          style={{ tintColor: '#FF6B00' }}
        />
      </View>
      <Text className="flex-1 text-white text-lg ml-4">{label}</Text>
    </TouchableOpacity>
  );
}

interface ProfileSliderProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function ProfileSlider({ isVisible, onClose }: ProfileSliderProps) {
  const menuItems = [
    {
      icon: icons.myOrders,
      label: 'My Orders',
      onPress: () => router.push('/(tabs)/my_orders'),
    },
    {
      icon: icons.profile,
      label: 'My Profile',
      onPress: () => {},
    },
    {
      icon: icons.location,
      label: 'Delivery Address',
      onPress: () => {},
    },
    {
      icon: icons.payment,
      label: 'Payment Methods',
      onPress: () => {},
    },
    {
      icon: icons.contact,
      label: 'Contact Us',
      onPress: () => {},
    },
    {
      icon: icons.help,
      label: 'Help & FAQs',
      onPress: () => {},
    },
    {
      icon: icons.settings,
      label: 'Settings',
      onPress: () => {},
    },
  ];

  return (
    <Slider
      isVisible={isVisible}
      onClose={onClose}
      title=""
    >
      {/* User Info */}
      <View className="flex-row items-center mb-8">
        <Image 
          source={require('../../assets/images/profile-pic.png')}
          className="w-16 h-16 rounded-full"
        />
        <View className="ml-4">
          <Text className="text-white text-xl font-semibold">John Smith</Text>
          <Text className="text-white/60">Loremipsum@email.com</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            label={item.label}
            onPress={item.onPress}
          />
        ))}

        {/* Logout Button */}
        <TouchableOpacity 
          className="flex-row items-center py-4 mt-8"
          onPress={() => {}}
        >
          <View className="w-10 h-10 rounded-full bg-white items-center justify-center">
            <Image 
              source={icons.logout}
              className="w-5 h-5"
              style={{ tintColor: '#FF6B00' }}
            />
          </View>
          <Text className="flex-1 text-white text-lg ml-4">Log Out</Text>
        </TouchableOpacity>
      </View>
    </Slider>
  );
} 