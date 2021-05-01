import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Demo: React.FC<any> = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hola mundo</Text>
        <CheckBox disabled={false} value={true} onValueChange={() => true} />
      </View>
    </SafeAreaView>
  );
};

export { Demo };
