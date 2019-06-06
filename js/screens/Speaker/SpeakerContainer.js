import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";
import Speaker from "./Speaker";
import styles from "./styles";
import PropTypes from "prop-types";

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");
    const iPhoneX = () => {
      const dim = Dimensions.get("window");
      return Platform.OS === "ios" && iPhoneXSize(dim);
    };
    const iPhoneXSize = dim => {
      return dim.width === 375 && dim.height === 812;
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={[
              styles.goback,
              { paddingTop: Platform.OS === "ios" ? (iPhoneX() ? 60 : 18) : 0 }
            ]}
          >
            X{" "}
            <Text style={styles.aboutSpeaker}>
              {" "}
              {"      "}About the speaker
            </Text>
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
