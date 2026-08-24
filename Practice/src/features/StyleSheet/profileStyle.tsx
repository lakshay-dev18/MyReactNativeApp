import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#F8FAFC', },

  safeArea: { flex: 1, },

  scrollContent: { paddingHorizontal: 20, paddingBottom: 30, },

  /* Header */

  header: { alignItems: 'center', paddingTop: 20, paddingBottom: 25, },

  title: { fontSize: 26, fontWeight: '700', color: '#0F172A', },

  subtitle: { fontSize: 14, color: '#64748B', marginTop: 6, },

  /* Profile */

  profileCard: { backgroundColor: '#FFFFFF', borderRadius: 18, alignItems: 'center', paddingVertical: 25, borderWidth: 1, borderColor: '#E2E8F0', },

  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center', marginBottom: 12, },

  avatarText: { fontSize: 30, fontWeight: '700', color: '#4F46E5', },

  name: { fontSize: 22, fontWeight: '700', color: '#0F172A', },

  username: { fontSize: 14, color: '#4F46E5', marginTop: 4, },

  /* Sections */

  sectionTitle: { fontSize: 17, fontWeight: '700', color: '#0F172A', marginTop: 25, marginBottom: 10, },

  /* Information Card */

  infoCard: { backgroundColor: '#FFFFFF', borderRadius: 16, paddingHorizontal: 15, borderWidth: 1, borderColor: '#E2E8F0', },

  infoRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, },

  iconBox: { width: 42, height: 42, borderRadius: 12, backgroundColor: '#EEF2FF', alignItems: 'center', justifyContent: 'center', },

  infoText: { flex: 1, marginLeft: 13, },

  label: { fontSize: 12, color: '#94A3B8', marginBottom: 3, },

  value: { fontSize: 15, fontWeight: '500', color: '#0F172A', },

  /* Address */

  addressCard: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 15, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', },

});
export default styles;