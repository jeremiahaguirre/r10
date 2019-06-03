import React, { Component } from "react";
import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

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
        <TouchableOpacity
          style={{
            backgroundColor: "#9963ea",
            borderRadius: 20,
            padding: 10,
            marginTop: 20
          }}
          onPress={() => {
            Linking.openURL(speaker.url);
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
            Read more on Wikipedia
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

Speaker.propType = {
  speaker: PropTypes.object
};

export default Speaker;
