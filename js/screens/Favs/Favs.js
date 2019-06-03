import React from "react";
import { View, TouchableHighlight, SectionList } from "react-native";
import Fav from "../../components/Fav";
import { formatSessionData } from "../../helpers";
import styles from "./styles";
import PropTypes from "prop-types";

const Favs = ({ sessionData, navigation, consumerData }) => {
  const filteredData = sessionData.allSessions.filter(session =>
    consumerData.favIds.includes(session.id)
  );

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
            <Fav item={item} consumerData={consumerData} />
          </TouchableHighlight>
        )}
        sections={formatSessionData(filteredData)}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

Favs.propTypes = {
  sessionData: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  consumerData: PropTypes.object
};

export default Favs;
