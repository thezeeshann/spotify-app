import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row flex-wrap items-center mt-6 gap-x-2 gap-y-2">
          <View className="bg-[#CFF56A] rounded-full px-6 py-2">
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

        <View className="mt-8">
          <Text className="text-[#FFFFFF]  font-bold text-2xl">
            Your Top mixes
          </Text>
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

        <View>
          <Text className="text-[#FFFFFF]  font-bold text-2xl">
            Popular albums
          </Text>
          <View>
            <View>
              <Image
                className="w-[150px] h-[150px]"
                source={{
                  uri: "https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88",
                }}
              />
              <Text></Text>
            </View>
            <View>
              <Image
                className="w-[150px] h-[150px]"
                source={{
                  uri: "https://i.scdn.co/image/ab67616d00001e021a8c4618eda885a406958dd0",
                }}
              />
              <Text></Text>
            </View>
            <View>
              <Image
                className="w-[150px] h-[150px]"
                source={{
                  uri: "https://i.scdn.co/image/ab67616d00001e02bb25239324c4e16ae01fda36",
                }}
              />
              <Text></Text>
            </View>
            <View>
              <Image
                className="w-[150px] h-[150px]"
                source={{
                  uri: "https://i.scdn.co/image/ab67616d00001e025f3ede47954a93aa03efe5f9",
                }}
              />
              <Text></Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
