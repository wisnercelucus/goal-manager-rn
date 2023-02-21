import { useState } from "react"
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

export default function GoalInput(props){
    const [enteredGoal, setEnteredGoal] = useState('')

    goalInputHandler = (enteredValue) => {
        setEnteredGoal(enteredValue)
        
    }

    addGoalHandler = ()=> {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }

    onCancelHandler = ()=>{
        props.onCloseModal()
    }

    return (
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
            <TextInput style={styles.textInput} 
                        title="Enter goal" 
                        onChangeText={goalInputHandler}
                        value={enteredGoal} />
        
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title ="Cancel" onPress={props.onCloseModal} color='#f31282' /></View>
        <View style={styles.button}><Button title ="Add goal" onPress={addGoalHandler} color='#5e0acc' /></View>
        </View>
            
        </View>

    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 8,
        backgroundColor: '#3b1b6b'
    
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
        borderRadius: 6
      },

      image: {
        width: 100,
        height: 100,
        margin: 20
      },

      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
      },

      button: {
        width: '30%',
        marginHorizontal: 8
      }
})