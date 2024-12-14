import React, { useState } from "react";
import { useLocalSearchParams, Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { songs } from "@/src/data/song.json";
import { useAudio } from "@/src/context/audio-context";

const ArtistSongDetails = () => {
  const { playSound, pauseSound, isPlaying, togglePlayPause, currentSong } =
    useAudio();
  const { artistId } = useLocalSearchParams();
  const screenWidth = Dimensions.get("window").width;

  const playRandomSong = () => {
    const random = songs[Math.floor(Math.random() * songs.length)];
    playSound(random);
  };

  const handlePlayPause = (song) => {
    if (currentSong?.id === song.id && isPlaying) {
      pauseSound(); // Pause if the same song is playing
    } else {
      playSound(song); // Play the selected song
    }
  };

  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"light-content"}
      />
      <View className="relative ">
        <Image
          style={{ width: screenWidth, height: 280 }}
          source={{
            uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
          }}
          resizeMode="cover"
        />
        <Text className="absolute text-5xl font-bold text-white bottom-2 left-4">
          Shubh
        </Text>
      </View>
      <SafeAreaView className="h-full px-4 py-4 bg-[#000000] ">
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          className="relative"
        >
          <Text className="text-[#dfd3d3]">12.9M monthly listeners</Text>
          <View className="flex flex-row items-center justify-between ">
            <View className="flex flex-row items-center gap-x-6">
              <Image
                source={require("@/assets/flowers.jpg")}
                className="w-[30px] h-[35px] rounded-md border-[#dfd3d3] px-3 py-1 border-2"
              />
              <TouchableOpacity className="rounded-md border-[#dfd3d3] px-3 py-1 border-2">
                <Text className="text-white">Follow</Text>
              </TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={28}
                color="#ffffff"
              />
            </View>
            <View className="flex flex-row items-center gap-x-4">
              <MaterialCommunityIcons
                name="arrow-decision"
                size={35}
                color="#1ED760"
              />
              <AntDesign
                name={isPlaying === true ? "pause" : "play"}
                size={45}
                color="#1ED760"
                onPress={() => {
                  currentSong ? pauseSound() : playSound(songs[0]);
                }}
              />
            </View>
          </View>
          {/* popular */}

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ height: 270 }}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <Text className="mt-6 text-xl font-bold text-white">Popular</Text>
            <View className="flex flex-col mt-5 gap-y-4">
              <FlatList
                data={songs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View className="flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center gap-x-4">
                      <Text className="font-bold text-white">{item.id}</Text>
                      <Image
                        source={{ uri: item.artwork }}
                        className="w-[50px] h-[50px]"
                      />
                      <View className="flex flex-col">
                        <Text className="text-white">{item.title}</Text>
                        <Text className="text-[#dfd3d3]">
                          {item.artist.slice(0, 16)}
                        </Text>
                      </View>
                    </View>
                    <View className="flex flex-row items-center gap-x-4">
                      <TouchableOpacity onPress={() => handlePlayPause(item)}>
                        {currentSong?.id === item.id && isPlaying ? (
                          <Entypo
                            name="controller-paus"
                            size={30}
                            color="#ffffff"
                          />
                        ) : (
                          <Entypo
                            name="controller-play"
                            size={30}
                            color="#ffffff"
                          />
                        )}
                      </TouchableOpacity>
                      <MaterialCommunityIcons
                        name="dots-vertical"
                        size={28}
                        color="#ffffff"
                      />
                    </View>
                  </View>
                )}
                scrollEnabled={false}
              />
            </View>
          </ScrollView>

          <Link href="/song/1">
            <View className="absolute left-0 right-0 flex-row items-center justify-between p-2 bg-gray-900 rounded-md -bottom-24">
              <Image
                source={{
                  uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
                }}
                className="w-12 h-12 rounded-md"
              />
              <View className="flex-1 px-4">
                <Text className="text-white">Daku</Text>
                <Text className="text-sm text-gray-400">Chani Nattan</Text>
              </View>
              <View className="flex flex-row items-center gap-x-4">
                <TouchableOpacity>
                  <MaterialIcons
                    name="add-circle-outline"
                    size={30}
                    color="#ffffff"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Entypo name="controller-play" size={30} color="#ffffff" />
                  {/* <Entypo name="controller-paus" size={30} color="#ffffff" /> */}
                </TouchableOpacity>
              </View>
            </View>
          </Link>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ArtistSongDetails;
