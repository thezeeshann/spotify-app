import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Music = () => {
  return (
    <SafeAreaView className="h-full bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row flex-wrap w-full gap-x-2 gap-y-2 ">
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Music;
