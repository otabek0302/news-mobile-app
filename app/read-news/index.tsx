import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewsRead = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  content: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default NewsRead;