import React, { Component } from "react";
import Map from "./Map";
import { Text, Platform } from "react-native";
import styles from "./styles";

class MapContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return Platform.select({
      ios: <Map />,
      android: <Text style={styles.text}>Maps are coming soon!!</Text>
    });
  }
}

export default MapContainer;
