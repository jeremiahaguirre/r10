import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "#9963ea",
    textAlign: "left",
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    })
  }
});

export default styles;
