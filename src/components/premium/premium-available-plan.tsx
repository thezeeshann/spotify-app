import { View, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const PremiumAvailableCard = () => {
  return (
    <View className="mt-10 text-[#FFFFFF] bg-[#242424] py-6 px-4 rounded-md">
      <Text className="text-2xl font-bold text-[#FFFFFF]">
        Why join Premium?
      </Text>
      <View className="h-[1px] bg-[#7A7A7A] mt-8" />
      <View className="flex flex-col mt-6 gap-y-4">
        <View className="flex flex-row items-center gap-x-2">
          <Ionicons name="megaphone-outline" size={30} color="#FFFFFF" />
          <Text className="text-[#FFFFFF]">Ad-free music listening</Text>
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <Ionicons name="download-outline" size={30} color="#FFFFFF" />
          <Text className="text-[#FFFFFF] text-lg">
            Download to listen offline
          </Text>
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <MaterialIcons name="loop" size={30} color="#FFFFFF" />
          <Text className="text-[#FFFFFF] ">Play song in any order</Text>
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <Feather name="headphones" size={30} color="#FFFFFF" />
          <Text className="text-[#FFFFFF] ">High audio quality</Text>
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <Feather name="users" size={30} color="#FFFFFF" />
          <Text className="text-[#FFFFFF] ">
            Listen with friends in real time
          </Text>
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <MaterialIcons name="queue-music" size={30} color="#FFFFFF" />
          <Text className="text-[#FFFFFF] ">Organize listening queue</Text>
        </View>
      </View>
    </View>
  );
};

export default PremiumAvailableCard;
