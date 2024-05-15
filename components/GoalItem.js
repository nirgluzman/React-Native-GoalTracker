import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    // In iOS we need to wrap <Text> with <View> component; that's not mandatory in Android.
    <View style={styles.goalItem}>
      {/* 'bind' is a JS method to pre-configure functions for future execution. */}
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.id)}
        // android_ripple={{ color: 'gray' }} // this property does not work in iOS.
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

// A StyleSheet is an abstraction similar to CSS StyleSheets, https://reactnative.dev/docs/stylesheet
const styles = StyleSheet.create({
  goalItem: {
    margin: 8, // margin = whitespace available surrounding an element.
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },

  goalText: {
    color: 'white',
    padding: 8 // padding = amount of inner space an element has.
  },

  pressedItem: {
    opacity: 0.5
  }
});
