import React, { useLayoutEffect } from 'react';

import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


const SearchScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Donation', 
      headerTitleAlign: 'center', 
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30
      },
      
    });
  }, [navigation]);
  return (
  
  <ScrollView contentContainerStyle={styles.container}>
  
  
  <View style={styles.searchContainer}>
    <Ionicons name="search" size={20} color="#000" />
    <TextInput
      style={styles.searchInput}
      placeholder="Search Donation Institution"
    />
  </View>

  

  {/* 아이템 목록 */}
  <View style={styles.itemContainer}>
    <View style={styles.imagesContainer}>
      <Image style={styles.mainImage} source={{uri: 'https://ifh.cc/g/oB0TJw.jpg'}} />
      <Image style={styles.sideImage} source={{uri: 'https://ifh.cc/g/bNhTMv.jpg'}} />
    </View>
    <View style = {styles.postWholeContainer}>
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{uri: 'https://ifh.cc/g/bmacV6.jpg'}} />
      <Text style={styles.profileName}>Institution Name</Text>
    </View>
    
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
  </View>
    </View>
    

  <View style={styles.itemContainer}>
    <View style={styles.imagesContainer}>
      <Image style={styles.mainImage} source={{uri: 'https://ifh.cc/g/oB0TJw.jpg'}} />
      <Image style={styles.sideImage} source={{uri: 'https://ifh.cc/g/bNhTMv.jpg'}} />
    </View>
    <View style = {styles.postWholeContainer}>
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{uri: 'https://ifh.cc/g/bmacV6.jpg'}} />
      <Text style={styles.profileName}>Institution Name</Text>
    </View>
    
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
  </View>
    </View>
    

  <View style={styles.itemContainer}>
    <View style={styles.imagesContainer}>
      <Image style={styles.mainImage} source={{uri: 'https://ifh.cc/g/oB0TJw.jpg'}} />
      <Image style={styles.sideImage} source={{uri: 'https://ifh.cc/g/bNhTMv.jpg'}} />
    </View>
    
    
    
  </View>
  <View style = {styles.postWholeContainer}>
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{uri: 'https://ifh.cc/g/bmacV6.jpg'}} />
      <Text style={styles.profileName}>Institution Name</Text>
    </View>
    
    <Text style={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
    </View>
  

</ScrollView>
);
  }


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
    backgroundColor: "#ffffff"
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#fff',

    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 10,
    width: '100%',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  mainImage: {
    width: '55%',
    height: 250,
    borderRadius: 10,
  },
  sideImage: {
    width: '40%',
    height: 250,
    borderRadius: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  postWholeContainer: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 20,
    width: width - 40,
    marginBottom: 20,
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 25,
  },
  profileName: {
    marginLeft: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default SearchScreen;
