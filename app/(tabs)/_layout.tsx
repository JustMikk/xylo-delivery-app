import { Tabs } from 'expo-router';
import { Image } from 'react-native';
import { icons } from '../../constants/icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#FF6B00',
          borderTopWidth: 0,
          height: 65,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        tabBarItemStyle: {
          marginTop: 5,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: '#fff',
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.menu}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: '#fff',
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: 'Favourites',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.favourites}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: '#fff',
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my_orders"
        options={{
          title: 'My Orders',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.myOrders}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: '#fff',
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: 'Help',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.help}
              style={{ 
                width: 24, 
                height: 24, 
                tintColor: '#fff',
                opacity: focused ? 1 : 0.5
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
