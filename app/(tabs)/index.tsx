import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { icons } from '../../constants/icons';
import { images } from '../../constants/images';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Search and Icons Header */}
      <View className="flex-row items-center px-5 mt-4 mb-6">
        <View className="flex-1 flex-row items-center bg-accent/10 rounded-full p-4 mr-5">
          <TextInput
            placeholder="Search"
            className="flex-1 text-base ml-2"
          />
          <TouchableOpacity>
            <Image source={icons.search} className="w-9 h-9 opacity-50" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image source={icons.cart} className="w-9 h-9" />
        </TouchableOpacity>
        <TouchableOpacity className="ml-5">
          <Image source={icons.notification} className="w-9 h-9" />
        </TouchableOpacity>
        <TouchableOpacity className="ml-5">
          <Image source={icons.profile} className="w-9 h-9" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        {/* Good Morning Section */}
        <View className="px-5 py-8 mb-8 bg-secondary">
          <Text className="text-2xl font-bold">Good Morning</Text>
          <Text className="text-primary text-base">Rise And Shine! It's Breakfast Time</Text>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mb-8"
          contentContainerStyle={{
            paddingHorizontal: 20,
            gap: 5
          }}
        >
          <CategoryItem icon={icons.category.snacks} label="Snacks" />
          <CategoryItem icon={icons.category.meal} label="Meal" />
          <CategoryItem icon={icons.category.vegan} label="Vegan" />
          <CategoryItem icon={icons.category.dessert} label="Dessert" />
          <CategoryItem icon={icons.category.drinks} label="Drinks" />
        </ScrollView>

        {/* Best Seller */}
        <View className="mb-8">
          <View className="flex-row justify-between items-center px-5 mb-4">
            <Text className="text-lg font-bold">Best Seller</Text>
            <TouchableOpacity>
              <Text className="text-primary">View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 20,
              gap: 20
            }}
          >
            <BestSellerCard image={images.sushi} price={103.0} />
            <BestSellerCard image={images.chicken} price={50.0} />
            <BestSellerCard image={images.salad} price={12.99} />
            <BestSellerCard image={images.cupcake} price={8.20} />
          </ScrollView>
        </View>

        {/* Promo Banner */}
        <TouchableOpacity className="mx-5 mb-8">
          <LinearGradient
            colors={['#FF6B00', '#FF3F00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="w-full h-40 rounded-2xl overflow-hidden relative"
          >
            {/* Decorative circles */}
            <View className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-white/10" />
            <View className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white/10" />
            
            <View className="flex-row h-full">
              <View className="flex-1 p-6 justify-center">
                <Text className="text-white text-lg mb-2">
                  Experience our delicious new dish
                </Text>
                <Text className="text-white text-3xl font-bold">
                  30% OFF
                </Text>
              </View>
              
              <View className="w-48 h-full justify-end">
                <Image 
                  source={images.pizza}
                  className="w-full h-48"
                  resizeMode="cover"
                />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Recommend */}
        <View className="px-5 mb-8">
          <Text className="text-lg font-bold mb-4">Recommend</Text>
          <View className="space-y-4">
            <RecommendCard 
              image={images.burger}
              rating={5.0}
              price={10.0}
            />
            <RecommendCard 
              image={images.springRolls}
              rating={5.0}
              price={25.0}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryItem({ icon, label }: { icon: any; label: string }) {
  return (
    <TouchableOpacity className="items-center">
      <View className="w-20 h-20 rounded-full bg-accent/10 items-center justify-center mb-2">
        <Image 
          source={icon} 
          className="w-10 h-10"
          resizeMode="contain"
        />
      </View>
      <Text className="text-sm text-center">{label}</Text>
    </TouchableOpacity>
  );
}

function BestSellerCard({ image, price }: { image: any; price: number }) {
  return (
    <TouchableOpacity className="w-32">
      <Image 
        source={image}
        className="w-full h-32 rounded-2xl mb-2"
        resizeMode="cover"
      />
      <Text className="text-primary font-semibold">${price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

function RecommendCard({ image, rating, price }: { image: any; rating: number; price: number }) {
  return (
    <TouchableOpacity className="flex-row bg-accent/10 p-3 rounded-2xl">
      <Image 
        source={image}
        className="w-24 h-24 rounded-xl"
        resizeMode="cover"
      />
      <View className="flex-1 ml-4 justify-center">
        <View className="flex-row items-center mb-2">
          <Text className="text-sm font-semibold mr-1">{rating.toFixed(1)}</Text>
          <Image source={icons.star} className="w-4 h-4" />
        </View>
        <Text className="text-primary font-semibold">${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}
