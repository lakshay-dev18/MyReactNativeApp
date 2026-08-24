import{StyleSheet} from 'react-native'

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: '#F8FAFC', },

  background: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', },

  safeArea: { flex: 1, },

  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20, },

  welcomeContainer: { alignItems: 'center', marginBottom: 35, paddingHorizontal: 20, },

  welcomeTitle: { fontSize: 30, fontWeight: '700', color: '#FFFFFF', textAlign: 'center', marginBottom: 10, },

  welcomeSubtitle: { fontSize: 16, color: '#E2E8F0', textAlign: 'center', lineHeight: 23, },

  loginButton: { width: '85%', height: 54, backgroundColor: '#4F46E5', borderRadius: 14, justifyContent: 'center', alignItems: 'center', },

  loginButtonText: { color: '#FFFFFF', fontSize: 17, fontWeight: '600', },

});

export default styles;