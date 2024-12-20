import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Colors from "@/constants/Colors";

type HeadlineSliderProps = {
  newsList: any[];
};

const HeadlineSlider: React.FC<HeadlineSliderProps> = ({ newsList }) => {
  return (
    <View style={styles.headlineSliderContainer}>
      <FlatList
        data={newsList}
        keyExtractor={(item, index) => index.toString()}
        style={styles.headlineSliderFlatList}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={styles.headlineSliderImageBox}>
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.headlineSliderImage}
                />
              <View style={{ marginRight: 130, marginLeft: 12 }}>
                <Text style={styles.headlineSliderImageBoxTitle} numberOfLines={4}>{item.title}</Text>
                <Text style={styles.headlineSliderImageBoxText}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={{ height: 0.5, marginTop: 12, backgroundColor: Colors.light.tabIconDefault }}></View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headlineSliderContainer: {
    marginTop: 12,
    marginBottom: 24,
  },
  headlineSliderFlatList: {},
  headlineSliderImageBox: {
    marginTop: 12,
    display: "flex",
    flexDirection: "row"
  },
  headlineSliderImageBoxTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  headlineSliderImageBoxText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.light.primary,
    marginTop: 6,
  },
  headlineSliderImage: {
    width: 130,
    height: 130,
    borderRadius: 12,
  },
});

export default HeadlineSlider;
