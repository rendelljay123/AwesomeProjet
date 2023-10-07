import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import DeleteConfirmationModal from './DeleteConfirmationModal'; // Import the modal component

function CustomGoalItem(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const onDeleteHandler = () => {
    setModalVisible(true);
  };

  const onConfirmDelete = () => {
    setModalVisible(false);
    props.onDelete(props.goalKey);
  };

  const onCancelDelete = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={onDeleteHandler}>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to delete this goal?</Text>
            <TouchableOpacity onPress={onConfirmDelete} style={styles.confirmButton}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancelDelete} style={styles.cancelButton}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

   const styles = StyleSheet.create({
     goalItem: {
       backgroundColor: '#393E46', // Customize the background color
       padding: 10,
       marginVertical: 12,
       width: 231,
       borderRadius: 5, // Add border radius for rounded corners
       borderWidth: 1,
       borderColor: '#EEEEEE',
       borderStyle: 'solid',
     },
     goalText: {
       fontSize: 18,
       fontWeight: 'bold',
       color: '#EEEEEE', // Customize text color
     },
   });

   export default CustomGoalItem;