import React from "react";
import { View, ScrollView, Image } from "react-native";
import styles from "./styles";
import Conduct from "../../components/Conduct";

const About = ({ conductData }) => {
  console.log(conductData);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../assets/images/r10_logo.png")}
        />
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1
          }}
        />
        {conductData.allConducts.map(data => (
          <Conduct key={data.id} list={data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default About;
