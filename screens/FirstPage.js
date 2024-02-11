import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const { width, height } = Dimensions.get('window');

const firebaseConfig = {
  apiKey: "AIzaSyAlo81_yIneGVYGfgsScNAn7r4HVndcgkI",
  authDomain: "sbuhacks-f2397.firebaseapp.com",
  databaseURL: "https://sbuhacks-f2397-default-rtdb.firebaseio.com",
  projectId: "sbuhacks-f2397",
  storageBucket: "sbuhacks-f2397.appspot.com",
  messagingSenderId: "470150391134",
  appId: "1:470150391134:web:fb7d3a41c582860f441bcf",
  measurementId: "G-WQ8E3X2425"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
// Firestore 인스턴스 가져오기
const db = getFirestore(app);

const YourComponent = ({ navigation }) => {
  useEffect(() => {
    const addData = async () => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };

    addData();
  }, []);

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
