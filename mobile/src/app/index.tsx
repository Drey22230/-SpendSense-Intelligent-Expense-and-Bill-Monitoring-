import { Text, View, StyleSheet, Button, TextInput } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, React Native!</Text>
      <Button title="Press me!" onPress={() => alert("Button pressed!")} />
      <TextInput
        placeholder="Enter text here..."
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    padding: 10,
    margin: 10,
  },
});
