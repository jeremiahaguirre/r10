import React from "react";
import { View, SectionList, TouchableHighlight } from "react-native";
import SessionData from "../../components/SessionData";
import styles from "./styles";
import { formatSessionData } from "../../helpers";
import PropTypes from "prop-types";

const Schedule = ({ sessionData, navigation, data }) => {
  return (
    <View style={styles.container}>
      <SectionList
        ItemSeparatorComponent={
          (renderSeparator = () => {
            return <View style={styles.line} />;
          })
        }
        renderItem={({ item, index, section }) => (
          <TouchableHighlight
            underlayColor={"grey"}
            onPress={() =>
              navigation.navigate("Session", {
                sessionLocation: item.location,
                sessionTitle: item.title,
                sessionDescription: item.description,
                sessionTime: item.startTime,
                speaker: item.speaker,
                sessionId: item.id
              })
            }
          >
            <SessionData data={data} list={item} />
          </TouchableHighlight>
        )}
        sections={formatSessionData(sessionData.allSessions)}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

Schedule.propTypes = {
  sessionData: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  data: PropTypes.object
};

export default Schedule;
