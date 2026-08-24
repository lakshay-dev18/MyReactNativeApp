import{StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  headerIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#0F172A',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },

  searchBox: {
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 24,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#0F172A',
  },

  usersHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  countContainer: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  userCount: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
  },

  listContent: {
    paddingTop: 3,
    paddingBottom: 100,
  },

  userCard: {
    backgroundColor: '#FFFFFF',
    minHeight: 82,
    borderRadius: 16,
    paddingHorizontal: 15,
    paddingVertical: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDF3',
  },

  userCardPressed: {
    opacity: 0.7,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#4F46E5',
  },

  userInfo: {
    flex: 1,
    marginLeft: 14,
    marginRight: 10,
  },

  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F172A',
    marginBottom: 3,
  },

  username: {
    fontSize: 13,
    color: '#6366F1',
    marginBottom: 3,
  },

  email: {
    fontSize: 13,
    color: '#64748B',
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },

  userButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#4F46E5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  pageTitle: {
  fontSize: 26,
  fontWeight: '700',
  color: '#0F172A',
  marginBottom: 5,
},

subtitle: {
  fontSize: 15,
  color: '#64748B',
  marginBottom: 18,
},

searchTrigger: {
  height: 48,
  backgroundColor: '#EEF2FF',
  borderRadius: 14,
  paddingHorizontal: 15,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 24,
},

searchTriggerText: {
  fontSize: 14,
  color: '#4F46E5',
  fontWeight: '500',
},
});
export default styles