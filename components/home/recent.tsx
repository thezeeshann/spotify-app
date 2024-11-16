import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const Recents = () => {
  return (
    <View className="mt-8">
      <Text className="text-[#FFFFFF]  font-bold text-2xl">Recent</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View className="flex flex-row items-center mt-4 gap-x-4">
          <View className="flex flex-col gap-y-1">
            <Image
              className="w-[150px] h-[150px]"
              source={{
                uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
              }}
            />
            <Text className="text-[#FFFFFF] font-bold ">GLORY</Text>
            <Text className="text-[#dfd3d3] text-sm">
              Album &#9679; Yo Yo Honey Singh
            </Text>
          </View>
          <View className="flex flex-col gap-y-1">
            <Image
              className="w-[150px] h-[150px]"
              source={{
                uri: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/track/4eBvRhTJ2AcxCsbfTUjoRp/en",
              }}
            />
            <Text className="text-[#FFFFFF] font-bold ">GLORY</Text>
            <Text className="text-[#dfd3d3] text-sm">
              Album &#9679; Yo Yo Honey Singh
            </Text>
          </View>
          <View className="flex flex-col gap-y-1">
            <Image
              className="w-[150px] h-[150px]"
              source={{
                uri: "https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36",
              }}
            />
            <Text className="text-[#FFFFFF] font-bold ">GLORY</Text>
            <Text className="text-[#dfd3d3] text-sm">
              Album &#9679; Yo Yo Honey Singh
            </Text>
          </View>
          <View className="flex flex-col gap-y-1">
            <Image
              className="w-[150px] h-[150px]"
              source={{
                uri: "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
              }}
            />
            <Text className="text-[#FFFFFF] font-bold ">GLORY</Text>
            <Text className="text-[#dfd3d3] text-sm">
              Album &#9679; Yo Yo Honey Singh
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Recents;
