import React from "react";
import { View, Text } from "react-native";
import moment from "moment";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";

let IconComponent = Ionicons;
let iconName;
iconName = `ios-heart`;

const Fav = ({ item, consumerData }) => {
  return (
    <View>
      <View>
        {consumerData.favIds.includes(item.id) ? (
          <IconComponent name={iconName} style={styles.icon} size={25} />
        ) : null}
        <Text style={styles.time}>
          {moment(item.startTime).format(" h:mm a")}
        </Text>
        <Text style={styles.span1}>{item.title}</Text>
        <Text style={styles.span2}>{item.location}</Text>
      </View>
    </View>
  );
};

Fav.propTypes = {
  item: PropTypes.object,
  consumerData: PropTypes.object
};

export default Fav;
