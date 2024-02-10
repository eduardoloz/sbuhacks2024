import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { bool } from 'prop-types';

const { width, height } = Dimensions.get('window');

const YourComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* 이미지 삽입 */}
      <Image
        source={{ uri: 'https://ifh.cc/g/pnrf5t.jpg' }}
        style={styles.image}
      />
      {/* 큰 텍스트 */}
      <Text style={styles.headerText}>VolunTip</Text>
      {/* 작은 설명 텍스트 */}
      <Text style={styles.descriptionText}>
        Discover volunteer opportunites{'\n'}
        & donate with your tip!
      </Text>
      {/* Get Started 버튼 */}
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
    width: width - 40, // 화면의 너비로 설정
    height: 300, // 화면의 높이로 설정
    borderRadius: 20, // 테두리를 둥글게 처리
    resizeMode: 'cover', // 이미지가 컨테이너에 꽉 차도록 조정
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
