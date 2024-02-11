import React, { useLayoutEffect, useState  } from 'react';

import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const volunteerCount = 4;
const volunteerHours = 4;
const tip = 5;
const name = "이름";

const CreateScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'VolunTip', 
      headerTitleAlign: 'center', 
    
      headerTitleStyle: {
        fontSize: 15
      },
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => alert('Menu clicked!')}>
    <Image
      source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }} // 여기에 실제 이미지 URL을 사용하세요
      style={{
        width: 30, 
        height: 30, 
        borderRadius: 15, 
      }}
    />
  </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => alert('Menu clicked!')}>
          <Ionicons name="menu" size={25} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return(
    <View style={styles.outerContainer}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent} // 이 부분을 추가하세요
      >
        <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.rankingText}>Ranking</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.itemsContainer}>
        {/* 아이템 예시, 필요한 만큼 반복 */}
        <View style={styles.item}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileName}>User Name</Text>
          <Text style={styles.rankNumber}>1</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileName}>User Name</Text>
          <Text style={styles.rankNumber}>2</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileName}>User Name</Text>
          <Text style={styles.rankNumber}>3</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileName}>User Name</Text>
          <Text style={styles.rankNumber}>4</Text>
        </View>

        
      </ScrollView>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
        source={{ uri: "https://ifh.cc/g/bmacV6.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Hours: {volunteerHours}</Text>
        <Text style={styles.details}>Count: {volunteerCount}</Text>
      </View>
      <Text style={styles.tip}>Tip: ${tip}</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
        source={{ uri: "https://ifh.cc/g/bmacV6.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Hours: {volunteerHours}</Text>
        <Text style={styles.details}>Count: {volunteerCount}</Text>
      </View>
      <Text style={styles.tip}>Tip: ${tip}</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
        source={{ uri: "https://ifh.cc/g/bmacV6.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Hours: {volunteerHours}</Text>
        <Text style={styles.details}>Count: {volunteerCount}</Text>
      </View>
      <Text style={styles.tip}>Tip: ${tip}</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
        source={{ uri: "https://ifh.cc/g/bmacV6.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Hours: {volunteerHours}</Text>
        <Text style={styles.details}>Count: {volunteerCount}</Text>
      </View>
      <Text style={styles.tip}>Tip: ${tip}</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
        source={{ uri: "https://ifh.cc/g/bmacV6.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Hours: {volunteerHours}</Text>
        <Text style={styles.details}>Count: {volunteerCount}</Text>
      </View>
      <Text style={styles.tip}>Tip: ${tip}</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
        source={{ uri: "https://ifh.cc/g/bmacV6.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Hours: {volunteerHours}</Text>
        <Text style={styles.details}>Count: {volunteerCount}</Text>
      </View>
      <Text style={styles.tip}>Tip: ${tip}</Text>
    </View>
    </View>
    
    
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1, // 전체 화면을 채우도록 설정
    backgroundColor: '#ffffff', // 필요하다면 여기에 배경색 적용
  },
  
  container: {
    backgroundColor: '#F2D2CD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rankingText: {
    fontSize: 30,
    fontWeight: '200',
    
  },
  itemsContainer: {
    marginTop: 10,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 30
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  profileName: {
    marginBottom: 5,
  },
  rankNumber: {
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  
    
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  space:{
    flexDirection: 'row',

    justifyContent: 'space-between',
  

  },
  textContainer: {
    justifyContent: 'center',
    
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {
    fontSize: 14,
  },
  itemWholeContainer:{
    backgroundColor: "#F2D2CD",
    
  },
  friendsWholeContainer:{
    backgroundColor: "#F2D2CD",
    paddingRight: 10,
    paddingLeft: 10

  },
  friendsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    padding: 10,
    marginVertical: 8,
    justifyContent: 'space-between', // 내용을 양 끝으로 분산
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1, // 이미지와 Tip 사이의 모든 공간을 차지하도록 설정
    marginLeft: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  details: {
    fontSize: 14,
  },
  tip: {
    fontSize: 12, // Tip 글씨를 작게 설정
    fontWeight: 'bold',
    marginRight: 20
    // Tip을 오른쪽 상단에 위치시키기 위한 추가 스타일링이 필요할 경우 여기에 추가
  },
});

export default CreateScreen;
