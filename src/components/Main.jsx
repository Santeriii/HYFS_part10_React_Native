import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const myToUpperCase = function(str) { 
  var ret = ""; 
  var i;

  for(i = 0; i < str.length; i++) {
    ret += String.fromCharCode(str.charCodeAt(i) & 223); 
  }

  return ret; 
} 

const Main = () => {
  return (
    <View style={styles.container}>
      {console.log(myToUpperCase('pekka'))}
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;