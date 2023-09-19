import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Lecture2 = () => {
  const user = [
    {
      id: 1,
      name: 'Aman',
    },
    {
      id: 2,
      name: 'Anil',
    },
    {
      id: 3,
      name: 'Aditya',
    },
    {
      id: 4,
      name: 'Apra',
    },
    {
      id: 5,
      name: 'payback',
    },
    {
      id: 6,
      name: 'kile',
    },
    {
      id: 8,
      name: 'tony',
    },
    {
      id: 9,
      name: 'tony',
    },
    {
      id: 10,
      name: 'geetaa',
    },
    {
      id: 11,
      name: 'tony',
    },
    {
      id: 12,
      name: 'tony',
    },
    {
      id: 13,
      name: 'paneer',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Grid with dynamic Data</Text>
      <View style={{flex: 1, flexDirection: `row`, flexWrap: `wrap`}}>
        {user.map(item => (
          <Text style={styles.item}>{item.name}</Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    margin: 5,
    padding: 5,
    color: 'white',
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default Lecture2;
