import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";

const ArtistSongDetails = () => {
  const { artistId } = useLocalSearchParams();
  console.log(artistId);

  const screenWidth = Dimensions.get("window").width;
  console.log(screenWidth);

  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"light-content"}
      />
      <Image
        style={{ width: screenWidth, height: 280 }}
        source={{
          uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
        }}
        resizeMode="cover"
      />
    </View>
    // <SafeAreaView className="h-full bg-[#000000]">
    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     showsHorizontalScrollIndicator={false}
    //   >
    //     <View className="flex flex-row mt-4 gap-x-4">
    //       <Image
    //         style={{ width: screenWidth, height: 250 }}
    //         source={{
    //           uri: "https://i.scdn.co/image/ab676161000051748f553f96d564d1005a92d131",
    //         }}
    //         resizeMode="cover"
    //       />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};

export default ArtistSongDetails;
