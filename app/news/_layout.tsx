import React from "react";

import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';

export default function NewsLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="[id]" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
