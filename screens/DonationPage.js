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
    <Image style={styles.sideImage} source={{uri: 'https://ifh.cc/g/bNhTMv.jpg'}} />
      <Image style={styles.mainImage} source={{uri: 'https://ifh.cc/g/oB0TJw.jpg'}} />
      
    </View>
    <View style = {styles.postWholeContainer}>
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{uri: 'https://ifh.cc/g/qHDl5k.png'}} />
      <Text style={styles.profileName}numberOfLines={3} ellipsizeMode="tail">Children & Youth, Community</Text>
    </View>
    
    <Text style={styles.description}>
    This fund is designed for donors who want to support interventions that have the demonstrated ability to actually save lives.
    </Text>
  </View>
    </View>
    

  <View style={styles.itemContainer}>
    <View style={styles.imagesContainer}>
      <Image style={styles.mainImage} source={{uri: 'https://ifh.cc/g/tycTD7.jpg'}} />
      <Image style={styles.sideImage} source={{uri: 'https://ifh.cc/g/lwdNnT.jpg'}} />
    </View>
    <View style = {styles.postWholeContainer}>
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{uri: 'https://ifh.cc/g/zl8LAM.jpg'}} />
      <Text style={styles.profileName}>Against Malaria Foundation</Text>
    </View>
    
    <Text style={styles.description}>
    This general fund is a great opportunity for donors seeking to support the wide range of cost-effective, highly impactful charities that contribute to alleviating premature death and unnecessary suffering.
    </Text>
  </View>
    </View>
    

  <View style={styles.itemContainer}>
    <View style={styles.imagesContainer}>
      
      <Image style={styles.sideImage} source={{uri: 'https://ifh.cc/g/6WBmp1.jpg'}} />
      <Image style={styles.mainImage} source={{uri: 'https://ifh.cc/g/WApdXW.jpg'}} />
    </View>
    
    
    
  </View>
  <View style = {styles.postWholeContainer}>
    <View style={styles.profileContainer}>
      <Image style={styles.profileImage} source={{uri: 'https://ifh.cc/g/JZW4yo.jpg'}} />
      <Text style={styles.profileName}>Population Services International</Text>
    </View>
    
    <Text style={styles.description}>
    This fund is for donors who seek to address the disproportionate burden on women and girls among people living in extreme poverty. Supporting effective charities like those listed below can help reshape gender norms worldwide, promote women’s inclusion and safety, and increase access to maternal healthcare and family planning services. In turn, supporting women and girls enhances the well-being of entire communities.
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
