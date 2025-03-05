import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useEffect, useState } from "react";

import CategorySlider from "@/components/home/CategorySlider";
import Header from "@/components/home/Header";
import TopHeadlineSlider from "@/components/home/TopHeadlineSlider";
import HeadlineSlider from "@/components/home/HeadlineSlider";
import GlobalApi from "@/services/GlobalApi";
import Colors from "@/constants/Colors";


type Article = {
  urlToImage: string;
  title: string;
  source: {
    name: string;
  };
};

const Home = () => {
  const [newsList, setNewsList] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    setLoading(true);
    try {
      const res: any = (await GlobalApi.getTopHeadLines).data;
      setNewsList(res.articles || []);
    } catch (error) {
      console.error("Error fetching top headlines:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (articles: Article[]) => {
    setLoading(true);
    try {
      setNewsList(articles);
    } catch (error) {
      console.error("Error updating category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.homePage}>
      <Header />

      {/* Category List Slider */}
      <CategorySlider onCategoryChange={handleCategoryChange} />

      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={Colors.light.primary} />
        </View>
      ) : (
        <>
          {/* Top Headline Slider */}
          <TopHeadlineSlider newsList={newsList} />

          {/* Headline Slider */}
          <HeadlineSlider newsList={newsList} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 400,
  },
});

export default Home;
