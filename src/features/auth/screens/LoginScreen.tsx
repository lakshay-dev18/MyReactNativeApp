import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

function LoginScreen() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      {/* Welcome Text */}
      <View style={styles.container1}>
        <Text style={styles.text}>
          Welcome back! Glad to see you, Again!
        </Text>
      </View>

      <View style={styles.container2}>

        {/* Email Field */}
        <View style={styles.label1}>
          <TextInput
            style={styles.input1}
            placeholder="Enter your email"
          />
        </View>

        {/* Password Field */}
        <View style={styles.passwordContainer}>

          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            style={styles.passwordInput}
          />

          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color="gray"
            />
          </TouchableOpacity>

        </View>

        {/* Forgot Password */}
        <Text style={styles.label3}>
          Forgot Password?
        </Text>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.line} />

          <Text style={styles.dividerText}>
            Or Login with
          </Text>

          <View style={styles.line} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../../../assets/fb.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../../../assets/google.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../../../assets/ios.png')}
              style={styles.appleIcon}
            />
          </TouchableOpacity>

        </View>

        {/* Register */}
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.registerNow}>
            Register Now
          </Text>
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },

  container1: {
    marginTop: 40,
  },

  container2: {
    marginTop: 10,
  },

  text: {
    fontSize: 35,
    fontWeight: 'bold',
    padding: 20,
  },

  /* Login Button */
  button: {
    backgroundColor: 'black',
    padding: 15,
    width: 320,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  /* Back Button */
  button1: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText1: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },

  buttonText2: {
    alignItems: 'center',
    top: 100,
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
  },

  label1: {
    width: 320,
  },

  /* Email Field */
  input1: {
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  /* Password Field */
  passwordContainer: {
    width: 320,
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  /* Text inside Password Field */
  passwordInput: {
    flex: 1,
    height: 60,
    paddingHorizontal: 0,
  },

  label3: {
    alignSelf: 'flex-end',
    marginTop: -10,
    color: 'black',
  },

  /* Divider */
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: 320,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E5E5',
  },

  dividerText: {
    marginHorizontal: 10,
    color: '#666',
    fontSize: 14,
  },

  /* Social Buttons */
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,
    marginTop: 20,
  },

  socialButton: {
    width: 90,
    height: 55,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  socialIcon: {
    width: 50,
    height: 28,
    resizeMode: 'contain',
  },

  /* Register */
  registerText: {
    color: 'black',
    textAlign: 'center',
    marginTop: 120,
  },

  registerNow: {
    color: '#00B3B0',
  },
  appleIcon: { width: 52, resizeMode: 'contain', },
});

export default LoginScreen;