import { View, StyleSheet, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CommonButton from '../../../../Practice/src/Button/CommonButton';

export default function Profile() {
  return (
    <View style={styles.container}>

      <View style={styles.container2}>
        <SafeAreaView>
          <Text style={styles.title}>Add User</Text>
        </SafeAreaView>
      </View>

      <Text style={styles.text}>Name</Text>
      <TextInput
        placeholder="Enter Name"
        style={styles.inputField}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="Enter your Email"
        style={styles.inputField}
      />

      <CommonButton
        title="+ Add User"
        textStyle={styles.userButtonText}
        buttonStyle={styles.userButton}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  container2: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    width: '80%',
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 15,
  },

  text: {
    alignSelf: 'flex-start',
    fontSize: 15,
    marginLeft: '10%',
    marginBottom: 5,
  },

  userButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  userButton: {
    backgroundColor: 'black',
    width: '60%',
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});