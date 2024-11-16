import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import PremiumAvailableCard from "@/components/premium/premium-available-plan";
import PremiumCard from "@/components/premium/premium-card";

export default function App() {
  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row items-center gap-2 mt-8">
          <Entypo name="spotify" size={24} color="#FFFFFF" />
          <Text className="text-[#FFFFFF] font-semibold text-lg">Premium</Text>
        </View>
        <View className="mt-6">
          <Text className="text-[#FFFFFF] font-bold text-3xl">
            Listen Without limits. Try 2 months of premium for{" "}
            <FontAwesome name="rupee" size={22} color="#FFFFFF" /> 119.
          </Text>
          <TouchableOpacity className="mt-8">
            <Text className="text-[#000000] bg-[#FFFFFF] font-semibold round rounded-full py-4 text-xl px-4 text-center">
              Get Premium Individual
            </Text>
          </TouchableOpacity>
          <Text className="text-[#ebe9e9] mt-6">
            <FontAwesome name="rupee" size={12} color="#FFFFFF" />
            119 for 2 month's, then{" "}
            <FontAwesome name="rupee" size={12} color="#FFFFFF" />
            119 per month after. Offer only available if you haven't tried
            premium before.
          </Text>
        </View>
        <PremiumAvailableCard />

        <Text className="mt-10 text-2xl text-[#FFFFFF]  font-bold">
          Available Plans
        </Text>
        <PremiumCard
          heading="Mini"
          subHeading="₹29 for 1 week"
          textOne="1 mobile-only Premium account"
          textTwo="Offline listening of up to 30 songs on 1 device"
          textThree="One-time payment"
          textFour="Basic audio quality"
          buttonText="Get Premium Mini"
          description="Terms apply."
        />
        <PremiumCard
          heading="Individual"
          subHeading="₹119 for 2 months"
          textOne="1 Premium account"
          textTwo="Cancel anytime"
          textThree="Subscribe or one-time payment"
          buttonText="Get Premium Individual"
          subscriptionColor="Individual"
          subscriptionPrice="₹119 for 2 months"
          description="₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. Terms apply."
        />
        <PremiumCard
          heading="Family"
          subHeading="₹179 for 2 months"
          textOne="Up to 6 Premium accounts"
          textTwo="Control content marked as explicit"
          textThree="Cancel anytime"
          textFour="Subscribe or one-time payment"
          buttonText="Get Premium Family"
          subscriptionColor="Family"
          subscriptionPrice="₹179 for 2 months"
          description="₹179 for 2 months, then ₹179 per month after. Offer only available if you haven't tried Premium before. For up to 6 family members residing at the same address. Terms apply."
        />
        <PremiumCard
          heading="Duo"
          subHeading="₹149 for 2 months"
          textOne="2 Premium accounts"
          textTwo="Cancel anytime"
          textThree="Subscribe or one-time payment"
          buttonText="Get Premium Duo"
          subscriptionColor="Duo"
          subscriptionPrice="₹149 for 2 months"
          description="₹149 for 2 months, then ₹149 per month after. Offer only available if you haven't tried Premium before. For couples who reside at the same address. Terms apply."
        />
        <PremiumCard
          heading="Student"
          subHeading="₹59 for 2 months"
          textOne="1 verified Premium account"
          textTwo="Discount for eligible students"
          textThree="Cancel anytime"
          textFour="Subscribe or one-time payment"
          buttonText="Get Premium Student"
          subscriptionColor="Student"
          subscriptionPrice="₹59 for 2 months"
          description="₹59 for 2 months, then ₹59 per month after. Offer available only to students at an accredited higher education institution and if you haven't tried Premium before. Terms apply."
        />
      </ScrollView>
    </SafeAreaView>
  );
}
