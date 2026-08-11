import {ScrollView, View, StyleSheet, Text} from 'react-native';
import{useState} from 'react';
import CommonButton from '../../../../src/components/CommonButton';

function Data() {

  const[user,setUser] = useState('');
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const info = await response.json();

    setUser(JSON.stringify(info));
    
  };

  return (
  <View style={styles.container}>

  <ScrollView>
    <Text>{user}</Text>
  </ScrollView>

  <View style={styles.bottomButtons}>
    <CommonButton
      title="Get Data"
      onPress={getData}
      buttonStyle={styles.dataButton}
      textStyle={styles.dataButtonText}
    />

    <CommonButton
      title="Remove Data"
      onPress={() => setUser('')}
      buttonStyle={styles.dataButton}
      textStyle={styles.dataButtonText}
    />
  </View>

</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },

  dataButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#00B3B0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  dataButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dataContainer: {
    flex: 1,
  },

  data1: {
    fontSize: 14,
    padding: 20,
  },
});



export default Data;