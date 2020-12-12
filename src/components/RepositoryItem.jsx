import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RepositoryItem = ({ name, description, language, stars, forks, reviews, rating }) => (
  <View>
    <Text>Full name: {name}{"\n"}
    Description: {description}{"\n"}
    Language: {language}{"\n"}
    Stars: {stars}{"\n"}
    Forks: {forks}{"\n"}
    Reviews: {reviews}{"\n"}
    Rating: {rating}{"\n"}
    </Text>
  </View>
);

export default RepositoryItem;
  