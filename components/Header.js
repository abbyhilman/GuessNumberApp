import React from "react";
import { View, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

const android = Platform.OS === "android";
const ios = Platform.OS === "ios";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: android ? Colors.primary : "white",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: ios ? "#ccc" : "transparent",
    borderBottomWidth: ios ? 1 : 0,
  },
  title: {
    color: ios ? Colors.primary : "white",
  },
});

export default Header;
