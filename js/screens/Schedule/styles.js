import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: "#FFF"
  },
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
  line: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  }
});

export default styles;
