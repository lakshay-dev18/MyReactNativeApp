import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import axios from "axios";

export default function JwtScreen() {
  const [user, setUser] = useState<any>(null);

  const loginAndGetData = async () => {
    const loginResponse = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        email: "john@gmail.com",
        password: "123456",
      }
    );

    const token = loginResponse.data.token;

    const userResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setUser(userResponse.data);
  };

  return (
    <View>
      <Button title="Login" onPress={loginAndGetData} />

      <Text>{user?.name}</Text>
    </View>
  );
}