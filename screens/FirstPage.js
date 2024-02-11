import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width, height } = Dimensions.get('window');



const YourComponent = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://ifh.cc/g/pnrf5t.jpg' }}
        style={styles.image}
      />
      <Text style={styles.headerText}>VolunTip</Text>
      <Text style={styles.descriptionText}>
        Discover volunteer opportunities{'\n'}
        & donate with your tip!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width - 40,
    height: 300,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 30,
    marginTop: 40
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 60,
    color: '#808080'
  },
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: '#F2D2CD',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default YourComponent;
