import React from "react";
import { View, Text ,StyleSheet} from "react-native";

const GoalItem = ({title}) => {
  return (
    <View style={styles.ListItem}>
          <Text>{title}</Text>
    </View>
  );
};

export default GoalItem

const styles = StyleSheet.create({
  ListItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1
  }
});
