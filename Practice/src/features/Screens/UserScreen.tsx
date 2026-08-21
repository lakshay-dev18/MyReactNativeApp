import{View,StyleSheet, TextInput, Text, FlatList, } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useState} from 'react'
import CommonButton from '../../Button/CommonButton';

type Post={
    id: number;
    name: string;
    email: string;
};
type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};
export default function User({ navigation }: Props){
    const[search,setSearch] = useState("")
    const[users,setUsers] = useState<Post[]>([])
    const data = async() =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const  receive = await response.json();
        setUsers(receive)
    }
    data()

    
        return(
            <View style = {styles.container}>
            <SafeAreaView>
                <Text style={styles.textField}> ☰        User App          🔍 </Text> 
            </SafeAreaView>
                <Text style={styles.textField1}>Search users</Text> 
                <TextInput placeholder='🔍 Search by name...' style={styles.inputField}/>
                <Text style={styles.textField1}>Users</Text>

                <FlatList 
                  data={state}
                  keyExtractor={(item)=>item.id.toString()}
                  renderItem={({item})=>(
                    <View style= {styles.container2}>
                        <Text style= {styles.textField2}>Name - {item.name}</Text>
                        <Text style= {styles.textField2}>Email - {item.email}</Text>
                    </View>    
                  )} />
                <View style={styles.container3}>  
                    <CommonButton onPress={()=>navigation.navigate('Profile')} title ='+ Add User' textStyle={styles.userButtonText} buttonStyle={styles.userButton}/>
                </View>
             </View>
        )
    

}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    container2:{
        borderWidth:2,
        width:'90%',
        left:20,
        padding:10,
        marginTop:20,
    },
    container3:{
        alignItems:'center'
    },
    inputField:{
        borderColor:'black',
        borderWidth:1,
        width: '90%',
        left: 20,
        marginBottom: 20
    },
    textField:{
        borderColor:'black',
        borderWidth:1,
        width: '90%',
        left: 20,
        height:40,
        textAlign: 'center',
        padding:10,
        marginBottom: 50
    },
    textField1:{
        left:15,
        fontWeight: 'bold',
        fontSize: 20
    },
    textField2:{
        fontSize:15,
        fontWeight:'bold'
    },
    userButtonText:{
        color:'white'
    },
    userButton:{
        width:'80%',
        backgroundColor:'black',
        height:50,
        borderRadius:20,
        justifyContent:'center'
    }
})