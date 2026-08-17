import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';

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

  if (isLoading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  if (isError) {
    return <Text style={styles.error}>Something went wrong!</Text>;
  }

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Posts</Text>

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