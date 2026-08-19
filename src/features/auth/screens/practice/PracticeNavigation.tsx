import {View, StyleSheet, Image, } from 'react-native';
import CommonButton from '../../../../../src/components/CommonButton';

type Props = {
  navigation: any;
};


function WelcomeScreen(props : Props) {
    const { navigation } = props;
  return (
    <View style={styles.container}>
        <Image source={require('../../../../../assets/logo.png')} style={styles.logo} />
      {/* <CommonButton title="Login" onPress={() => navigation.navigate('RefHook')} buttonStyle={styles.loginButton} textStyle={styles.loginButtonText} />     */}
      <CommonButton title="Login" onPress={() => navigation.navigate('Practice')} buttonStyle={styles.loginButton} textStyle={styles.loginButtonText} />    

    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center',paddingHorizontal:16,backgroundColor:'#FFFFFF' },
  logo: { width: 350, height: 480, marginBottom: 60, },
  loginButton:{ backgroundColor: "black", borderRadius: 10, width: "100%", marginBottom: 15, padding: 8, borderWidth: 2 },
  loginButtonText:{ color: "white", textAlign: "center", fontSize: 18, paddingVertical: 15, },
  
});
export default WelcomeScreen;