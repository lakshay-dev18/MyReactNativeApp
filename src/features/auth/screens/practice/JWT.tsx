import React, { useState } from "react";
import { View, Button, Text } from "react-native";

export default function App() {

  const [token, setToken] = useState("");

  // LOGIN
  const login = async () => {

    const response = await fetch("http://192.168.1.10:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "john",
        password: "1234",
      }),
    });

    const data = await response.json();

    // Get JWT from backend
    setToken(data.token);

    console.log("Token:", data.token);
  };


  // GET PROFILE
  const getProfile = async () => {

    const response = await fetch("http://192.168.1.10:3000/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();

    console.log("Profile:", data);
  };


  return (
    <View style={{ padding: 30 }}>

      <Button
        title="Login"
        onPress={login}
      />

      <Button
        title="Get Profile"
        onPress={getProfile}
      />

      <Text>
        Token: {token}
      </Text>

    </View>
  );
}







//How to use it - 
// 1. Login and get JWT

// const login = async () => {
//     const response = await fetch("https://example.com/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             email: "test@gmail.com",
//             password: "123456",
//         }),
//     });

//     const data = await response.json();

//     const token = data.token;

//     // 2. Store JWT
//     await AsyncStorage.setItem("token", token);
// };


// // 3. Get JWT and use it

// const getUsers = async () => {
//     const token = await AsyncStorage.getItem("token");

//     const response = await fetch("https://example.com/users", {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });

//     const data = await response.json();

//     console.log(data);
// };

//SecureStorage
// import * as SecureStore from "expo-secure-store";

// await SecureStore.setItemAsync("token", token);