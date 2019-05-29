import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import styles from "./styles";
import Conduct from "../../components/Conduct";

const About = ({ conductData }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require("../../assets/images/r10_logo.png")}
        />
        
        <Text style={styles.p}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.h2}>Date &amp; Venue</Text>
        <Text style={styles.p}>
          The R10 conference will take place on Thursday, June 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.h2}>Code of Conduct</Text>
        {conductData.allConducts.map(data => (
          <Conduct key={data.id} list={data} />
        ))}
      </ScrollView>
    </View>
  );
};

export default About;
