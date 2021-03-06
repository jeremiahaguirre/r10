import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

let IconComponent = Ionicons;
let iconName;
iconName = `ios-heart`;

const SessionData = ({ data, list }) => {
  return (
    <View>
      <Text style={styles.span1}>{list.title}</Text>
      <View style={styles.locationView}>
        <Text style={styles.span2}>{list.location} </Text>
        {data.favIds.includes(list.id) ? (
          <IconComponent name={iconName} style={styles.icon} size={25} />
        ) : null}
      </View>
    </View>
  );
};

SessionData.propType = {
  data: PropTypes.object,
  list: PropTypes.object
};

export default SessionData;
