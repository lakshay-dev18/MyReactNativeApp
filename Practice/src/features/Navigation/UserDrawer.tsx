import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import  styles  from '../../../../Practice/src/features/StyleSheet/UserDrawerStyle';

type Props = {
  onHome: () => void;
  onClose: () => void;
  onSearch: () => void;
  onProfile: () => void;
};

export default function UserDrawer({
  onHome,
  onClose,
  onSearch,
  onProfile,
}: Props) {
  return (
    <View style={styles.overlay}>

      {/* Drawer */}
      <View style={styles.drawer}>

        {/* Profile */}
        <View style={styles.profileSection}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              L
            </Text>
          </View>

          <View>
            <Text style={styles.name}>
              Leanne Graham
            </Text>

            <Text style={styles.username}>
              @Bret
            </Text>
          </View>

        </View>

        {/* Home */}
        <Pressable
          style={styles.menuItem}
          onPress={onHome}
        >
          <Ionicons
            name="home-outline"
            size={22}
            color="#4F46E5"
          />

          <Text style={styles.menuText}>
            Home
          </Text>
        </Pressable>

        {/* Search */}
        <Pressable
          style={styles.menuItem}
          onPress={onSearch}
        >
          <Ionicons
            name="search-outline"
            size={22}
            color="#4F46E5"
          />

          <Text style={styles.menuText}>
            Search
          </Text>
        </Pressable>

        {/* Profile */}
        <Pressable
          style={styles.menuItem}
          onPress={onProfile}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color="#4F46E5"
          />

          <Text style={styles.menuText}>
            Profile
          </Text>
        </Pressable>

      </View>

      {/* Dark background */}
      <Pressable
        style={styles.background}
        onPress={onClose}
      />

    </View>
  );
}

