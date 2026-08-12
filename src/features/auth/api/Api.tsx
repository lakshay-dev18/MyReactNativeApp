import { FlatList, View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import CommonButton from '../../../../src/components/CommonButton';

function Data() {
  type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const [posts, setPosts] = useState<Post[]>([]);

  const getData = async () => {
    
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      const info = await response.json();

      setPosts(info);
      
  };

    const postData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'My Post',
          body: 'This is my own data',
          userId: 1,
        }),
      }
    );

    const data = await response.json();

    // console.log(data);
  };
  
  return (
    <View style={styles.container}>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.dataCard}>
            <Text style={styles.title}>
              {item.id}. {item.title}
            </Text>

            <Text style={styles.body}>
              {item.body}
            </Text>

            <Text style={styles.userId}>
              User ID: {item.userId}
            </Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.bottomButtons}>
        <CommonButton
          title="Get Data"
          onPress={getData}
          buttonStyle={styles.dataButton}
          textStyle={styles.dataButtonText}
        />

        <CommonButton
          title="Remove Data"
          onPress={() => setPosts([])}
          buttonStyle={styles.dataButton}
          textStyle={styles.dataButtonText}
        />

        {/* <CommonButton
            title="Post Data"
            onPress={postData}
        /> */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    padding: 15,
  },

  dataCard: {
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  body: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
  },

  userId: {
    fontSize: 12,
    color: 'gray',
  },

  bottomButtons: {
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
});

export default Data;