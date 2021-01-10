import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 66,
    borderRadius: 66/ 2,
    marginRight: 20
  },
  wrap: {
    marginBottom: 20,
  },
  horizontalAlign: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  verticalItems: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContent: {
    flex: 1,
    flexShrink: 1,
    fontWeight: 'bold',
    marginRight: 0,
  },
  verticalText: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  greyText: {
    color: 'grey',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  centerItem: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  personName: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 16,
  },
  description: {
    color: 'grey',
    fontSize: 16,
  },
  language: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignSelf: 'flex-start',
    padding: 5,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

function precise(x) {
  return Number.parseFloat(x).toPrecision(3);
}

const RepositoryItem = ({ name, image, description, language, stars, forks, reviews, rating }) => (
  <View>
    <View style={styles.horizontalAlign}>
      <Image
        style={styles.logo}
        source={{
          uri: image,
        }}
      />
      <View style={styles.textContent}>
        <Text style={styles.personName}>{name}{"\n"}</Text>
        <Text style={styles.description}>{description}{"\n"}</Text>
        <View>
          <Text style={styles.language}>
            {language}{"\n"}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.verticalText}>
      <View>
        <Text style={styles.centerItem}>{precise(stars)}k</Text>
        <Text style={styles.greyText}>Stars</Text>
      </View>
      <View>
        <Text style={styles.centerItem}>{forks}k</Text>
        <Text style={styles.greyText}>Forks</Text>
      </View>
      <View>
        <Text style={styles.centerItem}>{reviews}</Text>
        <Text style={styles.greyText}>Reviews</Text>
      </View>
      <View>
        <Text style={styles.centerItem}>{rating}</Text>
        <Text style={styles.greyText}>Rating</Text>
      </View>
    </View>
  </View>
);

export default RepositoryItem;
  