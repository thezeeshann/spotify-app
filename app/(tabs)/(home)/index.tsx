import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import PopularAlbums from "@/components/home/popular-albums";
import TopMixes from "@/components/home/top-mixes";
import RecommendedForYou from "@/components/home/recommended-for-you";
import Recents from "@/components/home/recent";
import Header from "@/components/home/header";
import { useState } from "react";
import Music from "@/components/home/music/home";
import Podcasts from "@/components/home/podcasts/home";

export default function App() {
  const [tabName, setTabName] = useState("All");

  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle={"light-content"}
        />
        <View className="flex flex-row flex-wrap items-center mt-6 gap-x-2 gap-y-2">
          <TouchableOpacity
            onPress={() => setTabName("All")}
            className={`${tabName === "All" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              className={` ${tabName === "All" ? "text-[#333333]" : "text-[#FFFFFF]"} `}
            >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTabName("Music")}
            className={`${tabName === "Music" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              className={` ${tabName === "Music" ? "text-[#333333]" : "text-[#FFFFFF]"}  `}
            >
              Music
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTabName("Podcasts")}
            className={`${tabName === "Podcasts" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              className={` ${tabName === "Podcasts" ? "text-[#333333]" : "text-[#FFFFFF]"} `}
            >
              Podcasts
            </Text>
          </TouchableOpacity>
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
