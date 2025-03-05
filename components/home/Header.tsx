import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "@/constants/Colors";


const Header = () => {
  return (
    <View style={styles.headerSection}>
      <View style={styles.headerRow}>
        <Text style={styles.headerSectionText}>Category Slider</Text>
        <Ionicons name="notifications" size={32} color={Colors.light.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerSectionText: {
    color: Colors.light.primary,
    fontSize: 24,
    fontWeight: 700,
  },
});
export default Header;

