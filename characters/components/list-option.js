import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listOption = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#393e46",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1
  },
  title: {
    color: '#00adb5',
    fontSize: 32,
    marginBottom: 10,
    fontWeight: 'bold'
  }
});

export default listOption;