import{StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F8FAFC', },
  container: { paddingHorizontal: 20, paddingBottom: 30, },
  header: { height: 60, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
  backButton: { width: 42, height: 42, borderRadius: 21, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E2E8F0', },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#0F172A', },
  emptySpace: { width: 42, },
  profile: { alignItems: 'center', paddingVertical: 30, },
  avatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center', marginBottom: 15, },
  avatarText: { fontSize: 34, fontWeight: '700', color: '#4F46E5', },
  name: { fontSize: 25, fontWeight: '700', color: '#0F172A', },
  username: { fontSize: 15, color: '#4F46E5', marginTop: 5, },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#0F172A', marginBottom: 10, },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, paddingHorizontal: 15, borderWidth: 1, borderColor: '#E2E8F0', },
  infoRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, },
  iconBox: { width: 40, height: 40, borderRadius: 11, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center', },
  info: { flex: 1, marginLeft: 13, },
  label: { fontSize: 12, color: '#94A3B8', marginBottom: 3, },
  value: { fontSize: 15, fontWeight: '500', color: '#0F172A', },

});
export default styles;