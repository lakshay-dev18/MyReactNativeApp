// import App from './components/navigation';
// import Data from './components/FlatList'

// export default function Apps() {

//    return (
    
//       // <App/>
//       // <Data/>
//   );
// }




import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { getUsers } from './components/url';

export default function App() {
  const [data, setData] = useState('');

  const getData = async () => {
    const result = await getUsers();
    setData(JSON.stringify(result, null, 2));
  };

  return (
    <View style={styles.container}>

      <ScrollView style={styles.dataContainer}>
        <Text style={styles.data}>
          {data}
        </Text>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Get Data" onPress={getData} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  dataContainer: {
    flex: 1,
  },

  data: {
    fontSize: 14,
  },

  buttonContainer: {
    paddingBottom: 30,
  },
});