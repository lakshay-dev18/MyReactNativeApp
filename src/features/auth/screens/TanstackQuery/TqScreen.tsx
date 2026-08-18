import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useQuery, useMutation, useQueryClient,} from '@tanstack/react-query';

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};



export default function HomeScreen() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],

    queryFn: async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      return response.json();
    },
  });

  const queryClient = useQueryClient();

  const addPostMutation = useMutation({
  mutationFn: async () => {
    // const post = {
    //       title: 'New Post',
    //       body: 'This is a new post',
    //       userId: 1
    //     }
      // console.log('SENDING:', post);
    
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'New Post',
          body: 'This is a new post',
          userId: 1
        }),
      }
      
    );
    
    const result = await response.json();
    
    console.log(response.status);
    // console.log(await response.text());
    // console.log('POST RESPONSE:', result);

    return result;
  },


onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts'],
      });
    },

// onSuccess: () => {
//   const newPost = {
//     id: Date.now(),
//     title: 'New Post',
//     body: 'This is a new post',
//     userId: 1,
//   };

//   queryClient.setQueryData<Post[]>(['posts'], (oldPosts) => {
//     return [newPost,...(oldPosts ?? [])];
//   });

// },

});



  if (isLoading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  if (isError) {
    return <Text style={styles.error}>Something went wrong!</Text>;
  }



 return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Posts
      </Text>


      <Button
        title="Add Post"
        onPress={() => addPostMutation.mutate()}
      />


      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <View style={styles.card}>

            <Text style={styles.title}>
              {item.title}
            </Text>

            <Text style={styles.body}>
              {item.body}
            </Text>

          </View>
        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },

  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#eeeeee',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  body: {
    fontSize: 15,
  },

  loading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },

  error: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },

});