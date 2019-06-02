import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

let IconComponent = Ionicons;
let iconName;
iconName = `ios-heart`;

const Fav = ({ sessionData, consumerData }) => {
  const favId = consumerData.favIds.map(data => data.id);
  console.log(favId);
  return (
    <View>
      <Text style={styles.span1}>{sessionData.title}</Text>
      <Text style={styles.span2}>{sessionData.location}</Text>
    </View>
  );
};

export default Fav;
