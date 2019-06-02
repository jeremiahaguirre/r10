import React from "react";
import { View, TouchableHighlight, SectionList } from "react-native";
import Fav from "../../components/Fav";
import { formatSessionData } from "../../helpers";
import styles from "./styles";

const Favs = ({ sessionData, navigation, consumerData }) => {
  const favId = sessionData.allSessions.filter(session =>
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
            <Fav sessionData={sessionData} consumerData={consumerData} />
          </TouchableHighlight>
        )}
        sections={formatSessionData(favId)}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Favs;
