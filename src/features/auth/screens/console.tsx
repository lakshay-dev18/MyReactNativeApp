// timer
// console.time("test")

// for (let i =1;i<50;i++){
//     console.log("Hello")
// }

// console.timeEnd("test");


// error
// const userAge=17
// if(userAge<18){
//     console.error("User is not allowed for Voting")
// }else{
//   console.log("User is allowed for Voting")  
// }

// warn
// const age = 15;

// if (age < 18) {
// //   console.warn("User is under 18");
//     console.info("App started successfully");
// }

// const users = [
//   { name: "John", age: 25 },
//   { name: "Alex", age: 30 },
//   { name: "Sam", age: 22 },
// ];

// console.table(users);

// const age = 20;

// console.debug("Age is:", age);

// count

// for (let i = 1; i < 5; i++) {
//   console.log("Hello");
//   console.count("data");
// }
// console.clear()

// assert
// const age = 18
// console.assert(age<10,"Hello")


// const user = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Delhi",
//     country: "India"
//   }
// };

// console.dir(user);
import{StyleSheet,View, Text, FlatList} from 'react-native';


const Condition = ()=>{
// const isLoggedIn = false;
  const Info = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 4,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 5,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 6,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 7,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 8,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 9,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 10,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
return (
  // <View style={styles.container}>
  //   {isLoggedIn ? (
  //     <Text>Welcome!</Text>
  //   ) : (
  //     <Text>Please Login</Text>
  //   )}
  // </View>
  <View>
    <FlatList 
      data={Info}
      onEndReachedThreshold={0.5}
      ListEmptyComponent={<Text>No users found</Text>}
      ListHeaderComponent={<Text>Start of List</Text>}
      ListFooterComponent={<Text>End of List</Text>}
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
    
  </View>



);
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
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
  listContainer: {
    padding: 15,
  },
})
export default Condition;