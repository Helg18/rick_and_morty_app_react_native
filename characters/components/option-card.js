import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const optionCard = props => {
  props = props.item;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={{uri: props.image}}
        />
      </View>
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
  },
  title:{
    color: "#eeeeee",
    fontSize: 36
  }
});

export default optionCard;