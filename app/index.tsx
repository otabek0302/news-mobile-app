import { StyleSheet, View } from "react-native";

import Home from "./(screen)/Home";

const Index = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 48,
  },
});

export default Index;