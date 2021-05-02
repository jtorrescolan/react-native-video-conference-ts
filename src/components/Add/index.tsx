import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import type { Person } from '@models/person';

export const AddComponent = () => {
  useEffect(() => {
    const person: Person = { firstName: 'Jorge', lastName: 'Torres' };
    console.log(person);
  });

  return (
    <View>
      <Text>Add component</Text>
    </View>
  );
};
