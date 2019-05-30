import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from "./styles";

const Session = ({ addIcon, removeIcon, favId, id }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          favId.includes(id) ? removeIcon(id) : addIcon(id);
        }}
      >
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
          {favId.includes(id) ? (
            <Text style={styles.btnText}>Remove from Faves</Text>
          ) : (
            <Text style={styles.btnText}>Add to Faves</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Session;
