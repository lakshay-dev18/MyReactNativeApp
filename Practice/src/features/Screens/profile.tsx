import { View, Text, ScrollView, } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../../Practice/src/features/StyleSheet/profileStyle';


export default function Profile() {
  return (
    <View style={styles.container}>

      <SafeAreaView style={styles.safeArea}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

          {/* Header */}

          <View style={styles.header}>
            <Text style={styles.title}> Profile </Text>

            <Text style={styles.subtitle}> Your account information </Text>
          </View>


          {/* Profile */}

          <View style={styles.profileCard}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}> L </Text>
            </View>

            <Text style={styles.name}> Lakshay  </Text>

            <Text style={styles.username}> @lkshy </Text>

          </View>


          {/* Information */}

          <Text style={styles.sectionTitle}> Personal Information </Text>

          <View style={styles.infoCard}>

            {/* Email */}

            <View style={styles.infoRow}>

              <View style={styles.iconBox}>
                <Ionicons name="mail-outline" size={20} color="#4F46E5" />
              </View>

              <View style={styles.infoText}>
                <Text style={styles.label}> Email </Text>

                <Text style={styles.value}> Sincere@april.biz </Text>
              </View>

            </View>


            {/* Phone */}

            <View style={styles.infoRow}>

              <View style={styles.iconBox}>
                <Ionicons name="call-outline" size={20} color="#4F46E5" />
              </View>

              <View style={styles.infoText}>
                <Text style={styles.label}> Phone </Text>

                <Text style={styles.value}> 1-770-736-8031 </Text>
              </View>

            </View>


            {/* Website */}

            <View style={styles.infoRow}>

              <View style={styles.iconBox}>
                <Ionicons name="globe-outline" size={20} color="#4F46E5" />
              </View>

              <View style={styles.infoText}>
                <Text style={styles.label}> Website </Text>

                <Text style={styles.value}> hildegard.org </Text>
              </View>

            </View>

          </View>


          {/* Address */}

          <Text style={styles.sectionTitle}> Address </Text>

          <View style={styles.addressCard}>

            <View style={styles.iconBox}>
              <Ionicons name="location-outline" size={20} color="#4F46E5" />
            </View>

            <View style={styles.infoText}>
              <Text style={styles.label}> Location </Text>

              <Text style={styles.value}> Kulas Light, Apt. 556 </Text>

              <Text style={styles.value}> Gwenborough, 92998-3874 </Text>
            </View>

          </View>

        </ScrollView>

      </SafeAreaView>

    </View>
  );
}

