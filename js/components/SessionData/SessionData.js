import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import moment from "moment";
import styles from "./styles";

const SessionData = ({ list }) => {
  return (
    <View>
      <Text style={styles.time}>
        {moment(list.startTime).format(" h:mm a")}
      </Text>
      <Text style={styles.span1}>{list.title}</Text>
      <Text style={styles.span2}>{list.location}</Text>
    </View>
  );
};

export default SessionData;
