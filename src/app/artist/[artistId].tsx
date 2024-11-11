import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ArtistSongDetails = () => {
  const { artistId } = useLocalSearchParams();
  console.log(artistId);

  return (
    <View>
      <Text>artisti single {artistId}</Text>
    </View>
  );
};

export default ArtistSongDetails;
