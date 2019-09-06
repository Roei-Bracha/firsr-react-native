import React, { useState } from "react";
import GoalItem from "./components/GoalItem"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const addGoalHandler = (enteredGoal) => {
    setGoals(goals => [
    ...goals,
    { id: Math.random().toString(), value: enteredGoal }
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={itemData => (<GoalItem title={itemData.item.value} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderBottomWidth: 1
  },
});
