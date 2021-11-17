import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const MessageScreen = () => {
  return (
    <SafeAreaView>
      <Header title="chat" callEnabled />
      <Text>MessageSreen</Text>
    </SafeAreaView>
  );
};

export default MessageScreen;
