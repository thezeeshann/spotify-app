import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View } from "react-native";
import PopularAlbums from "@/src/components/home/popular-albums";
import TopMixes from "@/src/components/home/top-mixes";
import RecommendedForYou from "@/src/components/home/recommended-for-you";
import Recents from "@/src/components/home/recent";
import Header from "@/src/components/home/header";
import { useState } from "react";
import Music from "@/src/components/home/music/home";
import Podcasts from "@/src/components/home/podcasts/home";

export default function App() {
  const [tabName, setTabName] = useState("All");

  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row flex-wrap items-center mt-6 gap-x-2 gap-y-2">
          <View
            className={`${tabName === "All" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              onPress={() => setTabName("All")}
              className={` ${tabName === "All" ? "text-[#333333]" : "text-[#FFFFFF]"}  text-lg`}
            >
              All
            </Text>
          </View>
          <View
            className={`${tabName === "Music" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              onPress={() => setTabName("Music")}
              className={` ${tabName === "Music" ? "text-[#333333]" : "text-[#FFFFFF]"}  text-lg`}
            >
              Music
            </Text>
          </View>
          <View
            className={`${tabName === "Podcasts" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              onPress={() => setTabName("Podcasts")}
              className={` ${tabName === "Podcasts" ? "text-[#333333]" : "text-[#FFFFFF]"}  text-lg`}
            >
              Podcasts
            </Text>
          </View>
        </View>

        {tabName === "All" && (
          <View>
            <Header />

            <TopMixes />

            <PopularAlbums />

            <Recents />

            <RecommendedForYou />
          </View>
        )}

        {tabName === "Music" && (
          <View>
            <Music />
          </View>
        )}

        {tabName === "Podcasts" && (
          <View>
            <Podcasts />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
