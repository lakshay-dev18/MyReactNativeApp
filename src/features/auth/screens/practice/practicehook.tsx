// import{useState, useEffect} from 'react';
// import{Button, View, Text, StyleSheet} from 'react-native'


// const Counter = () =>{
//     const[state, setState] = useState(0)

//     useEffect(()=>{
//         if(state>0 && state!==10){
//             console.log("Counter Changed")
//         }
//         else if(state==10){
//             console.log("You reached 10!")
//         }
//         else{""}
//     },[count])

//  return(
//         <View style={styles.container}>
//     <View style={styles.container2}>
//         <Text >{state}</Text>
//     </View>     
//         <Button title='Increase' onPress={()=>setState(state+1)}></Button>
//         <Button title='Decrease' onPress={()=>setState(state-1)}></Button>
//         <Button title='Reset' onPress={()=>setState(0)}></Button>
//    </View> 
 
//  )
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'flex-end'
//     },
//     Text:{
        
//     },
//     container2:{
//         alignItems:'center'
//     }
// })
// export default Counter


// useRef
// import { useRef } from "react";
// import { TextInput, View, Button, StyleSheet } from "react-native";

// export default function Refhook() {
//   const inputRef = useRef<TextInput>(null);

// //   function handleClick() {
// //     inputRef.current?.focus();
// //   }

//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.input}
//         ref={inputRef} />
//       <Button 
//     //   onPress={handleClick}
//       title="Focus">
        
//       </Button>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'flex-end'
//     },
//     input: {
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     color: '#333',
//   },
// });

//practice useRef
// import{useRef} from 'react';
// import{TextInput, View, StyleSheet, Button} from 'react-native';

// const RefHook = () =>{
//     const inputRef = useRef<TextInput>(null)
//     function Active(){
//       if (!inputRef.current?.isFocused()) {
//         inputRef.current?.focus();
//     } }; 

//   return(
//     <View style = {styles.container}>
//         <TextInput 
//             ref = {inputRef}/>
//         <Button 
//         title= ' Focus'
//         onPress = {Active}/>
//     </View>
//   ) ; 
// }
// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'flex-end'
//     },
//     inputButton:{}
// })
// export default RefHook;

// import { useFocusEffect } from "@react-navigation/native";
// import {Text} from 'react-native'
// function ProfileScreen() {

//   useFocusEffect(()=>{
//       console.log("Profile screen is focused");
    
//       return () => {
//         console.log("Profile screen is no longer focused");
//     };
// });

//   return (
//     <Text>Profile</Text>
//   );
// }export default ProfileScreen