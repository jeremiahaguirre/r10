import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    textAlign: "left",
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    }),
    color: "#9963ea"
  }
});

export default styles;
