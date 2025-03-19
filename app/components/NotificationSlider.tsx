import { View, Text, Image, TouchableOpacity } from 'react-native';
import { icons } from '../../constants/icons';
import Slider from './Slider';

interface NotificationItemProps {
  icon: any;
  message: string;
}

function NotificationItem({ icon, message }: NotificationItemProps) {
  return (
    <TouchableOpacity className="flex-row items-center bg-white/10 p-4 rounded-xl mb-3">
      <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
        <Image 
          source={icon} 
          className="w-5 h-5"
          style={{ tintColor: '#fff' }}
        />
      </View>
      <Text className="flex-1 text-white ml-3">{message}</Text>
    </TouchableOpacity>
  );
}

interface NotificationSliderProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function NotificationSlider({ isVisible, onClose }: NotificationSliderProps) {
  const notifications = [
    {
      icon: icons.menu,
      message: 'We have added a product you might like',
    },
    {
      icon: icons.favourites,
      message: 'One of your favorite is on promotion',
    },
    {
      icon: icons.myOrders,
      message: 'Your order has been delivered',
    },
    {
      icon: icons.help,
      message: 'The delivery is on his way',
    },
  ];

  return (
    <Slider
      isVisible={isVisible}
      onClose={onClose}
      title="Notifications"
    >
      <View className="space-y-2">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            icon={notification.icon}
            message={notification.message}
          />
        ))}
      </View>
    </Slider>
  );
} 