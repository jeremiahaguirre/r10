import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center"
  },
  container: {
    flex: 1,
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#000",
    height: 20
  },
  speakerModal: {
    padding: 8,
    backgroundColor: "#FFF",
    height: "85%",
    marginLeft: 2,
    marginRight: 2,
    position: "absolute",
    top: "15%",
    alignSelf: "center",
    borderRadius: 22
  },
  name: {
    textAlign: "center",
    fontSize: 20,
    paddingTop: 8,
    paddingBottom: 8
  },
  header: {
    backgroundColor: "#000",
    alignSelf: "center"
  },
  goback: {
    fontSize: 20,
    color: "#FFF",
    alignSelf: "center"
  },
  aboutSpeaker: {
    color: "#FFF",
    textAlign: "center",
    paddingTop: 10,
    fontSize: 20
  },
  bio: {
    lineHeight: 25
  }
});

export default styles;
