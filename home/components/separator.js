import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const separator = (props) => {
  return(
      <View>
        <Text style={styles.separator}/>
      </View>
  );
};

const styles = StyleSheet.create({
  separator:{
    marginTop:10,
    marginBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "#00adb5"
  }
});

export default separator;