import React, { Component } from "react";
import {
  Platform,
  UIManager,
  View,
  Text,
  TouchableOpacity
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
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { list } = this.props;

    return (
      <View>
        <TouchableOpacity onPress={() => this.onClick()}>
          <Text style={styles.title}>
            {this.state.isOpen ? "-" : "+"} {list.title}
          </Text>
          {this.state.isOpen && <Text>{list.description}</Text>}
        </TouchableOpacity>
      </View>
    );
  }
}

export default Conduct;
