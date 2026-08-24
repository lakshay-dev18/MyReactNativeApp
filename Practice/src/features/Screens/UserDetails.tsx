import { View, StyleSheet, Text, ScrollView, Pressable, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../../Practice/src/features/StyleSheet/UserDetailsStyle';

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;

  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;

    geo: {
      lat: string;
      lng: string;
    };
  };
};

type Props = {
  route: any;
  navigation: any;
};

export default function UserDetails({
  route,
  navigation,
}: Props) {

  const { user } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container} >

        {/* Header */}

        <View style={styles.header}>

          <Pressable onPress={() => navigation.goBack()} style={styles.backButton} >
            <Ionicons name="arrow-back" size={23} color="#0F172A" />
          </Pressable>

          <Text style={styles.headerTitle}> User Details </Text>

          <View style={styles.emptySpace} />

        </View>


        {/* Profile */}

        <View style={styles.profile}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}> {user.name.charAt(0)} </Text>
          </View>

          <Text style={styles.name}> {user.name} </Text>

          <Text style={styles.username}> @{user.username} </Text>

        </View>


        {/* Information */}

        <Text style={styles.sectionTitle}>
          Information
        </Text>

        <View style={styles.card}>

          {/* Name */}

          <View style={styles.infoRow}>

            <View style={styles.iconBox}>
              <Ionicons name="person-outline" size={20} color="#4F46E5" />
            </View>

            <View style={styles.info}>

              <Text style={styles.label}> Name </Text>

              <Text style={styles.value}> {user.name} </Text>

            </View>

          </View>


          {/* Email */}

          <View style={styles.infoRow}>

            <View style={styles.iconBox}>
              <Ionicons name="mail-outline" size={20} color="#4F46E5" />
            </View>

            <View style={styles.info}>

              <Text style={styles.label}> Email </Text>

              <Text style={styles.value} numberOfLines={1} > {user.email} </Text>

            </View>

          </View>


          {/* Phone */}

          <View style={styles.infoRow}>

            <View style={styles.iconBox}>
              <Ionicons name="call-outline" size={20} color="#4F46E5" />
            </View>

            <View style={styles.info}>

              <Text style={styles.label}> Phone </Text>

              <Text style={styles.value}> {user.phone} </Text>

            </View>

          </View>


          {/* Address */}

          <View style={styles.infoRow}>

            <View style={styles.iconBox}>
              <Ionicons name="location-outline" size={20} color="#4F46E5" />
            </View>

            <View style={styles.info}>

              <Text style={styles.label}> Address </Text>

              <Text style={styles.value}>
                {user.address.street}, {user.address.suite},{' '}
                {user.address.city}, {user.address.zipcode}
              </Text>

            </View>

          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}


