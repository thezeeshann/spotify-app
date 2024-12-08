import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="artist/[artistId]"
        options={{
          title: "",
          headerTintColor: "white",
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="song/[songId]"
        options={{
          title: "",
          headerTransparent: true,
          presentation: "modal",
          headerTintColor: "white",
          headerTitle: () => (
            <View className="">
              <Text className="ml-20 text-xs text-white">
                PLAYING FROM ARTIST
              </Text>
              <Text className="ml-[100px] font-bold text-white"> Shubh</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={28}
                color="#ffffff"
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
