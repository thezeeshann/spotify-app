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
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

export default function MVPScreen() {
  const { songId } = useLocalSearchParams();
  const screenWidth = Dimensions.get("window").width;

  console.log(songId);

  return (
    <View className="h-full bg-[#000000]">
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"light-content"}
      />
      <View className="">
        <Image
          style={{ width: screenWidth, height: 550 }}
          source={{
            uri: "https://i.pinimg.com/736x/68/51/8d/68518d3ee08506d0a97047bdb1499a13.jpg",
          }}
          resizeMode="cover"
          blurRadius={2}
        />
        <ScrollView
          className="px-4 bg-[#000000]"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View className="flex flex-row items-center justify-between w-full mt-3 ">
            <View className="flex flex-row items-center gap-x-2">
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/68/51/8d/68518d3ee08506d0a97047bdb1499a13.jpg",
                }}
                className="w-16 h-16 rounded-md"
              />
              <View className="flex flex-col items-center">
                <Text className="text-xl font-bold text-white">One Love</Text>
                <Text className="font-bold text-[#dfd3d3]">Shubh</Text>
              </View>
            </View>
            <View>
              <Ionicons name="checkmark-circle" size={35} color="#1ED760" />
            </View>
          </View>

          <View className="mt-4">
            <Slider
              style={{ width: "100%", height: 0, marginTop: 10 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#a9a9a9"
              thumbTintColor="#FFFFFF"
            />
            <View className="flex flex-row items-center justify-between px-2 mt-4">
              <Text className="text-[#dfd3d3] text-sm">0.00</Text>
              <Text className="text-[#dfd3d3] text-sm">0.00</Text>
            </View>
          </View>

          <View className="flex flex-row items-center justify-between mt-2 ">
            <Ionicons name="shuffle" size={28} color="#ffffff" />
            <AntDesign name="stepbackward" size={30} color="#ffffff" />
            <AntDesign name="play" size={60} color="#ffffff" />
            <AntDesign name="stepforward" size={30} color="#ffffff" />
            {/* <AntDesign name="pausecircle" size={24} color="#ffffff" /> */}
            <MaterialCommunityIcons
              name="timer-outline"
              size={28}
              color="#ffffff"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
