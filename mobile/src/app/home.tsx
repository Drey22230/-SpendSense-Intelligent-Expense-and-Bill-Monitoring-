import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SpendSense
      </Text>

      <Text style={styles.welcome}>
        Welcome back! 👋
      </Text>

      <View style={styles.card}>
        <Text>Monthly Budget</Text>
        <Text style={styles.amount}>₱0</Text>
      </View>

      <View style={styles.card}>
        <Text>Total Spent</Text>
        <Text style={styles.amount}>₱0</Text>
      </View>

      <View style={styles.card}>
        <Text>Remaining</Text>
        <Text style={styles.amount}>₱0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  welcome: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30,
  },

  card: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 15,
  },

  amount: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 8,
  },
});