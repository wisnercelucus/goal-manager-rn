import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([]);

  goalInputHandler = (enteredValue) => {
    setEnteredGoal(enteredValue)
  }

  addGoalHandler = ()=> {
   setCourseGoals(
    (currentCourseGoals) => 
    [...currentCourseGoals, 
      {text: enteredGoal, 
      key: new Date().toISOString() + '_' + Math.random().toString()}
    ])
  }

  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} title="Enter goal" onChangeText={goalInputHandler} />
      <Button title ="Add goal" onPress={addGoalHandler} />
    </View>
    <View style={styles.goalsContainer}>
    <FlatList

    data={courseGoals} renderItem={itemData => {
      return (
        <View style={styles.goalItemContainer}>
          <Text style={styles.goalItem}>{itemData.item.text}</Text>
        </View>
      )
    }} 
    keyExtractor={(item, index)=> {
      return item.key
    }}
    alwaysBounceVertical={false} 
    />
    </View>
  </View>
  );

 /* return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} title="Enter goal" onChangeText={goalInputHandler} />
        <Button title ="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView>
      {courseGoals.map(goal =>(<View style={styles.goalItemContainer} key={new Date().toISOString() + '_' + Math.random().toString()}>
        <Text style={styles.goalItem}>{goal}</Text>
      </View>)
      )}
      </ScrollView>
      </View>
    </View>
  );*/
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },

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
  
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    color: 'white',
    fontSize: 14
  },

  goalItemContainer:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  }
});
