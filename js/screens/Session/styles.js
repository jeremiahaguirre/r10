import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFF"
  },
  location: {
    color: "#999999"
  },
  title: {
    fontSize: 20,
    paddingLeft: 0,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Montserrat"
  },
  time: {
    color: "#cf392a",
    marginBottom: 10
  },
  description: {
    lineHeight: 25,
    fontFamily: "Montserrat",
    marginBottom: 40
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});

export default styles;
