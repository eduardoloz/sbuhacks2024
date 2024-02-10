import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const YourComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* 이미지 삽입 */}
      <Image
        source={{ uri: 'https://ifh.cc/g/pnrf5t.jpg' }}
        style={styles.image}
      />
      {/* 큰 텍스트 */}
      <Text style={styles.headerText}>Welcome to Your App!</Text>
      {/* 작은 설명 텍스트 */}
      <Text style={styles.descriptionText}>
        This is a simple app to demonstrate React Native components.
      </Text>
      {/* Get Started 버튼 */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200, // 원하는 크기로 조정
    height: 200, // 원하는 크기로 조정
    borderRadius: 100, // 원형 이미지를 원한다면 이 값을 조정
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default YourComponent;
