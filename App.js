import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals(currentCourseGoal => [...currentCourseGoal, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
        />
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map(goal => (
          // In iOS we need to wrap Text with View; that is not mandatory in Android.
          <View
            key={goal}
            style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // take up all available space
    paddingTop: 50,
    paddingHorizontal: 16
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },

  goalsContainer: {
    flex: 5
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },

  goalText: {
    color: 'white'
  }
});
