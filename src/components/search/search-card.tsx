import { View, Text, Image, ImageSourcePropType } from "react-native";

type SearchCardProp = {
  cardTitle: string;
  cardImage: ImageSourcePropType;
};

const SearchCard = ({ cardImage, cardTitle }: SearchCardProp) => {
  const getCardColor = (title: string) => {
    switch (title) {
      case "Music":
        return "bg-[#DC148C]";
      case "Podcasts":
        return "bg-[#006450]";
      case "Live Events":
        return "bg-[#8400E7]";
      case "New Releases":
        return "bg-[#608108]";
      case "Hindi":
        return "bg-[#DC148C]";
      case "Punjabi":
        return "bg-[#B02897]";
      case "Tamil":
        return "bg-[#BA5D07]";
      case "Telugu":
        return "bg-[#BA5D07]";
      case "Podcast Charts":
        return "bg-[#0D73EC]";
      case "Video Podcasts":
        return "bg-[#E13300]";
      case "Business & Technology":
        return "bg-[#777777]";
      case "Charts":
        return "bg-[#8D67AB]";
      case "Malayalam":
        return "bg-[#477D95]";
      case "Bhojpuri":
        return "bg-[#E13300]";
      case "Summer":
        return "bg-[#27856A]";
      case "Ghazals":
        return "bg-[#777777]";
      case "Discover":
        return "bg-[#8D67AB]";
      case "Pop":
        return "bg-[#477D95]";
      case "Indie":
        return "bg-[#E91429]";
      case "Love":
        return "bg-[#DC148C]";
      case "Mood":
        return "bg-[#E1118C]";
    }
  };

  return (
    <View
      className={`${getCardColor(cardTitle)} w-[155px] rounded-md h-[60px] p-4 flex flex-row justify-between overflow-hidden`}
    >
      <Text className="text-[#FFFFFF] font-bold text-xl">{cardTitle}</Text>
      <Image
        source={cardImage}
        style={{
          width: 50,
          height: 60,
          transform: [{ rotate: "15deg" }],
          marginRight: -18,
        }}
      />
    </View>
  );
};

export default SearchCard;
