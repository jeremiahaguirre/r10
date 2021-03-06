import React from "react";
import { View, ScrollView, Image, Text } from "react-native";
import styles from "./styles";
import Conduct from "../../components/Conduct";
import PropTypes from "prop-types";

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
        <View style={styles.line} />
        <Text style={styles.footer}>&copy; RED Academy 2017</Text>
      </ScrollView>
    </View>
  );
};

About.propTypes = {
  conductData: PropTypes.object.isRequired
};

export default About;
