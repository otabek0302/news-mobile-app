import React from "react";

import { useEffect, useRef } from "react";
import { Link, Stack } from "expo-router";
import { StyleSheet, View, Text, Animated } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function NotFoundScreen() {
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: '404 - Not Found' }} />
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.iconContainer,
            {
              transform: [
                {
                  translateY: bounceAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -20],
                  }),
                },
              ],
            },
          ]}>
          <FontAwesome name="exclamation-circle" size={120} color="#FF6B6B" />
        </Animated.View>
        <Text style={styles.title}>Oops!</Text>
        <Text style={styles.subtitle}>This page doesn't exist</Text>
        <Link href="/" style={styles.link}>
          <View style={styles.button}>
            <FontAwesome name="home" size={20} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Go to Home</Text>
          </View>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#343A40',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#6C757D',
    marginBottom: 30,
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4C6EF5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonIcon: {
    marginRight: 8,
  },
});
