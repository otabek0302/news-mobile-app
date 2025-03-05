import * as React from "react";
import Colors from "@/constants/Colors";

import { useRouter } from "expo-router";
import { FlatList, StyleSheet, TouchableOpacity, View, Image, Dimensions, Text } from "react-native";

type TopHeadlineSliderProps = {
  newsList: any[];
};

const TopHeadlineSlider: React.FC<TopHeadlineSliderProps> = ({ newsList }) => {
  const router = useRouter();

  const handleNewsPress = (item: any) => {
    const serializedNews = {
      title: item.title,
      description: item.description,
      content: item.content,
      urlToImage: item.urlToImage,
      publishedAt: item.publishedAt,
      source: item.source,
    };

      router.push({
        pathname: '/news/[id]',
        params: { 
          id: encodeURIComponent(item.title),
          news: JSON.stringify(serializedNews)
        }
      });
  };

  return (
    <View style={styles.topHeadlineContainer}>
      <FlatList data={newsList} horizontal keyExtractor={(item, index) => index.toString()} style={styles.topHeadlineImageContainer} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleNewsPress(item)}style={styles.topHeadlineImageBox}>
            <Image source={{ uri: item.urlToImage }} style={styles.topHeadlineImage} />
            <Text style={styles.topHeadlineTitle} numberOfLines={3}>
              {item?.title}
            </Text>
            <Text style={styles.topHeadlineText}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topHeadlineContainer: {
    marginTop: 6,
  },
  topHeadlineImageContainer: {},
  topHeadlineImageBox: {
    width: Dimensions.get("screen").width * 0.88,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: Colors.light.primary,
    borderRadius: 10,
  },
  topHeadlineImage: {
    width: "auto",
    height: 320,
    borderRadius: 10,
  },
  topHeadlineTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.light.textDark,
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  topHeadlineText: {
    fontSize: 14,
    fontWeight: "normal",
    color: Colors.light.primary,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});

export default TopHeadlineSlider;
