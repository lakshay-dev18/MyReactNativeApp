import {useEffect,useState} from 'react';
import{Text, View, StyleSheet} from 'react-native';
import CommonButton from './src/components/CommonButton';
import axios from "axios";

// const render=() => {
    // const[Count,useCount] = useState(0);
    // console.log("Rendering! Your count is",Count);

// const array =[1,2,3,4,5];
// const info = array.map((num) => num * 2);
// console.log(info);
    
//     return(
//      <View style={styles.Container}>
//         <Text>{Count}</Text>

//         <CommonButton title='Click' onPress={()=>useCount(Count+1)}/>
//      </View>
//     )
// }
// const styles = StyleSheet.create({
//     Container:{
//         flex:1
//     }
// })

// const getData = async () => {
    
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       const info= await response.data;
//       // const response = await fetch(
//       //   'https://jsonplaceholder.typicode.com/posts'
//       // );

//       // const info = await response.json();

//       console.log(info);
      
//   };
// getData()

// forEach
// const numbers = [1, 2, 3];

// numbers.forEach((num) => {
//   console.log(num * 2);
// });

// reduce

// const numbers = [10, 20, 30];
// const total = numbers.reduce((sum, num) => {
//   return sum + num;
// }, 0);

// console.log(total); // 60

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.filter((num) => num > 2);

// console.log(result);

// some
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.some((num) => num > 4);

// console.log(result); // true

// every
// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.every((num) => num > 0);

// console.log(result); // true

// const isLoggedIn: boolean = true;

// console.log(isLoggedIn ? "HomeScreen" : "LoginScreen");

// const postData = async () => {
//   const data = {
//     title: 'My Post',
//     body: 'Hello',
//     userId: 1,
//   };

//   const response = await axios.post(
//     'https://jsonplaceholder.typicode.com/posts',
//     data
//   );

//   console.log(response.data);
// };
// const effect=()=>{
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         console.log("Count changed:", count);
//     }, [count]);

//     console.log(count)
// }
// effect()

