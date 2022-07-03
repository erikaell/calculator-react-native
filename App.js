import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);

  function handleSum() {
    setResult(firstValue + secondValue)
  }
  
  function handleSubstraction() {
    setResult(firstValue - secondValue)
  }

  function handleMultiplication() {
    setResult(firstValue * secondValue)
  }

  function handleDivision() {
    setResult(firstValue / secondValue)
  }

  function handlePercentage() {
    setResult(firstValue * (secondValue * 1 / 100))
  }

  function handleClear() {
    setFirstValue(0);
    setSecondValue(0);
    setResult(0)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textValue}>Value A</Text>
      <TextInput
        style={styles.inputField}
        keyboardType='numeric'
        value={firstValue}
        onChangeText={(text) => setFirstValue(Number(text))}
      />
      <Text style={styles.textValue}>Value B</Text>
      <TextInput
        style={styles.inputField}
        keyboardType='numeric'
        value={secondValue}
        onChangeText={(text) => setSecondValue(Number(text))}
      />
      <StatusBar style="auto" />
      <View style={{flexDirection:'row', gap:10}}>
      <TouchableOpacity style={styles.button} onPress={handleSum}>
        <Text style={styles.textButton}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubstraction}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleMultiplication}>
        <Text style={styles.textButton}>*</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row', gap:10}}>
      <TouchableOpacity style={styles.button} onPress={handleDivision}>
        <Text style={styles.textButton}>/</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} onPress={handlePercentage}>%</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton} onPress={handleClear}>C</Text>
      </TouchableOpacity>
      </View>
      <TextInput
        style={styles.resultField}
        keyboardType='numeric'
        editable={false}
        value={result}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa0a0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textValue: {
    paddingTop: 10,
    color: '#000000',
    width: 300,
    textAlign: 'left',
    fontSize: 20
  },
  inputField: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 35,
    width: 300,
    textAlign: 'center',
    fontSize: 24
  },
  button: {
    marginTop: 20,
    width: 40,
    backgroundColor: '#ff5757',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  resultField: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 35,
    width: 300,
    textAlign: 'center',
    fontSize: 24
  }
});
