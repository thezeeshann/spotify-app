import { View, Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type PremiumCardProp = {
  heading: string;
  subHeading: string;
  textOne: string;
  textTwo: string;
  textThree: string;
  textFour?: string;
  buttonText: string;
  subscriptionPrice?: string;
  subscriptionColor?: string;
  description: string;
};

const PremiumCard = ({
  heading,
  subHeading,
  textOne,
  textTwo,
  textThree,
  textFour,
  buttonText,
  subscriptionPrice,
  subscriptionColor,
  description,
}: PremiumCardProp) => {
  const getSubscriptionColor = (subscriptionColor: string) => {
    switch (subscriptionColor) {
      case "Mini":
        return "bg-[#CFF56A]";
      case "Individual":
        return "bg-[#FFD2D7]";
      case "Family":
        return "bg-[#A5BBD1]";
      case "Duo":
        return "bg-[#FFC862]";
      case "Student":
        return "bg-[#C4B1D4]";
    }
  };

  const getHeadingTextColor = (heading: string) => {
    switch (heading) {
      case "Mini":
        return "text-[#CFF56A]";
      case "Individual":
        return "text-[#FFD2D7]";
      case "Family":
        return "text-[#A5BBD1]";
      case "Duo":
        return "text-[#FFC862]";
      case "Student":
        return "text-[#C4B1D4]";
    }
  };

  const getBackgroundClass = (heading: string) => {
    switch (heading) {
      case "Mini":
        return "bg-[#CFF56A]";
      case "Individual":
        return "bg-[#FFD2D7]";
      case "Family":
        return "bg-[#A5BBD1]";
      case "Duo":
        return "bg-[#FFC862]";
      case "Student":
        return "bg-[#C4B1D4]";
    }
  };

  return (
    <View className="bg-[#242424] px-4 py-8  rounded-md mt-10 relative">
      <View
        className={`${getSubscriptionColor(subscriptionColor!)} px-4 py-[2px] rounded-br-md rounded-tl-md absolute top-0 left-0`}
      >
        <Text className="text-lg font-bold text-black ">
          {subscriptionPrice}
        </Text>
      </View>
      <View className="flex flex-row items-center gap-2 mt-8">
        <Entypo name="spotify" size={24} color="#FFFFFF" />
        <Text className="text-lg font-semibold text-white">Premium</Text>
      </View>
      <View className="flex flex-col mt-8 ">
        <Text className={`text-xl font-bold ${getHeadingTextColor(heading)}`}>
          {heading}
        </Text>
        <Text className="mt-1 text-xl font-bold text-white">{subHeading}</Text>
      </View>
      <View className="h-[1px] bg-[#7A7A7A] mt-8" />
      <View className="flex flex-col mt-8 gap-y-2">
        <Text className="text-lg font-semibold text-white">{textOne}</Text>
        <Text className="text-lg font-semibold text-white">{textTwo}</Text>
        <Text className="text-lg font-semibold text-white">{textThree}</Text>
        <Text className="text-lg font-semibold text-white">{textFour}</Text>
      </View>
      <TouchableOpacity className="mt-8 ">
        <Text
          className={`${getBackgroundClass(heading)} text-black font-bold rounded-full py-3 px-4 text-center text-xl`}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
      <Text className={` text-[##7A7A7A] mt-4 text-center`}>{description}</Text>
    </View>
  );
};

export default PremiumCard;
