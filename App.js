import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState(0)
  const [result, setResult] = useState("")

  const calculate = () => {
    const lower = (220 - age) * 0.65
    const upper = (220 - age) * 0.85
    setResult(lower.toFixed(0) + "-" + upper.toFixed(0))
  }


  return (
    <View style={styles.container}>
      <Text style={StyleSheet.field}>Age</Text>
      <TextInput
        style={StyleSheet.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={StyleSheet.field}>Limits</Text>
      <Text style={StyleSheet.field}>{result}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
    margin: 8
  },
  field: {
    marginTop: 8,
    marginBottom: 8
  }
});
