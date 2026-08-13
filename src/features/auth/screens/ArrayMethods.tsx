import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import axios from "axios";

export default function ApiScreen() {
  const [users, setUsers] = useState<any[]>([]);

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    const requiredData = response.data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
    }));

    setUsers(requiredData);
  };

  const showUsers = () => {
    console.log(users);
  };

  return (
    <View>
      <Button title="Get Data" onPress={getUsers} />

      <Button title="Show Data" onPress={showUsers} />

      {users.map((user) => (
        <Text key={user.id}>
          {user.name} - {user.email}
        </Text>
      ))}
    </View>
  );
}