import React from 'react';
import {View, Text, StyleSheet, SafeAreaView } from 'react-native';

const footer = (props) => {
  return (
    <View>
      <SafeAreaView>
        <Text style={styles.footer}>Desarrollado por Henry Leon</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  footer:{
    backgroundColor: '#222831',
    color: '#eeeeee',
    textAlign: 'center'
  }
});

export default footer;