import React, { useState } from 'react'; // Import useState
import { View, TextInput, StyleSheet, Button } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState(''); // Use useState here

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText); // Use enteredGoalText here
        setEnteredGoalText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Enter your goal'
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add goal' onPress={addGoalHandler} color='#00ADB5' />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: '#393E46',
        margin: 15,
        paddingRight: 5,
        padding: 10,
        width: '70%',
        padding: 13,
        color: '#EEEEEE',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default GoalInput;