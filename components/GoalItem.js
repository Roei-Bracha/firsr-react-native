import React from "react";
import { View, Text ,StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = ({title,id,removeGoalHandler}) => {
  return (
    <TouchableOpacity onPress={()=>{removeGoalHandler(id)}}>
      <View style={styles.ListItem}>
            <Text>{title}</Text>
        </View>
    </TouchableOpacity>
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
