import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Welcome to Budgeting App!</Text>
      <Button title="Go to Transactions" onPress={() => navigation.navigate("Transactions")} />
      <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />
    </View>
  );
};

export default HomeScreen;
