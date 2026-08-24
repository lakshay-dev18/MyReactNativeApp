import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  safeArea: {
    flex: 1,
  },

  container2: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#0F172A',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 6,
  },

  form: {
    paddingHorizontal: 25,
  },

  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 7,
  },

  inputField: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    width: '100%',
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 15,
    color: '#0F172A',
  },

  userButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  userButton: {
    backgroundColor: '#4F46E5',
    width: '100%',
    height: 52,
    marginTop: 5,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
  width: 42,
  height: 42,
  borderRadius: 21,
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 20,
  marginTop: 10,
  borderWidth: 1,
  borderColor: '#E2E8F0',
},
});

export default styles;