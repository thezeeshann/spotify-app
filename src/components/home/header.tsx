import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
