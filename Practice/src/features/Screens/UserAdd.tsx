import { View, Pressable, Text, TextInput, } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import CommonButton from '../../Button/CommonButton';
import styles from '../../../../Practice/src/features/StyleSheet/UserAddStyle'
import { Ionicons } from '@expo/vector-icons';

export default function AddUser({navigation}:any) {
  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.safeArea}>

        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={23}
            color="#0F172A"
          />
        </Pressable>

        <View style={styles.container2}>
          <Text style={styles.title}>
            Add User
          </Text>

          <Text style={styles.subtitle}>
            Enter user information
          </Text>
        </View>

        <View style={styles.form}>

          <Text style={styles.text}>
            Name
          </Text>

          <TextInput
            placeholder="Enter Name"
            placeholderTextColor="#94A3B8"
            style={styles.inputField}
          />

          <Text style={styles.text}>
            Email
          </Text>

          <TextInput
            placeholder="Enter your Email"
            placeholderTextColor="#94A3B8"
            style={styles.inputField}
            keyboardType="email-address"
          />

          <CommonButton
            title="+ Add User"
            textStyle={styles.userButtonText}
            buttonStyle={styles.userButton}
          />

        </View>

      </SafeAreaView>

    </View>
  );
}

