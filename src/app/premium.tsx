import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "../lib/theme";

export default function App() {
  return (
    <ScrollView>
      <View>
        <Entypo name="spotify" size={24} color="black" />
        <Text className="text-red-500">Premium</Text>
        <Text>
          Listen Without limits. Try 2 months of premium for{" "}
          <FontAwesome name="rupee" size={24} color="black" /> 119
        </Text>
        <TouchableOpacity>
          <Text>Get Premium Individual</Text>
        </TouchableOpacity>
        <Text>
          <FontAwesome name="rupee" size={24} color="black" /> 119 for 2
          month's, then <FontAwesome name="rupee" size={24} color="black" /> per
          month after. Offer only available if you haven't tried premium before.
        </Text>
      </View>
    </ScrollView>
  );
}
