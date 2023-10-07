import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#393E46', // Customize header background color
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EEEEEE', // Customize header text color
  },
});

export default Header;