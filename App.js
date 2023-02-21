import {useState} from 'react'

import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem  from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  addGoalHandler = (enteredGoal)=> {
   setCourseGoals(
    (currentCourseGoals) => 
    [...currentCourseGoals, 
      {text: enteredGoal, 
      key: new Date().toISOString() + '_' + Math.random().toString()}
    ])
  }

  deleteGoalHandler = (id) =>{
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.key !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
    <View style={styles.goalsContainer}>
    <FlatList

    data={courseGoals} renderItem={itemData => {
      return (
        <GoalItem text={itemData.item.text} id={itemData.item.key} onDeleteGoal={deleteGoalHandler} />
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
  
  goalsContainer: {
    flex: 5
  },
});
