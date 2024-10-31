import { ScrollView, TextInput, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SearchCard from "../components/search/search-card";

export default function App() {
  return (
    <SafeAreaView className="h-full px-4 py-4 bg-[#000000]">
      <ScrollView>
        <View className="relative">
          <TextInput
            className="p-3 pl-10 bg-white rounded-md placeholder:font-semibold"
            placeholder="What do you want to listen to?"
            keyboardType="default"
          />
          <EvilIcons
            name="search"
            size={25}
            color="black"
            style={{
              position: "absolute",
              top: "50%",
              left: 10,
              transform: [{ translateY: -12.5 }],
            }}
          />
        </View>

        <Text className="text-[#FFFFFF] mt-6 font-bold text-2xl">
          Start browsing
        </Text>

        <View className="flex flex-row flex-wrap items-center justify-between mt-6 gap-x-4 gap-y-4">
          <SearchCard
            cardTitle="Music"
            cardImage={require("../../assets/music.jpg")}
          />
          <SearchCard
            cardTitle="Podcasts"
            cardImage={require("../../assets/poadcastes.jpg")}
          />
          <SearchCard
            cardTitle="Live Events"
            cardImage={require("../../assets/live-events.jpg")}
          />
        </View>

        <Text className="text-[#FFFFFF] mt-6 font-bold text-2xl">
          Browse all
        </Text>

        <View className="flex flex-row flex-wrap items-center justify-between mt-6 gap-x-4 gap-y-4">
          <SearchCard
            cardTitle="New Releases"
            cardImage={require("../../assets/new-relase.jpg")}
          />
          <SearchCard
            cardTitle="Hindi"
            cardImage={require("../../assets/hindi.jpg")}
          />
          <SearchCard
            cardTitle="Punjabi"
            cardImage={require("../../assets/panjabi.jpg")}
          />
          <SearchCard
            cardTitle="Tamil"
            cardImage={require("../../assets/tamil.jpg")}
          />
          <SearchCard
            cardTitle="Telugu"
            cardImage={require("../../assets/telugu.jpg")}
          />
          <SearchCard
            cardTitle="Podcast Charts"
            cardImage={require("../../assets/poadcasts-charts.jpeg")}
          />
          <SearchCard
            cardTitle="Video Podcasts"
            cardImage={require("../../assets/poadcasts-video.jpg")}
          />
          <SearchCard
            cardTitle="Business & Technology"
            cardImage={require("../../assets/buisness-technilogy.jpg")}
          />
          <SearchCard
            cardTitle="Charts"
            cardImage={require("../../assets/charts.jpg")}
          />
          <SearchCard
            cardTitle="Bhojpuri"
            cardImage={require("../../assets/bhojpuri.jpg")}
          />

          <SearchCard
            cardTitle="Summer"
            cardImage={require("../../assets/summer.jpg")}
          />
          <SearchCard
            cardTitle="Ghazals"
            cardImage={require("../../assets/gazals.jpg")}
          />
          <SearchCard
            cardTitle="Discover"
            cardImage={require("../../assets/discovers.jpeg")}
          />
          <SearchCard
            cardTitle="Pop"
            cardImage={require("../../assets/pop.jpg")}
          />
          <SearchCard
            cardTitle="Indie"
            cardImage={require("../../assets/indie.jpg")}
          />
          <SearchCard
            cardTitle="Love"
            cardImage={require("../../assets/love.jpg")}
          />
          <SearchCard
            cardTitle="Mood"
            cardImage={require("../../assets/mood.jpg")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
