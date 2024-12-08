import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { artists } from "@/data/artists.json";
import { useState } from "react";

export default function App() {
  const [categoryTab, setCategoryTab] = useState("");
  const filteredArtists = categoryTab
    ? artists.filter((artist) => artist.category === categoryTab)
    : artists;

  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text className="text-[#FFFFFF] font-bold text-2xl">Your Library</Text>
        <View className="flex flex-row flex-wrap items-center mt-6 gap-x-2 gap-y-2">
          <TouchableOpacity
            onPress={() => setCategoryTab("Playlist")}
            className={`${categoryTab === "Playlist" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              className={` ${categoryTab === "Playlist" ? "text-[#333333]" : "text-[#FFFFFF]"} `}
            >
              Playlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCategoryTab("Artist")}
            className={`${categoryTab === "Artist" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              className={` ${categoryTab === "Artist" ? "text-[#333333]" : "text-[#FFFFFF]"} `}
            >
              Artists
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setCategoryTab("Podcast")}
            className={`${categoryTab === "Podcast" ? "bg-[#3BE377]" : "bg-[#333333]"} rounded-full px-6 py-2`}
          >
            <Text
              className={` ${categoryTab === "Podcast" ? "text-[#333333]" : "text-[#FFFFFF]"} `}
            >
              Podcasts
            </Text>
          </TouchableOpacity>
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

        {filteredArtists.map((artist) => (
          <View
            key={artist.id}
            className="flex flex-row items-center mt-6 gap-x-3"
          >
            <View>
              <Image
                className={`${artist.category === "Playlist" ? "" : "rounded-full"} w-[60px] h-[60px]`}
                source={{
                  uri: artist.image,
                }}
              />
            </View>
            <View>
              <Text className="text-[#FFFFFF] text-base">
                {artist.artistsName}
                {""}
              </Text>
              <Text className="text-[#dfd3d3] text-base">
                {artist.category}{" "}
                {artist.category === "Podcast" ? artist.artist : ""}
              </Text>
            </View>
          </View>
        ))}

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
          <Text className="text-[#FFFFFF]">Add podcasts</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
