import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import GoalInput from './components/GoalInput';
import CustomGoalItem from './components/CustomGoalItem';
import DeleteButton from './components/DeleteButton';
import Header from './components/Header';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.trim().length === 0) {
      return; // Don't add empty goals
    }

    if (courseGoals.length >= 5) {
      showModal();
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() },
      ]);
    }
  };

  const removeGoalHandler = (goalKey) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalKey)
    );
  };

  const ModalMessage = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={hideModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You're overwhelming yourself</Text>
            <TouchableOpacity onPress={hideModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <ImageBackground
      source={require('./assets/estetik.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header title="My Goals" />
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={[styles.goalContainer, styles.goalListContainer]}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <View style={styles.goalItemContainer}>
                <CustomGoalItem
                  text={itemData.item.text}
                  onDelete={() => removeGoalHandler(itemData.item.key)}
                />
                <DeleteButton onPress={() => removeGoalHandler(itemData.item.key)} />
              </View>
            )}
          />
        </View>
      </View>
      <ModalMessage />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'transparent',
  },
  goalContainer: {
    flex: 5,
  },
  goalListContainer: {
    height: 300,
    flex: 5,
  },
  goalItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    color: 'blue',
    fontSize: 16,
  },
});
