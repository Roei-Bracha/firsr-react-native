import React, { useState} from "react";
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal)
    setEnteredGoal("")
  }
  handleCancel = () => {
    props.setIsAddMode(false)
    setEnteredGoal("")
  }
  return (
    <Modal visible={props.visible} animationType={"slide"} onBackButtonPress={handleCancel}>
        <View style={styles.inputContainer}>
          <TextInput
          placeholder={"enter course goal"}
          value={enteredGoal}
          style={styles.input}
          onChangeText={text => {
              setEnteredGoal(text);
          }}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title={"ADD"} onPress={() => { addGoalHandler(enteredGoal) }} />
          </View>
          <View style={styles.button}>
          <Button title={"cancel"} color={"red"} onPress={handleCancel} />
          </View>
          </View>
        </View>
      </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex:1
    },
    input: {
      width: "80%",
      borderColor: "black",
      borderBottomWidth: 1,
      marginBottom:10
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width:"40%"
  }
  });