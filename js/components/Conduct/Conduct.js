import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const Conduct = ({ list }) => {
  return (
    <View>
      <Text style={styles.title}>{list.title}</Text>
      <Text>{list.description}</Text>
    </View>
  );
};

export default Conduct;
