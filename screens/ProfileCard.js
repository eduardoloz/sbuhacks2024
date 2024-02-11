import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


const ProfileCard = (pfp) => {
  return (
    <LinearGradient
    colors={['#ffc2d1', '#fcf5c7']} // Start and end colors of the gradient
    start={{x: 0, y: 0}} // Starting point of the gradient (left-top corner)
    end={{x: 1, y: 1}} // Ending point of the gradient (right-top corner)
    style={styles.LinearGradient}
    >
<View style={styles.cardContainer}>
      <Image
        source={{ uri: 'your-image-url-here' }} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>pfp.name</Text>
        <Text style={styles.title}>pfp.status (person or institution)</Text>
        <Text style={styles.description}>
          pfp.description
        </Text>
        <View style={styles.interestsContainer}>
          {/* Map your interests here */}
          <View style={styles.interest}>
            <Text>some interest</Text>
          </View>
          <View style={styles.interest}>
            <Text>Dogs</Text>
          </View>
          <View style={styles.interest}>
            <Text>grrr</Text>
          </View>
          <View style={styles.interest}>
            <Text>grrr</Text>
          </View>
          <View style={styles.interest}>
            <Text>grrr</Text>
          </View>
          <View style={styles.interest}>
            <Text>grrr</Text>
          </View>
          <View style={styles.interest}>
            <Text>grrr</Text>
          </View>
          <View style={styles.interest}>
            <Text>grrr</Text>
          </View>

          {/* ... other interests */}
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.follower}>
        <Text>Followers: </Text>
      </View>
    </View>
    </LinearGradient>
    
  );
};

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
  },
  cardContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#00000000'  
  },
  image: {
    width: '95%',
    height: 300, // Set the image height
    borderRadius: 8,
    borderWidth: 2,
    marginTop: '15%',
    marginLeft: '2.5%',
    marginRight: '2.5%',

  },
  textContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    marginTop: 8,
  },
  interest: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  button: {
    width: 100,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth:2,
    borderColor: '#79addc',
    backgroundColor: '#fcf4dd',
  },
  buttonText: {
    fontSize: 22,
    color: 'black',
  },
  follower: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
  }
});

export default ProfileCard;