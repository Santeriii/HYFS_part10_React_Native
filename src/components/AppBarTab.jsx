import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appBarTab: {
      color: 'white',
      left: 20,
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

const AppBarTab = () => (
    <View>
        <Text style={styles.appBarTab}>Repositories</Text>
    </View>
);

export default AppBarTab;