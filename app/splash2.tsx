import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { images } from '../constants/images';

export default function Splash2() {
  return (
    <View style={styles.container}>
      <Image 
        source={images.logo} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Xylo</Text>
      <Text style={styles.subtitle}>Your favorite delivery app</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.signInButton]}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.signUpButton]}
          onPress={() => router.replace('/')}
        >
          <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: '#007AFF',
  },
  signUpButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpText: {
    color: '#007AFF',
  },
}); 