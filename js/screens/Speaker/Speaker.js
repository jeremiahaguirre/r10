import React, { Component } from "react";
import {
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";

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
        <Text style={styles.bio}>{speaker.bio}</Text>
        <LinearGradient
          colors={["#cf392a", "#9963ea"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 0.0 }}
          style={{ borderRadius: 20, padding: 10, marginTop: 20 }}
        >
          <TouchableOpacity
            style={{}}
            onPress={() => {
              Linking.openURL(speaker.url);
            }}
          >
            <Text style={{ color: "#FFF", fontSize: 20, textAlign: "center" }}>
              Read more on Wikipedia
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    );
  }
}

Speaker.propType = {
  speaker: PropTypes.object
};

export default Speaker;
