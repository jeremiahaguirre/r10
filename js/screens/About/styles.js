import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  image: {
    width: 180,
    height: 44,
    alignSelf: "center",
    paddingBottom: 20
  },
  line: {
    paddingTop: 20,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1
  },
  h2: {
    fontSize: 20
  },
  p: {
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default styles;
