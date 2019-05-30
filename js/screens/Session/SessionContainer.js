import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Session from "./Session";
import moment from "moment";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FavesContext from "../../context/FavesContext";

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
    const sessionId = navigation.getParam("sessionId");
    let IconComponent = Ionicons;
    let iconName;
    iconName = `ios-heart`;
    return (
      <View style={styles.container}>
        <FavesContext.Consumer>
          {value => (
            <View>
              {value.favIds.includes(sessionId) ? (
                <IconComponent name={iconName} style={styles.icon} size={25} />
              ) : null}
              <Text style={styles.location}>{sessionLocation}</Text>
              <Text style={styles.title}>{sessionTitle}</Text>
              <Text style={styles.time}>
                {moment(sessionTime).format(" h:mm a")}
              </Text>
              <Text style={styles.description}>{sessionDescription}</Text>
              {speaker !== null ? (
                <View>
                  <Text>Presented by:</Text>
                  <Image style={styles.image} source={{ uri: speaker.image }} />
                  <Text>{speaker.name}</Text>
                  <Session
                    id={sessionId}
                    addIcon={value.addFaveSession}
                    removeIcon={value.removeFaveSession}
                    favId={value.favIds}
                  />
                </View>
              ) : null}
            </View>
          )}
        </FavesContext.Consumer>
      </View>
    );
  }
}

export default SessionContainer;
