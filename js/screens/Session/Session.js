import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";
import moment from "moment";
import PropTypes from "prop-types";
import Ionicons from "react-native-vector-icons/Ionicons";

let IconComponent = Ionicons;
let iconName;
iconName = `ios-heart`;

const Session = ({ query, data, navigation }) => {
  console.log(query);
  return (
    <View>
      {data.favIds.includes(query.Session.id) ? (
        <IconComponent name={iconName} style={styles.icon} size={25} />
      ) : null}
      <Text style={styles.location}>{query.Session.location}</Text>
      <Text style={styles.title}>{query.Session.title}</Text>
      <Text style={styles.time}>
        {moment(query.Session.startTime).format(" h:mm a")}
      </Text>
      <Text style={styles.description}>{query.Session.description}</Text>

      {query.Session.speaker !== null ? (
        <View>
          <TouchableOpacity
            underlayColor={"grey"}
            onPress={() =>
              navigation.navigate("Speaker", {
                speaker: query.Session.speaker
              })
            }
          >
            <Text>Presented by:</Text>
            <View style={styles.artist}>
              <Image
                style={styles.image}
                source={{ uri: query.Session.speaker.image }}
              />
              <Text style={styles.artistText}>
                {query.Session.speaker.name}
              </Text>
            </View>
          </TouchableOpacity>
          <LinearGradient
            colors={["#cf392a", "#9963ea"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 0.0 }}
            style={[
              StyleSheet.absoluteFill,
              { height: 64, width: "100%" },
              styles.btn
            ]}
          >
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                data.favIds.includes(query.Session.id)
                  ? data.removeFaveSession(query.Session.id)
                  : data.addFaveSession(query.Session.id);
              }}
            >
              {data.favIds.includes(query.Session.id) ? (
                <Text style={styles.btnText}>Remove from Faves</Text>
              ) : (
                <Text style={styles.btnText}>Add to Faves</Text>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      ) : null}
    </View>
  );
};

Session.propType = {
  query: PropTypes.object,
  data: PropTypes.object,
  navigation: PropTypes.object.isRequired
};

export default Session;
