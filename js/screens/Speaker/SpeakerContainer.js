import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Speaker from "./Speaker";
import styles from "./styles";
import PropTypes from "prop-types";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.goback}>
            X{" "}
            <Text style={styles.aboutSpeaker}> {"     "}About the speaker</Text>
          </Text>
        </TouchableOpacity>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

SpeakerContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SpeakerContainer;
