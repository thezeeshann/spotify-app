import { View, Text, ScrollView, Image } from "react-native";

const PopularAlbums = () => {
  return (
    <View className="mt-8">
      <Text className="text-[#FFFFFF]  font-bold text-2xl">Popular albums</Text>

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
                uri: "https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88",
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
                uri: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0",
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

export default PopularAlbums;
