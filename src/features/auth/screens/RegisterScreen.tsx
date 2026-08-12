import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import CommonButton from '../../../components/CommonButton';
import { FontAwesome } from '@expo/vector-icons';

function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity  
          style={styles.button1} 
          onPress={() => navigation.goBack()} > 
          
          <Ionicons name="chevron-back" size={24} color="black" /> 
      </TouchableOpacity>

      <View style={styles.container1}> 
        <Text style={styles.text1}>Hello! Register to get Started </Text> 
      </View>

      <View style={styles.container2}>
        <TextInput style={styles.input} placeholder="Enter your Name" />

        <TextInput style={styles.input} placeholder="Email" />

        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

        
        <CommonButton title="Register"  buttonStyle={styles.button2} textStyle={styles.buttonText1} />

        <View style={styles.dividerContainer}>
           <View style={styles.line} /> 
            <Text style={styles.dividerText}>Or Register with</Text> 
          <View style={styles.line} /> 
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}> 
            <FontAwesome name="facebook" size={20} color="blue" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}> 
            {/* <FontAwesome name="google" size={20} color="red" /> */}
            <Image source={require('../../../../assets/google.png')} style={styles.socialIcon} /> 
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="apple" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.register}> 
          <Text style={styles.registerText}> Already have an account? 
            <Text style={styles.registerNow}> Login Now </Text> 
          </Text> 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: { fontWeight: "bold", fontSize: 35, },
  input:{ borderWidth: 1, borderColor: 'gray', borderRadius: 8, padding: 12, marginBottom: 20, width: 320, },
  buttonText1:{ color:'white', alignItems:'center', },
  container:{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', },
  button2:{ backgroundColor: 'black', padding: 15, width: 320, borderRadius: 10, marginBottom: 15, alignItems:'center' },
  button1: { position: 'absolute', top: 50, left: 20, width: 40, height: 40, borderRadius: 12, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', shadowColor: '#000', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3, },
  container1:{ marginTop: 100, left: 20, },
  container2:{ marginTop: 20, },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 30, width: 320, },
  line: { flex: 1, height: 1, backgroundColor: '#E5E5E5', },
  dividerText: { marginHorizontal: 10, color: '#666', fontSize: 14, },
  socialContainer: { flexDirection: 'row', justifyContent: 'space-between', width: 320, marginTop: 20, },
  socialButton: { width: 100, height: 58, borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', },
  socialIcon: { width: 28, height: 28, resizeMode: 'contain', },
  register: { marginTop: 100, alignItems: 'center', },
  registerText: { color: 'black', textAlign: 'center', },
  registerNow: { color: '#00B3B0', fontWeight: 'bold', },
  appleIcon: { width: 56, height: 80, resizeMode: 'contain', },
  buttonText2:{ fontWeight: 'bold', }

});

export default RegisterScreen;