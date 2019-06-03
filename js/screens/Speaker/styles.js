import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "relative",
    left: "33%"
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#FFF",
    height: 20
  },
  speakerModal: {
    height: "90%",
    marginLeft: 20,
    marginRight: 0,
    position: "absolute",
    top: "20%",
    margin: "auto"
  },
  name: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 8,
    paddingBottom: 8
  },
  header: {
    backgroundColor: "#000"
  },
  goback: {
    paddingTop: 20,
    paddingLeft: 20
  }
});

export default styles;
