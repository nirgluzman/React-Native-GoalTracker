import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    // 'bind' is a JS method to pre-configure functions for future execution.
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      {/* In iOS we need to wrap <Text> with <View> component; that's not mandatory in Android. */}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

// A StyleSheet is an abstraction similar to CSS StyleSheets, https://reactnative.dev/docs/stylesheet
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },

  goalText: {
    color: 'white'
  }
});
