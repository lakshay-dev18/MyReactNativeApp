import { View, StyleSheet, TextInput, Text, FlatList, Pressable, ActivityIndicator, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useMemo, useState } from 'react';
import CommonButton from '../../Button/CommonButton';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../../../../practice/MyApp/Practice/src/features/StyleSheet/UserScreenStyle'
import UserDrawer from '../../../../Practice/src/features/Navigation/UserDrawer';

type Post = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Props = {
  navigation: any;
};

export default function User({ navigation }: Props) {
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [users, setUsers] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );

        const receive = await response.json();
        setUsers(receive);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        {showDrawer && (

          <UserDrawer

            onHome={() => {
              setShowDrawer(false);
              navigation.navigate('WelcomeScr');
           }}

            onClose={() => setShowDrawer(false)}

            onSearch={() => {

              setShowDrawer(false);
              setShowSearch(true);

            }}

            onProfile={() => {

              setShowDrawer(false);
              navigation.navigate('Profile');

            }}

          />

        )}

        {/* Header onPress={() => navigation.openDrawer()}*/}
        <View style={styles.header}>
          <Pressable style={styles.headerIcon} onPress={() => setShowDrawer(true)} >
            <Ionicons name="menu-outline" size={27} color="#1E293B" />
          </Pressable>

          <Text style={styles.headerTitle}> User App </Text>

          <Pressable style={styles.headerIcon} onPress={()=>navigation.navigate('Profile')} >
            
            <Ionicons name="person-circle-outline" size={29} color="#1E293B" />
          </Pressable>
        </View>

        {/* Search */}
        {!showSearch ? (

          <Pressable style={styles.searchTrigger} onPress={() => setShowSearch(true)} >

            <Text style={styles.searchTriggerText}> Search by name to get started </Text>

            <Ionicons name="search-outline" size={18} color="#4F46E5" />
          </Pressable>

        ) : (

          <View style={styles.searchBox}>

            <Ionicons name="search-outline" size={20} color="#64748B" />


            <TextInput value={search} onChangeText={setSearch} placeholder="Search by name..." placeholderTextColor="#94A3B8" style={styles.input} autoFocus />


            <Pressable
              onPress={() => {

                setSearch('');
                setShowSearch(false);

              }}
            >

              <Ionicons name="close-circle" size={20} color="#94A3B8" />

            </Pressable>

          </View>

        )}

        {/* Users Header */}
        <View style={styles.usersHeader}>
          <Text style={styles.sectionTitle}> Users </Text>

          <View style={styles.countContainer}>
            <Text style={styles.userCount}> {filteredUsers.length} </Text>
          </View>
        </View>

        {/* Users List */}
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4F46E5" />
          </View>
        ) : (
          <FlatList
            data={filteredUsers}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
            <Pressable
                onPress={() =>
                    navigation.navigate('UserDetails', {
                      user: item,
                        })
                    }
                    style={({ pressed }) => [
                        styles.userCard,
                        pressed && styles.userCardPressed,
                    ]}
            >
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}> {item.name.charAt(0)} </Text>
                </View>

                <View style={styles.userInfo}>
                  <Text style={styles.userName} numberOfLines={1} > {item.name} </Text>

                  <Text style={styles.username}> @{item.username} </Text>

                  <Text style={styles.email} numberOfLines={1} > {item.email} </Text>
                </View>

                <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
              </Pressable>
            )}
          />
        )}

        {/* Add User Button */}
        <View style={styles.buttonContainer}>
          <CommonButton
            onPress={() => navigation.navigate('AddUser')}
            title="+  Add User"
            textStyle={styles.userButtonText}
            buttonStyle={styles.userButton}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

