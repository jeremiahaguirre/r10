import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  time: {
    padding: 8,
    backgroundColor: "lightgrey",
    width: "100%",
    fontWeight: "bold",
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    })
  },
  span1: {
    marginTop: 20,
    width: "100%",
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    })
  },
  span2: {
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    }),
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    color: "grey"
  },
  icon: {
    position: "relative",
    fontSize: 14,
    left: 285,
    top: 55,
    zIndex: 100,
    color: "red"
  }
});

export default styles;
