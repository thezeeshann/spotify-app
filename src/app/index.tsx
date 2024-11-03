import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image } from "react-native";
import PopularAlbums from "../components/home/popular-albums";
import TopMixes from "../components/home/top-mixes";
import RecommendedForYou from "../components/home/recommended-for-you";
import Recents from "../components/home/recent";

export default function App() {
  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row flex-wrap items-center mt-6 gap-x-2 gap-y-2">
          <View className="bg-[#3BE377] rounded-full px-6 py-2">
            <Text className="text-[#333333] text-lg">All</Text>
          </View>
          <View className="bg-[#333333] rounded-full px-6 py-2">
            <Text className="text-[#FFFFFF] text-lg">Music</Text>
          </View>
          <View className="bg-[#333333] rounded-full px-6 py-2">
            <Text className="text-[#FFFFFF] text-lg">Podcasts</Text>
          </View>
        </View>

        <View className="flex flex-row flex-wrap w-full mt-8 gap-x-2 gap-y-2">
          <View className=" bg-[#333333] flex flex-row flex-wrap items-center gap-x-3 w-[160px] rounded-md ">
            <Image
              source={{
                uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
              }}
              className="w-[70px] h-[70px]"
            />
            <Text className="text-[#FFFFFF] text-lg font-bold">Shubh</Text>
          </View>
          <View className="bg-[#333333] flex flex-row items-center gap-x-3 w-[160px] rounded-md ">
            <Image
              source={{
                uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
              }}
              className="w-[70px] h-[70px]"
            />
            <Text className="text-[#FFFFFF] text-lg font-bold">Shubh</Text>
          </View>
          <View className="bg-[#333333] flex flex-row items-center gap-x-3 w-[160px] rounded-md ">
            <Image
              source={{
                uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
              }}
              className="w-[70px] h-[70px]"
            />
            <Text className="text-[#FFFFFF] text-lg font-bold">Shubh</Text>
          </View>
          <View className="bg-[#333333] flex flex-row items-center gap-x-3 w-[160px] rounded-md ">
            <Image
              source={{
                uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
              }}
              className="w-[70px] h-[70px]"
            />
            <Text className="text-[#FFFFFF] text-lg font-bold">Shubh</Text>
          </View>
        </View>

        <TopMixes />

        <PopularAlbums />

        <Recents />

        <RecommendedForYou />
      </ScrollView>
    </SafeAreaView>
  );
}
