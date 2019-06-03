import React, { Component } from "react";
import {
  Platform,
  UIManager,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

class Conduct extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false,
      spinValue: new Animated.Value(0)
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
    Animated.timing(this.state.spinValue, {
      toValue: 1,
      duration: 500
    }).start(animation => {
      if (animation.finished) {
        this.setState({ spinValue: new Animated.Value(0) });
      }
    });

    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { list } = this.props;
    const { isOpen, spinValue } = this.state;

    const animator = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"]
    });

    const animatedStyles = {
      transform: [{ rotate: animator }]
    };
    return (
      <View>
        <TouchableOpacity onPress={() => this.onClick()}>
          <View style={[styles.title]}>
            <Animated.Text style={[styles.text, animatedStyles]}>
              {isOpen ? "-" : "+"}
            </Animated.Text>
            <Text style={styles.text}> {list.title}</Text>
          </View>
          {isOpen && <Text>{list.description}</Text>}
        </TouchableOpacity>
      </View>
    );
  }
}

Conduct.propTypes = {
  list: PropTypes.object
};

export default Conduct;
