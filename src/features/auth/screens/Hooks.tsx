import { useRef, useState } from 'react';
import { View, StyleSheet, Text, TextInput , ScrollView} from 'react-native';
import CommonButton from '../../../components/CommonButton';
import axios from 'axios';

// const Hook = () => {
//   const info = useRef(0);
//   const inputRef = useRef<TextInput>(null);

//   const [display, setDisplay] = useState(0);

//   const count = () => {
//     info.current = info.current + 1;
//     setDisplay(info.current);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Count: {display}</Text>

//       <TextInput
//         ref={inputRef}
//         placeholder="Enter text"
//       />

//       <CommonButton
//         title="Press"
//         onPress={count}
//         buttonStyle={styles.pressButton}
//         textStyle={styles.pressTextButton}
//       />

//       <CommonButton
//         title="Focus"
//         onPress={() => inputRef.current?.focus()}
//         buttonStyle={styles.pressButton}
//         textStyle={styles.pressTextButton}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   pressButton: {
//     backgroundColor: 'black',
//     padding: 10,
//   },
//   pressTextButton: {
//     color: 'white',
//   },
// });

// export default Hook;


// const ApiScreen = () => {
//   const [posts, setPosts] = useState<string[]>([]);

//   const getData = async () => {
//     const response = await axios.get(
//       'https://jsonplaceholder.typicode.com/posts'
//     );

//     const info = response.data.map((post: any) => post.title);

//     setPosts(info);
//   };


const TestError = () => {
  try {
    throw new Error("Something went wrong!");
  } catch (error) {
    console.error("ERROR:", error);
  }
  
  return(
    <View style={styles.container}>
      <CommonButton title="Test Error" onPress={TestError}  buttonStyle={styles.button} textStyle={styles.textButton}/>
    </View>
  )
};
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  },
  button:{
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    width: '80%',
    backgroundColor: 'black',
  },
  textButton:{
    color: 'white',
  }
})

//   return (
//     <View style={styles.container}>
//       <View style={styles.container1}>
//         <ScrollView>
//           {posts.map((title, index) => (
//             <Text key={index} style={styles.title}>
//               {title}
//             </Text>
//           ))}
//         </ScrollView>
//       </View>
//       <CommonButton
//         title="Get Data"
//         onPress={getData}
//         buttonStyle={styles.button}
//         textStyle={styles.button1}
//       />

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },

//   container1: {
//     flex: 1,
//     width: '100%',
//     padding: 20,
//   },

//   title: {
//     marginBottom: 15,
//   },

//   button: {
//     borderRadius: 10,
//     marginTop: 20,
//     marginBottom: 10,
//     padding: 10,
//     width: '80%',
//     backgroundColor: 'black',
//   },

//   button1: {
// //     color: 'white',
//   },
// });

// export default ApiScreen;

// export default TestError;
