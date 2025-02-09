import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fd', // Light background for a clean look
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#ffffff', // White card with shadow
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Shadow effect for Android
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495e', // Dark grey for professional readability
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#eaf2ff', // Light blue background for icons
    padding: 15,
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2c3e50', // Dark navy blue
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007bff', // Professional blue shade
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});
