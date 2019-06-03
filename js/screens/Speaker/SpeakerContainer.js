import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Speaker from "./Speaker";
import styles from "./styles";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");
    console.log("This is the speaker", speaker);

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.goback}>X</Text>
        </TouchableOpacity>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

export default SpeakerContainer;
