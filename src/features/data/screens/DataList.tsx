import {View, StyleSheet, Image, StatusBar} from 'react-native';
import CommonButton from '../../../components/CommonButton';
import{SafeAreaView} from 'react-native-safe-area-context';




function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="dark-content" /> */}
     <SafeAreaView >
        <Image source={require('../../../../assets/logo.png')} style={styles.logo} />
      </SafeAreaView>
      <CommonButton title="Login" onPress={() => navigation.navigate('Login')} buttonStyle={styles.loginButton} textStyle={styles.loginButtonText} />  

      <CommonButton title="Register" onPress={() => navigation.navigate('Register')} buttonStyle={styles.registerButton} textStyle={styles.registerButtonText} />

      <CommonButton title="Continue as a guest" textColor="#00B3B0" 
        buttonStyle={styles.continueButton} textStyle={styles.continueButtonText}
        onPress={()=> navigation.navigate('Data')}
           />
          
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center',paddingHorizontal:16,backgroundColor:'#FFFFFF' },
  registerButton:{ backgroundColor: "white", borderRadius: 10, width: "100%", marginBottom: 15, borderWidth: 2, padding: 8, borderColor: 'black', },
  registerButtonText:{ color: "black", textAlign: "center", fontSize: 18, paddingVertical: 15, },
  loginButton:{ backgroundColor: "black", borderRadius: 10, width: "100%", marginBottom: 15, padding: 8, borderWidth: 2 },
  loginButtonText:{ color: "white", textAlign: "center", fontSize: 18, paddingVertical: 15, },
  continueButton:{ padding: 2,  },
  continueButtonText:{borderBottomWidth: 1, borderBottomColor: '#00B3B0',},
  logo: { width: 350, height: 480, marginBottom: 60, },

});
export default WelcomeScreen;