import{StyleSheet,Image,View} from 'react-native';
import CommonButton from '../../Button/CommonButton'
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

function WelcomeScr({ navigation }: Props){

    return(
        <View style={styles.container}>
          <SafeAreaView>  
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.logo}/>
            </View>
           </SafeAreaView> 
            <CommonButton title="Login"  onPress={()=>navigation.navigate('Main')} buttonStyle={styles.loginButton} textStyle={styles.loginButtonText} /> 
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    logoContainer:{},
    logo:{
        width: 350,
        height: 650
    },
    loginButton:{
        top:44,
        height: 50,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        left:35
    },
    loginButtonText:{
        color:'white'
    }
})
export default WelcomeScr