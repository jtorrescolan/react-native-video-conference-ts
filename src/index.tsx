import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { AddComponent } from '@components/Add';

const Demo: React.FC<any> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hola mundo</Text>
        <CheckBox disabled={false} value={true} onValueChange={() => true} />
        <AddComponent />
      </View>
    </SafeAreaView>
  );
};

export { Demo };
