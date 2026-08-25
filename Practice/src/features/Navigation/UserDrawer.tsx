// import { View, Text, Pressable } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import  styles  from '../../../../Practice/src/features/StyleSheet/UserDrawerStyle';
// import { useTheme } from '../../../../Practice/src/features/Theme/ThemeContext';

// type Props = {
//   onHome: () => void;
//   onClose: () => void;
//   onSearch: () => void;
//   onProfile: () => void;
// };

// export default function UserDrawer({
//   onHome,
//   onClose,
//   onSearch,
//   onProfile,
// }: Props) {
//   const { colors, isDark, toggleTheme } = useTheme();
//   return (
//     <View style={styles.overlay}>

//       {/* Drawer */}
//       <View style={styles.drawer}>

//         {/* Profile */}
//         <View style={styles.profileSection}>

//           <View style={styles.avatar}>
//             <Text style={styles.avatarText}>
//               L
//             </Text>
//           </View>

//           <View>
//             <Text style={styles.name}>
//               Lakshay 
//             </Text>

//             <Text style={styles.username}>
//               @lkshy
//             </Text>
//           </View>

//         </View>

//         {/* Home */}
//         <Pressable
//           style={styles.menuItem}
//           onPress={onHome}
//         >
//           <Ionicons
//             name="home-outline"
//             size={22}
//             color="#4F46E5"
//           />

//           <Text style={styles.menuText}>
//             Home
//           </Text>
//         </Pressable>

//         {/* Search */}
//         <Pressable
//           style={styles.menuItem}
//           onPress={onSearch}
//         >
//           <Ionicons
//             name="search-outline"
//             size={22}
//             color="#4F46E5"
//           />

//           <Text style={styles.menuText}>
//             Search
//           </Text>
//         </Pressable>

//         {/* Profile */}
//         <Pressable
//           style={styles.menuItem}
//           onPress={onProfile}
//         >
//           <Ionicons
//             name="person-outline"
//             size={22}
//             color="#4F46E5"
//           />

//           <Text style={styles.menuText}>
//             Profile
//           </Text>
//         </Pressable>

//       </View>

//       {/* Dark background */}
//       <Pressable
//         style={styles.background}
//         onPress={onClose}
//       />

//     </View>
//   );
// }



import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../../Practice/src/features/StyleSheet/UserDrawerStyle';
import { useTheme } from '../../../../Practice/src/features/Theme/ThemeContext';

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

  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <View style={styles.overlay}>

      {/* Drawer */}
      <View
        style={[
          styles.drawer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >

        {/* Profile */}
        <View style={styles.profileSection}>

          <View
            style={[
              styles.avatar,
              {
                backgroundColor: colors.primaryLight,
              },
            ]}
          >
            <Text
              style={[
                styles.avatarText,
                {
                  color: colors.primary,
                },
              ]}
            >
              L
            </Text>
          </View>

          <View>
            <Text
              style={[
                styles.name,
                {
                  color: colors.text,
                },
              ]}
            >
              Lakshay
            </Text>

            <Text
              style={[
                styles.username,
                {
                  color: colors.secondaryText,
                },
              ]}
            >
              @lkshy
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
            color={colors.primary}
          />

          <Text
            style={[
              styles.menuText,
              {
                color: colors.text,
              },
            ]}
          >
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
            color={colors.primary}
          />

          <Text
            style={[
              styles.menuText,
              {
                color: colors.text,
              },
            ]}
          >
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
            color={colors.primary}
          />

          <Text
            style={[
              styles.menuText,
              {
                color: colors.text,
              },
            ]}
          >
            Profile
          </Text>
        </Pressable>

        {/* Dark Mode */}
        <Pressable
          style={styles.menuItem}
          onPress={toggleTheme}
        >
          <Ionicons
            name={isDark ? 'sunny-outline' : 'moon-outline'}
            size={22}
            color={colors.primary}
          />

          <Text
            style={[
              styles.menuText,
              {
                color: colors.text,
              },
            ]}
          >
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </Pressable>

      </View>

      {/* Dark background */}
      <Pressable
        style={[
          styles.background,
          {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
        ]}
        onPress={onClose}
      />

    </View>
  );
}