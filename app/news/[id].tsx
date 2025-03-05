import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity, Platform, Share } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NewsDetail = () => {
  const router = useRouter();
  const route = useRoute<any>();
  const newsData = route.params?.news ? JSON.parse(route.params.news) : null;
  const [showFullContent, setShowFullContent] = useState(false);

  if (!newsData) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No news data available</Text>
      </View>
    );
  }

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${newsData.title}\n\n${newsData.description || ""}`,
        title: newsData.title,
      });
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const renderHeader = () => (
    <>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.light.textDark} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerButton} onPress={handleShare}>
          <Ionicons
            name="share-outline"
            size={24}
            color={Colors.light.textDark}
          />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 16 }}>
        {newsData.urlToImage ? (
          <Image
            source={{ uri: newsData.urlToImage }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.error}>No image available</Text>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{newsData.title}</Text>

        <View style={styles.sourceInfo}>
          <Text style={styles.source}>{newsData.source?.name}</Text>
          <Text style={styles.date}>
            {new Date(newsData.publishedAt).toLocaleDateString()}
          </Text>
        </View>

        <Text style={styles.description}>{newsData.description}</Text>

        {newsData.content && (
          <>
            <Text style={styles.content}>
              {showFullContent
                ? newsData.content
                : `${newsData.content.substring(0, 150)}...`}
            </Text>
            <TouchableOpacity
              style={styles.readMoreButton}
              onPress={() => setShowFullContent(!showFullContent)}
            >
              <Text style={styles.readMoreText}>
                {showFullContent ? "Show Less" : "Read More"}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={null}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "ios" ? 50 : 16,
    paddingBottom: 16,
    backgroundColor: "#fff",
    zIndex: 10,
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 16,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.light.textDark,
    marginBottom: 12,
  },
  sourceInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  source: {
    fontSize: 14,
    color: Colors.light.primary,
    fontWeight: "600",
  },
  date: {
    fontSize: 14,
    color: Colors.light.icon,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.light.textDark,
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.light.textDark,
  },
  readMoreButton: {
    marginTop: 12,
    marginBottom: 20,
  },
  readMoreText: {
    color: Colors.light.primary,
    fontWeight: "600",
    fontSize: 16,
  },
  error: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});

export default NewsDetail;