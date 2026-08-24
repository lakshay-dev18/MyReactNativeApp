import { Image, View, Text } from 'react-native';
import CommonButton from '../../Button/CommonButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../../../../practice/MyApp/Practice/src/features/StyleSheet/WelcomeScreenStyle'

type Props = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

export default function WelcomeScr({ navigation }: Props) {
  return (
    <View style={styles.container}>

      {/* Background Image */}
      <Image source={require('../../../../assets/practice/bg.png')} style={styles.background} resizeMode="cover" />

      <SafeAreaView style={styles.safeArea}>

        <View style={styles.content}>

          {/* Welcome Text */}
          <View style={styles.welcomeContainer}>

            <Text style={styles.welcomeTitle}> Welcome to User App </Text>

            <Text style={styles.welcomeSubtitle}> Manage and explore users easily. </Text>

          </View>

          {/* Login Button */}
          <CommonButton
            title="Login"
            onPress={() => navigation.navigate('Main')}
            buttonStyle={styles.loginButton}
            textStyle={styles.loginButtonText}
          />

        </View>

      </SafeAreaView>

    </View>
  );
}

