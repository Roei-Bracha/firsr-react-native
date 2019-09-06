import React, { useState} from "react-native";
import { View, TextInput, Button, StyleSheet} from 'react-native'

const GoalInput = ({ addGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState("");
    return(
    <View style={styles.inputContainer}>
        <TextInput
        placeholder={"enter course goal"}
        value={enteredGoal}
        style={styles.input}
        onChangeText={text => {
            setEnteredGoal(text);
        }}
        />
        <Button
                title={"ADD"}
                onPress={addGoalHandler(enteredGoal)}
        />
        </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
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