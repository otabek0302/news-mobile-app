import { Text, View, StyleSheet } from "react-native";

import CategorySlider from "@/components/home/CategorySlider";
import Header from "@/components/home/Header";
import TopHeadlineSlider from "@/components/home/TopHeadlineSlider";

const Home = () => {
  return (
    <View style={styles.homePage}>
      <Header />
      
      {/* Catgeory List Slider */}
      <CategorySlider />
      
      {/* Top Headline Slider */}
      <TopHeadlineSlider />
      
      <Text>Home page changed</Text>
    </View>
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
