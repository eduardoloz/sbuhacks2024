import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { width, height } = Dimensions.get('window');

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <Image source={{ uri: 'https://ifh.cc/g/rmsfO5.jpg' }} style={styles.image} />
      <Text style={styles.appName}>VolunTip</Text>

      <View style={styles.inputContainer}>
      <Text style={styles.emailText}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />

        <Text style={styles.pwText}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

      </View>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
  image: {
    width: 400,
    height: 200,
    borderRadius: 30, // Makes image round, adjust as needed
    marginBottom: 20,
  },
  appName: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emailText:{
    fontSize: 12,
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  pwText:{
    fontSize: 12,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 15,
    marginBottom: 20,

  },
  
  loginButton: {
    backgroundColor: '#F2D2CD',
    padding: 15,
    borderRadius: 5,
    width: width - 40,
    height: 50,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default LoginPage;
