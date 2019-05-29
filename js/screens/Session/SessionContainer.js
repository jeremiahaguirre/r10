import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Session from "./Session";
import moment from "moment";
import styles from "./styles";

class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };

  render() {
    const { navigation } = this.props;
    const sessionTitle = navigation.getParam("sessionTitle");
    const sessionDescription = navigation.getParam("sessionDescription");
    const sessionTime = navigation.getParam("sessionTime");
    const sessionLocation = navigation.getParam("sessionLocation");
    const speaker = navigation.getParam("speaker");
    console.log(speaker);
    return (
      <View style={styles.container}>
        <Text style={styles.location}>{sessionLocation}</Text>
        <Text style={styles.title}>{sessionTitle}</Text>
        <Text style={styles.time}>{moment(sessionTime).format(" h:mm a")}</Text>
        <Text style={styles.description}>{sessionDescription}</Text>
        {speaker !== null ? (
          <View>
            <Text>Presented by:</Text>
            <Image style={styles.image} source={{ uri: speaker.image }} />
            <Text>{speaker.name}</Text>
          </View>
        ) : null}
        <Session />
      </View>
    );
  }
}

export default SessionContainer;
