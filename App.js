import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      {
        text: enteredGoalText,
        // key: Math.random().toString() // FlatList component is looking for 'key' property.
        id: Math.random().toString() // we used here 'id' for the sake of example.
      }
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            // tells the list to use 'id' for the react keys instead of the default 'key' property.
            return item.id;
          }}
        />
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

  goalsContainer: {
    flex: 5
  }
});
