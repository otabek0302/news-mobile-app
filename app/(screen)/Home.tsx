import { View, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import CategorySlider from "@/components/home/CategorySlider";
import Header from "@/components/home/Header";
import TopHeadlineSlider from "@/components/home/TopHeadlineSlider";
import HeadlineSlider from "@/components/home/HeadlineSlider";
import GlobalApi from "@/services/GlobalApi";


type Article = {
  urlToImage: string;
  title: string;
  source: {
    name: string;
  };
};

const Home = () => {
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
    <ScrollView style={styles.homePage}>
      <Header />

      {/* Catgeory List Slider */}
      <CategorySlider />

      {/* Top Headline Slider */}
      <TopHeadlineSlider newsList={newsList} />

      {/* Headline Slider */}
      <HeadlineSlider newsList={newsList} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homePage: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default Home;
