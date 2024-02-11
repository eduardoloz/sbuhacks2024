import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: 'your-image-url-here' }} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Samantha, 25</Text>
        <Text style={styles.title}>Enchantress</Text>
        <Text style={styles.description}>
          Hey, I'm a magical being seeking a fellow wizard to explore the realms of love and adventure with me.
        </Text>
        <View style={styles.interestsContainer}>
          {/* Map your interests here */}
          <View style={styles.interest}>
            <Text>Alchemy</Text>

          </View>
          {/* ... other interests */}
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>♥</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,
    backgroundColor: 'white',
    overflow: 'hidden',
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
  },
  title: {
    fontSize: 18,
    color: 'gray',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  interest: {
    backgroundColor: '#E8E8E8',
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
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
  },
});

export default ProfileCard;