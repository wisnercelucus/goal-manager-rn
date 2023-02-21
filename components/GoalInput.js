import { useState } from "react"
import { StyleSheet, View, TextInput, Button } from "react-native"

export default function GoalInput(props){
    const [enteredGoal, setEnteredGoal] = useState('')

    goalInputHandler = (enteredValue) => {
        setEnteredGoal(enteredValue)
        
    }

    addGoalHandler = ()=> {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} 
                    title="Enter goal" 
                    onChangeText={goalInputHandler}
                    value={enteredGoal} />
        <Button title ="Add goal" onPress={addGoalHandler} />
    </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8
      },
})