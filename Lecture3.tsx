import {View, Text, SectionList} from 'react-native';
import React from 'react';

const Lecture3 = () => {
  const users = [
    {
      id: 1,
      name: 'Aman',
      data: ['php', 'React js', 'Angular'],
    },
    {
      id: 2,
      name: 'Anil',
      data: ['java', 'JS', 'HTML'],
    },
    {
      id: 3,
      name: 'Aditya',
      data: ['C', 'C++', 'Go Lang'],
    },
    {
      id: 4,
      name: 'Avinash',
      data: ['CSS', 'Bootstrap', 'Python'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 31}}>Section List in react native</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
};

export default Lecture3;
