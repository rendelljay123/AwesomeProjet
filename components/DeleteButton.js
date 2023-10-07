import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

   function DeleteButton(props) {
     return (
       <TouchableOpacity onPress={props.onPress} style={styles.button}>
         <Text style={styles.text}>Delete</Text>
       </TouchableOpacity>
     );
   }

   const styles = StyleSheet.create({
     button: {
       backgroundColor: '#00ADB5', // Customize button background color
       paddingHorizontal: 20,
       paddingVertical: 10,
       borderRadius: 5,
     },
     text: {
       color: '#EEEEEE', // Customize button text color
       fontWeight: 'bold',
     },
   });

   export default DeleteButton;