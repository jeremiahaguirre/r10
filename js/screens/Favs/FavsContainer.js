import React, { Component } from "react";
import { View, Text } from "react-native";
import Favs from "./Favs";

class FavsContainer extends Component {
  static navigationOptions = {
    title: "Favs"
  };
  render() {
    return <Favs />;
  }
}

export default FavsContainer;
