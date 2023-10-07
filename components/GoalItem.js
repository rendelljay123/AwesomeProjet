import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function GoalItem(props) {
  return (
    <View>
      <Text style={styles.ListOfGoals}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ListOfGoals: {
    fontFamily: 'Arial',
    fontSize: 15,
    margin: 5,
    fontWeight: 'bold',
    color: '#FAE8E0',
    textAlign: 'center'
  },
});

export default GoalItem;