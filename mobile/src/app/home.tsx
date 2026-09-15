import { View, Text, Pressable, StyleSheet } from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");
    } catch (error) {
      console.log("LOGOUT ERROR:", error);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SpendSense</Text>

      <Text style={styles.welcome}>Welcome back! 👋</Text>

      <Text style={styles.email}>{user?.email ?? "No user"}</Text>

      <Pressable style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  welcome: {
    fontSize: 18,
    marginTop: 10,
  },

  email: {
    fontSize: 16,
    marginTop: 10,
  },

  button: {
    marginTop: 30,
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
