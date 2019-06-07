import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  span1: {
    marginTop: 10,
    width: "100%",
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    }),
    paddingLeft: 10,
    paddingRight: 10
  },
  span2: {
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    }),
    marginTop: 10,
    marginBottom: 10,
    color: "grey",
    paddingLeft: 10,
    paddingRight: 10
  },
  icon: {
    paddingRight: 8,
    fontSize: 18,
    color: "red",
    alignSelf: "center"
  },
  locationView: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
