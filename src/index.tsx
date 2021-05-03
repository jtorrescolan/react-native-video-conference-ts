import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { AddComponent } from '@components/Add';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Demo: React.FC<any> = () => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text>Hello world</Text>
        <CheckBox disabled={false} value={true} onValueChange={() => true} />
        <AddComponent />
      </View>
    </SafeAreaView>
  );
};

export { Demo };
