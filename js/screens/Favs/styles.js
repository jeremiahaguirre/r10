import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
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
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  },
  favsText: {
    top: "30%",
    textAlign: "center",
    fontSize: 20
  }
});

export default styles;
