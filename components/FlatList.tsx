import {StyleSheet,FlatList, Text, View} from 'react-native';

const Fruits= [ "Apple", "Banana", "Mango", ];
const Sports= [ "Cricket", "Football", "Batminton", ];
const Car= [ "Lambo", "Volvo", "Gwagon", ];

function Data(){
    return(
      <View style={styles.container}>  
        <FlatList 
            contentContainerStyle={styles.list}
            data={Fruits}
            renderItem={({ item }) => <Text>{item}</Text>}
            ListHeaderComponent={<Text>Header</Text>}
            ListFooterComponent={<Text>Footer</Text>}
        />

        {/* <FlatList 
            contentContainerStyle={styles.list1}
            data={Sports}
            renderItem={({ item }) => <Text>{item}</Text>}
            ListHeaderComponent={<Text>Header</Text>}
            ListFooterComponent={<Text>Footer</Text>}
        />

        <FlatList 
            contentContainerStyle={styles.list2}
            data={Car}
            renderItem={({ item }) => <Text>{item}</Text>}
            ListHeaderComponent={<Text>Header</Text>}
            ListFooterComponent={<Text>Footer</Text>}
        /> */}
       </View>
    );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    padding: 20,
    
  },
  container:{
    justifyContent:'center',
    
  },

  list1: {
    alignItems: 'center',
    padding: 20,
  },

  list2: {
    alignItems: 'center',
    padding: 20,
  },


});
export default Data;


