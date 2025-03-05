import React from "react";
import Colors from "@/constants/Colors";
import GlobalApi from "@/services/GlobalApi";

import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CategorySliderProps = {
  onCategoryChange: (newsList: any[]) => void;
};

const CategorySlider: React.FC<CategorySliderProps> = ({ onCategoryChange }) => {
  const categoryList = [
    {
      id: 1,
      category: "Latest",
    },
    {
      id: 2,
      category: "Business",
    },
    {
      id: 3,
      category: "Technology",
    },
    {
      id: 4,
      category: "Entertainment",
    },
    {
      id: 5,
      category: "Sports",
    },
    {
      id: 6,
      category: "Science",
    },
    {
      id: 7,
      category: "Health",
    },
  ];
  const [active, setActive] = useState(1);

  const handleCategoryPress = async (item: any) => {
    setActive(item.id);
    
    try {
      if (item.category === "Latest") {
        // For "Latest", use the original top headlines API
        const res: any = (await GlobalApi.getTopHeadLines).data;
        if (res && res.articles) {
          onCategoryChange(res.articles);
        }
      } else {
        // For other categories, use the category-specific API
        const res: any = (await GlobalApi.getNewsByCategory(item.category)).data;
        if (res && res.articles) {
          onCategoryChange(res.articles);
        }
      }
    } catch (error) {
      console.error("Error fetching category news:", error);
    }
  };

  return (
    <View>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={categoryList} 
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categorySliderButton} onPress={() => handleCategoryPress(item)} >
            <Text style={styles.categorySliderSectionText}>
              {item.category}
            </Text>
            <View style={active === item.id && styles.categorySliderButtonActive} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categorySliderButton: {
    marginRight: 20,
    marginVertical: 10,
  },
  categorySliderSectionText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.light.textDark,
  },
  categorySliderButtonActive: {
    height: 3,
    width: "100%",
    backgroundColor: Colors.light.primary,
    marginTop: 5,
    borderRadius: 10,
  },
});
export default CategorySlider;

