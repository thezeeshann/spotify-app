import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const TopMixes = () => {
  return (
    <View className="mt-8">
      <Text className="text-[#FFFFFF]  font-bold text-2xl">Your Top mixes</Text>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row mt-4 gap-x-4">
          <Image
            className="w-[150px] h-[150px]"
            source={{
              uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/6DARBhWbfcS9E4yJzcliqQ/en/default",
            }}
          />
          <Image
            className="w-[150px] h-[150px]"
            source={{
              uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/5r3wPya2PpeTTsXsGhQU8O/en/default",
            }}
          />
          <Image
            className="w-[150px] h-[150px]"
            source={{
              uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/6DARBhWbfcS9E4yJzcliqQ/en/default",
            }}
          />
          <Image
            className="w-[150px] h-[150px]"
            source={{
              uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/6DARBhWbfcS9E4yJzcliqQ/en/default",
            }}
          />
          <Image
            className="w-[150px] h-[150px]"
            source={{
              uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/6DARBhWbfcS9E4yJzcliqQ/en/default",
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TopMixes;
