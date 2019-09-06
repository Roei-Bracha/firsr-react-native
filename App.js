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
  const [isAddMode,setIsAddMode] = useState(false)
  const addGoalHandler = (enteredGoal) => {
    setGoals(goals => [
    ...goals,
    { id: Math.random().toString(), value: enteredGoal }
    ]);
    setIsAddMode(false)
  }
  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal)=>(goal.id!==goalId))
    })
  }
  return (
    <View style={styles.screen}>
      <Button title={"add new item"} onPress={()=>setIsAddMode(true)}/>
      <GoalInput addGoalHandler={addGoalHandler} visible={isAddMode} setIsAddMode={setIsAddMode}/>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={itemData => (<GoalItem title={itemData.item.value} id={itemData.item.id} removeGoalHandler={removeGoalHandler}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
