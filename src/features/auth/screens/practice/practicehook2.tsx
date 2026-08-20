// import { useFocusEffect } from "@react-navigation/native";
// import {Text} from 'react-native'



// const ProfileScreen = () =>{
//     const Api = async() =>{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
    


//         return (
//             <Text>{data}</Text>
//         );
//     }
// }
// export default ProfileScreen

// import React, { useState } from "react";
// import { View, Button, Text } from "react-native";

// export default function App() {

//   const [token, setToken] = useState("");

//   // LOGIN
//   const login = async () => {
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: "john",
//         password: "1234",
//       }),
//     });

//     const data = await response.json();

//     // Get JWT from backend
//     setToken(data.token);

//     console.log("Token:", data.token);
//     } catch (error) {
//     console.log("Login failed:", error);
//   }
//   };


//   // GET PROFILE
//   const getProfile = async () => {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users", {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });

//     const data = await response.json();

//     console.log("Profile:", data);
//   };


//   return (
//     <View style={{ padding: 30 }}>

//       <Button
//         title="Login"
//         onPress={login}
//       />

//       <Button
//         title="Get Profile"
//         onPress={getProfile}
//       />

//       <Text>
//         Token: {token}
//       </Text>

//     </View>
//   );
// }


//useMemo
// import { useEffect, useMemo, useState} from "react";
// import{View, Text, StyleSheet, FlatList, TextInput} from 'react-native'

// type User = {
//     id: number;
//     name: string;
//     email: string;
// };
// export default function Practice(){
//     const [search, setSearch] = useState("");
//     const [users, setUsers] = useState<User[]>([]);
//     useEffect(()=>{
//         const data = async() =>{
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const info = await response.json();
//             // const str = JSON.stringify(info)
//             // setUsers(str);
//             setUsers(info);

//         }
//         data()
//     },[])
    
//     // const filteredUsers = users.filter((user)=>{
//     //     user.name.toLowerCase().includes(search.toLowerCase())
//     // })
//     const filteredUsers = useMemo(()=>{
//         return(search === "" 
//                 ? users 
//                 : users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()) ))}
//             ,[users,search]);


//     return(
//      <View style={styles.container}>
//         <TextInput 
//             style={styles.input}
//             placeholder="Search Here"
//             value = {search}
//             onChangeText = {setSearch}
//             />
//         <FlatList data= {filteredUsers}
//           keyExtractor={(item) => item.id.toString()}          
//           renderItem={({item})=>{
//             return(
//             <Text>{item.name}</Text>
//         )}} ></FlatList>
//         {/* <Text style={styles.text}>{users}</Text> */}
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//         backgroundColor: '#f5f5f5',
//     },

//     text: {
//         fontSize: 14,
//         lineHeight: 22,
//         color: '#222',
//         fontFamily: 'monospace',
//     },
//     input:{
//         height: 50,
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 10,
//         paddingHorizontal: 15,
//         fontSize: 16,
//         color: '#222',
//         backgroundColor: '#fff',
//         marginBottom: 15,
//     }
// });


// condition
import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import CommonButton from "../../../../../src/components/CommonButton";

export default function Practice() {
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");

  return (
    <View>
      <TextInput
        onChangeText={setData}
        placeholder="Enter something"
      />

      <CommonButton
        title="Submit"
        onPress={() => {
          data.trim() === ""
            ? setMessage("No data written")
            : setMessage("Done");
        }}
      />

      <Text>{message}</Text>
    </View>
  );
}   
