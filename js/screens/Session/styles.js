import { Platform, StyleSheet } from "react-native";

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
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    })
  },
  time: {
    color: "#cf392a",
    marginBottom: 10
  },
  description: {
    lineHeight: 25,
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    }),
    marginBottom: 40
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  btnText: {
    ...Platform.select({
      android: { fontFamily: "Montserrat-Regular" },
      ios: { fontFamily: "Montserrat" }
    }),
    position: "absolute",
    bottom: 113,
    color: "#fff",
    width: "100%",
    fontSize: 20,
    alignContent: "center",
    textAlign: "center"
  },
  btn: {
    alignContent: "center",
    justifyContent: "center",
    position: "absolute",
    top: 100,
    left: "4.7%",
    width: "90%",
    height: 50,
    margin: "auto",
    borderRadius: 300,
    backgroundColor: "transparent"
  },
  icon: {
    position: "absolute",
    left: 250,
    top: 10,
    color: "red"
  },
  artist: {
    paddingTop: 10,
    alignContent: "center",
    flexDirection: "row"
  },
  artistText: {
    paddingLeft: 20,
    paddingTop: 15,
    fontSize: 17,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center"
  }
});

export default styles;
