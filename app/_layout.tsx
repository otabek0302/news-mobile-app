import { Slot } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF", paddingTop: 48 }}>
      <Slot />
    </View>
  );
}