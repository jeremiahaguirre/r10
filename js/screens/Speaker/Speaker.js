//import liraries
import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";

// create a component
class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  render() {
    const { speaker } = this.props;
    return (
      <ScrollView style={styles.speakerModal}>
        <Image style={styles.image} source={{ uri: speaker.image }} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text>{speaker.bio}</Text>
      </ScrollView>
    );
  }
}

export default Speaker;
