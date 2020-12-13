import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    opacity: 0.7,
    height: 100,
    backgroundColor: theme.appBarColor.background,
    justifyContent: 'center',
  },
});

const AppBar = () => {
  return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <AppBarTab />   
            </View>
        </TouchableWithoutFeedback>
  );
};

export default AppBar;