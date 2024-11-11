import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "@/src/lib/theme";
import "@/global.css";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorWhite }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          headerTitleStyle: {
            color: theme.colorWhite,
          },
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="library" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="premium"
        options={{
          title: "Premium",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.colorBlack,
          },
          headerStyle: {
            backgroundColor: theme.colorBlack,
          },
          tabBarIcon: ({ size, color }) => (
            <Entypo name="spotify" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
