import Colors from "@/constants/Colors";
import GlobalApi from "@/services/GlobalApi";

import { useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View, Image, Dimensions, Text } from "react-native";

type Article = {
  urlToImage: string;
  title: string;
  source: {
    name: string;
  };
};


const TopHeadlineSlider = () => {
  const [newsList, setNewsList] = useState<Article[]>([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const res: any = (await GlobalApi.getTopHeadLines).data;
    // console.log(res);
    setNewsList(res.articles || []);
  };

  return (
    <View style={styles.topHeadlineContainer}>
      <FlatList
        data={newsList}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        style={styles.topHeadlineImageContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.topHeadlineImageBox}>
            <Image source={{ uri: item.urlToImage }} style={styles.topHeadlineImage} />
            <Text style={styles.topHeadlineTitle} numberOfLines={3}>{item?.title}</Text>
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
  topHeadlineImageContainer: {
  },
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
  }
});

export default TopHeadlineSlider;