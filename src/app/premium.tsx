import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView>
        <View className="flex flex-row items-center gap-2 mt-8">
          <Entypo name="spotify" size={24} color="#FFFFFF" />
          <Text className="text-[#FFFFFF] font-semibold text-lg">Premium</Text>
        </View>
        <View className="mt-6">
          <Text className="text-[#FFFFFF] font-bold text-3xl">
            Listen Without limits. Try 2 months of premium for{" "}
            <FontAwesome name="rupee" size={22} color="#FFFFFF" /> 119.
          </Text>
          <TouchableOpacity className="mt-8">
            <Text className="text-[#000000] bg-[#FFFFFF] font-semibold round rounded-full py-4 text-xl px-4 text-center">
              Get Premium Individual
            </Text>
          </TouchableOpacity>
          <Text className="text-[#ebe9e9] mt-6">
            <FontAwesome name="rupee" size={12} color="#FFFFFF" />
            119 for 2 month's, then{" "}
            <FontAwesome name="rupee" size={12} color="#FFFFFF" />
            119 per month after. Offer only available if you haven't tried
            premium before.
          </Text>
        </View>
        <View className="mt-10 text-[#FFFFFF] bg-[#242424] py-6 px-4 rounded-md">
          <Text className="text-2xl font-bold text-[#FFFFFF]">
            Why join Premium?
          </Text>
          <View className="flex flex-col mt-6 gap-y-4">
            <View className="flex flex-row items-center gap-x-2">
              <Ionicons name="megaphone-outline" size={30} color="#FFFFFF" />
              <Text className="text-[#FFFFFF]">Ad-free music listening</Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <Ionicons name="download-outline" size={30} color="#FFFFFF" />
              <Text className="text-[#FFFFFF] text-lg">
                Download to listen offline
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <MaterialIcons name="loop" size={30} color="#FFFFFF" />
              <Text className="text-[#FFFFFF] ">Play song in any order</Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <Feather name="headphones" size={30} color="#FFFFFF" />
              <Text className="text-[#FFFFFF] ">High audio quality</Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <Feather name="users" size={30} color="#FFFFFF" />
              <Text className="text-[#FFFFFF] ">
                Listen with friends in real time
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-2">
              <MaterialIcons name="queue-music" size={30} color="#FFFFFF" />
              <Text className="text-[#FFFFFF] ">Organize listening queue</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
