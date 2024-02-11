import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // expo 사용 시
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');



const ProfileCard = ({ route }) => {
  const { userName,
    description,
    postImageUri, } = route.params;
  return (
    
<ScrollView style={styles.container}>

    <Image
        source={{ uri: postImageUri }}
        style={styles.topImage}
      />
      <TouchableOpacity style={styles.backIcon}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{userName}</Text>
        <Text style={styles.distance}>5 miles</Text>
      </View>
      <Text style={styles.dateText}>02-15 ~ 02-18</Text>
      <Text style={styles.description}>
      {description}
      </Text>
      <Text style={styles.interestsTitle}>Interests</Text>
      <View style={styles.interestsContainer}>
        {/* 카테고리 예시, 필요에 따라 수정 */}
        {['cook', 'teach', 'kids', 'instrument', 'clean', 'computer science'].map((interest, index) => (
          <View key={index} style={styles.interest}>
            <Text style={styles.interestText}>{interest}</Text>
          </View>
        ))}
      </View>
      <View style={styles.actionContainer}>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialIcons name="close" size={40} color="white" /> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialIcons name="favorite" size={40} color="white" /> 
      </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  topImage: {
    width: width,
    height: 300,
    borderRadius: 20,

    
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    fontWeight: '300'
  },
  dateText: {
    fontSize: 14,
    paddingHorizontal: 20,
    marginTop: 5,
    marginLeft: 10,
    fontWeight: '300'
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 20,
    
  },
  interestsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  interestsContainer: {
    
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  interest: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  interestText: {
    fontSize: 14,
  },
  actionContainer: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    height: 200,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    
  },
  actionButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 50, 
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E73215',
  }
  
  
});


export default ProfileCard;