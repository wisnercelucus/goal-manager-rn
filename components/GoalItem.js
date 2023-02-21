import { StyleSheet,Text, View, Pressable } from "react-native"

function GoalItem(props){
    return (
    <View style={styles.goalItemContainer} >
        <Pressable android_ripple={{color: '#dddddd'}}  
                    onPress={props.onDeleteGoal.bind(this, props.id)}>
            <Text style={styles.goalItem}>{props.text}</Text>
        </Pressable>
    </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        color: 'white',
        fontSize: 14,
        padding: 8,
      },
    
      goalItemContainer:{
        margin: 8,
        
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      }
})