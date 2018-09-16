import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const optionCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.image} source={require('../assets/characters.png')}/>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.description}>
          See all {props.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image:{
    height: 150,
    resizeMode: 'contain'
  },
  right:{
    justifyContent: 'space-around',
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  title:{
    color: "#eeeeee",
    fontSize: 36
  },
  description:{
    color: '#eeeeee',
    fontSize: 16,
  }
});

export default optionCard;