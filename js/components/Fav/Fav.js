import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

let IconComponent = Ionicons;
let iconName;
iconName = `ios-heart`;

const Fav = ({ sessionData, consumerData }) => {
  const favId = sessionData.allSessions.filter(session =>
    consumerData.favIds.includes(session.id)
  );
  const newId = favId.forEach(Id => Id);
  const location = favId.map(data => data.location);
  console.log(newId);
  return (
    <View>
      <Text style={styles.span1}>{location}</Text>
      <Text style={styles.span2}>hello</Text>
    </View>
  );
};

export default Fav;
