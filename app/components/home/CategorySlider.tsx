import { Colors } from "@/app/constants/Colors";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CategorySlider = () => {
  const categoryList = [
    {
      id: 1,
      category: "Lastest",
    },
    {
      id: 2,
      category: "World",
    },
    {
      id: 3,
      category: "Movies",
    },
    {
      id: 4,
      category: "Business",
    },
    {
      id: 5,
      category: "Sports",
    },
  ];
  const [active, setActive] = useState(1);
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item }) => (
            <TouchableOpacity style={styles.categorySliderButton} onPress={() => setActive(item.id)}>
                <Text style={styles.categorySliderSectionText}>
                  {item.category}
                </Text>
                <View style={active === item.id && styles.categorySliderButtonActive} />
            </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categorySliderButton: {
    marginRight: 24,
    marginTop: 4,
    marginBottom: 4,
    paddingTop: 8,
    paddingBottom: 8,
  },
  categorySliderButtonActive: {
    width: "100%",
    height: 4,
    marginTop: 2,
    backgroundColor: Colors.light.primary,
    borderRadius: 8,
  },
  categorySliderSectionText: {
    color: Colors.light.textDark,
    fontSize: 20,
    fontWeight: 700,
  },
});

export default CategorySlider;
