import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    flexDirection: 'row',
  },

  drawer: {
    width: 280,
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingHorizontal: 15,
    elevation: 10,
  },

  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  avatarText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4F46E5',
  },

  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
  },

  username: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 3,
  },

  menuItem: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 8,
  },

  menuText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#334155',
    marginLeft: 14,
  },
});
export default styles;