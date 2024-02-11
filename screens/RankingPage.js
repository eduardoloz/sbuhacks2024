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
      source={{ uri: 'https://ifh.cc/g/lF2da4.jpg' }} // 여기에 실제 이미지 URL을 사용하세요
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
            source={{ uri: 'https://ifh.cc/g/8qDt4G.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileName}>Elizabeth</Text>
          
        </View>
        <View style={styles.redItem}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/D26Vlo.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileRedName}>Alexander</Text>
          
        </View>
        <View style={styles.redItem}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/Al1MYa.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileRedName}>Adrianna</Text>
          
        </View>
        <View style={styles.item}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/W9MnjG.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileName}>Genevieve</Text>
          
        </View>

        <View style={styles.item}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://ifh.cc/g/Jc1tf7.jpg' }} // 실제 이미지 URL 사용
          />
          <Text style={styles.profileName}>Emily</Text>
          
        </View>

        
      </ScrollView>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsRedContainer}>
      <Image
      
        source={{ uri: "https://ifh.cc/g/4VYvJr.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.redName}>Joecepht</Text>
        <Text style={styles.redDetails}>Increase by 2$ within a week</Text>

      </View>
      <Text style={styles.redTip}>Tip: 4$</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsRedContainer}>
      <Image
      
        source={{ uri: "https://ifh.cc/g/VZWtLN.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.redName}>Michael</Text>
        <Text style={styles.redDetails}>Increase by 3$ within a week</Text>

      </View>
      <Text style={styles.redTip}>Tip: 5$</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
      
      
        source={{ uri: "https://ifh.cc/g/NA6aHJ.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>willium</Text>
        <Text style={styles.details}>Volunteer Hours: 5, Count: 3</Text>
      </View>
      <Text style={styles.tip}>Tip: 3$</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsContainer}>
      <Image
      
      
        source={{ uri: "https://ifh.cc/g/mmvtYt.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Linda</Text>
        <Text style={styles.details}>Volunteer Hours: 3, Count: 2</Text>
      </View>
      <Text style={styles.tip}>Tip: 2$</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsRedContainer}>
      <Image
      

        source={{ uri: "https://ifh.cc/g/DJN7ry.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.redName}>Jennifer</Text>
        <Text style={styles.redDetails}>Increase by 3$ within a week</Text>

      </View>
      <Text style={styles.redTip}>Tip: 5$</Text>
    </View>
    </View>
    <View style={styles.friendsWholeContainer}>
    <View style={styles.friendsRedContainer}>
      <Image
            

        source={{ uri: "https://ifh.cc/g/5ckZQ6.jpg" }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.redName}>James</Text>
        <Text style={styles.redDetails}>Increase by 4$ within a week</Text>
      </View>
      <Text style={styles.redTip}>Tip: 5$</Text>
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
    marginLeft:10,
    
  },
  itemsContainer: {
    marginTop: 10,
  },
  redItem: {
    backgroundColor: '#E73215',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 30,
    width: 100,
    height: 100,
  },
  profileRedName: {
    color: 'white'
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 30,
    width: 100,
    height: 100,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  profileName: {
    marginTop: 5,
    
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
  friendsRedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E73215',
    borderRadius: 25,
    padding: 10,
    marginVertical: 8,
    justifyContent: 'space-between', // 내용을 양 끝으로 분산
  },
  redName: {
    color: 'white'
  },
  redDetails: {
    color: 'white'
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
  redTip: {
    color: 'white',
    marginRight: 20,
    fontSize: 12, // Tip 글씨를 작게 설정
    fontWeight: 'bold',
  },
  tip: {
    fontSize: 12, // Tip 글씨를 작게 설정
    fontWeight: 'bold',
    marginRight: 20
    // Tip을 오른쪽 상단에 위치시키기 위한 추가 스타일링이 필요할 경우 여기에 추가
  },
});

export default CreateScreen;
