import { Stack } from "expo-router";

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
    </Stack>
  );
}
