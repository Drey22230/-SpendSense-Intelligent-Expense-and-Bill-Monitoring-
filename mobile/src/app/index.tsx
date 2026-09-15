import { Text, View, StyleSheet, Button, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/register");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome </Text>
      <Image style={styles.image} source={require("../../Images/normal.png")}  />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F97316",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
});
