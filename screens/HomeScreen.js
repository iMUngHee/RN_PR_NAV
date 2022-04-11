import { View, Text, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Detail 1"
        onPress={() => navigation.push('Detail', { id: 1 })}
      />
      <Button
        title="Detail 2"
        onPress={() => navigation.push('Detail', { id: 2 })}
      />
      <Button
        title="Detail 3"
        onPress={() => navigation.push('Detail', { id: 3 })}
      />
    </View>
  );
}
