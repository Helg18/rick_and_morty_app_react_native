import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const optionCard = props => {
  props = props.item;
  return (
    <View style={styles.container}>
      <View style={styles.right}>
        <Text style={styles.title}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 5
  },
  image:{
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  right:{
    justifyContent: 'space-around',
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%'
  },
  title:{
    color: "#eeeeee",
    fontSize: 26,
  }
});

export default optionCard;