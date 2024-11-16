import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text className="text-[#FFFFFF] font-bold text-2xl">Your Library</Text>
        <View className="flex flex-row flex-wrap items-center mt-6 gap-x-2 gap-y-2">
          <View className="bg-[#333333] rounded-full px-6 py-2">
            <Text className="text-[#FFFFFF] text-lg">Playlist</Text>
          </View>
          <View className="bg-[#333333] rounded-full px-6 py-2">
            <Text className="text-[#FFFFFF] text-lg">Artists</Text>
          </View>
          <View className="bg-[#333333] rounded-full px-6 py-2">
            <Text className="text-[#FFFFFF] text-lg">Podcasts</Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-between mt-6 ">
          <View className="flex flex-row items-center gap-x-4">
            <View className="flex flex-row">
              <AntDesign name="arrowdown" size={15} color="#FFFFFF" />
              <AntDesign name="arrowup" size={15} color="#FFFFFF" />
            </View>
            <Text className="text-[#FFFFFF] text-lg">Recents</Text>
          </View>
          <Octicons name="apps" size={24} color="#FFFFFF" />
        </View>

        <View className="flex flex-row items-center mt-6 gap-x-3">
          <View>
            <Image
              className="w-[60px] h-[60px] rounded-full"
              source={{
                uri: "https://i.pinimg.com/564x/af/72/c0/af72c0daf5163d14ed28f485e1d8d660.jpg",
              }}
            />
          </View>
          <View>
            <Text className="text-[#FFFFFF] text-base">Arijit Singh </Text>
            <Text className="text-[#dfd3d3] text-base">Artist</Text>
          </View>
        </View>
        <View className="flex flex-row items-center mt-6 gap-x-3">
          <View>
            <Image
              className="w-[60px] h-[60px] rounded-full"
              source={{
                uri: "https://i.pinimg.com/564x/af/72/c0/af72c0daf5163d14ed28f485e1d8d660.jpg",
              }}
            />
          </View>
          <View>
            <Text className="text-[#FFFFFF] text-base">Arijit Singh </Text>
            <Text className="text-[#dfd3d3] text-base">Artist</Text>
          </View>
        </View>

        <View className="flex flex-row items-center mt-4 gap-x-4">
          <View className="bg-[#333333] p-5 rounded-full">
            <Ionicons name="add" size={30} color="#FFFFFF" />
          </View>
          <Text className="text-[#FFFFFF]">Add artists</Text>
        </View>
        <View className="flex flex-row items-center mt-4 gap-x-4">
          <View className="bg-[#333333] p-5 rounded-md">
            <Ionicons name="add" size={30} color="#FFFFFF" />
          </View>
          <Text className="text-[#FFFFFF]">Add artists</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
