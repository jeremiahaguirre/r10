import React, { Component } from "react";
import {
  Platform,
  UIManager,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation
} from "react-native";
import styles from "./styles";

class Conduct extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false
    };
  }

  onClick() {
    const animationConfig = {
      duration: 300,
      update: {
        type: "linear",
        property: "opacity"
      }
    };
    LayoutAnimation.configureNext(animationConfig);
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { list } = this.props;
    const { isOpen } = this.state;

    return (
      <View>
        <TouchableOpacity onPress={() => this.onClick()}>
          <Text style={styles.title}>
            {isOpen ? "-" : "+"} {list.title}
          </Text>
          {isOpen && <Text>{list.description}</Text>}
        </TouchableOpacity>
      </View>
    );
  }
}

export default Conduct;
