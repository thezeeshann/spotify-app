import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MVPScreen() {
  const { songId } = useLocalSearchParams();
  const screenWidth = Dimensions.get("window").width;

  console.log(songId);

  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"light-content"}
      />
      <View className="relative ">
        <Image
          style={{ width: screenWidth, height: 600 }}
          source={{
            uri: "https://i.pinimg.com/736x/68/51/8d/68518d3ee08506d0a97047bdb1499a13.jpg",
          }}
          resizeMode="cover"
        />
        {/* <Text className="absolute text-5xl font-bold text-white bottom-2 left-4">
          Shubh
        </Text> */}
      </View>

      <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        ></ScrollView>
      </SafeAreaView>
    </View>
  );
}
