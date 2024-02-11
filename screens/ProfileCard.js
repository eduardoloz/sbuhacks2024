// import React from 'react';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView ,Dimensions} from 'react-native';
// import {LinearGradient} from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ProfileCard = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Profile', 
      headerTitleAlign: 'center', 
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 30
      },
      
    });
  },[navigation] );

  return (
<ScrollView>
<View>
    
    <View style={styles.backgroundContainer}>
      <Image
        source={{ uri: 'https://pbs.twimg.com/profile_images/1307045625549254656/pFmYn2oW_400x400.png' }} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.textContainer}>


        <Text style={styles.name}>@tbred25</Text>

        
        <Text style={styles.title}>Student at Skidmore College </Text>
        <Text style={styles.description1}>
          Hi everyone! I like volunteering at animal shelters and helping the elderly.
        </Text>

    </View>


      {/* credits and hours */}
      <View style={styles.interestsContainer}>
        <View style={styles.credits}>
            <Text style={styles.creditsText}>Credits: 500</Text>
          </View>
          <View style={styles.credits}>
            <Text style={styles.creditsText}>Hours: 100</Text>
          </View>
      </View>


        <View style={styles.interestsContainer}>

          {/* <Text  style={}>Interests:</Text> */}

          {/* Map your interests here */}
          <View style={styles.interest}>
            <Text>Dogs</Text>
          </View>
          <View style={styles.interest}>
            <Text>Cats</Text>
          </View>
          <View style={styles.interest}>
            <Text>LGBT</Text>
          </View>
          <View style={styles.interest}>
            <Text>Mental Health</Text>
          </View>
          <View style={styles.interest}>
            <Text>Social Justice</Text>
          </View>
          <View style={styles.interest}>
            <Text>Inclusivity</Text>
          </View>
          <View style={styles.interest}>
            <Text>Diversity</Text>
          </View>
          <View style={styles.interest}>
            <Text>Eldery Care</Text>
          </View>

          {/* ... other interests */}
        </View>


      </View>

      </View>

      {/* <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Follow</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.follower}>
        <Text>Followers: </Text>
      </View> */}

      <View style={styles.longRound}>



      <View style={styles.postContainer}>
      <View style={styles.postHeader}>
      <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://pbs.twimg.com/profile_images/1307045625549254656/pFmYn2oW_400x400.png' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>tbred25</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/rcM4OF.jpg'  }}
      />

      <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">The Home with Friends program gives you the chance to get to know your Special Friends in the environment they are most comfortable in; their own homes. Together you can bake cookies, play games, create arts and crafts items, play in the snow, read books, or do just about anything you can think of! </Text>

      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>

      <View style={styles.newContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>





        {/**/}

</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // LinearGradient: {
  //   flex: 1,
  // },
  cardContainer: {
    flex : 1,
    // borderRadius: 13,
    overflow: 'hidden',
    backgroundColor: 'black'  
  },
  image: {
    // width: '95%',
    // height: 300, // Set the image height
    // borderRadius: 8,
    // borderWidth: 2,
    // // marginTop: '15%',
    // // marginLeft: '2.5%',
    // // marginRight: '2.5%',
    // alignSelf: 'center',

    resizeMode: 'contain',
    height: 200,
    width: 200,
    padding: 5,
    borderRadius: 80,
    alignSelf: 'center',

  },
  textContainer: {
    padding: 25,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 12,
    alignSelf: 'center',
  },
  description1: {
    fontSize: 16,
    marginBottom: 12,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    marginTop: 8,
    //backgroundColor: '#F7F7F7',
  },
  interest: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#EEEEEE',
  },

  credits: {
    backgroundColor: '#FFFBEC',
    borderRadius: 16,
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },

  creditsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },


  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white'  
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
  },






  postContainer: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 20,
    marginTop: 20,
    backgroundColor: "white"
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  postUserImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },

  headerText: {
    fontWeight: 'bold',
    marginLeft: 10
  },
  postSpace:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreIcon: {
    // 스타일링이 필요한 경우 추가
    alignItems: 'right'
  },
  postImage: {
    width: width,
    height: 240,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  description: {
    marginTop: 10,
    fontWeight: '300',
    lineHeight: 25
  },
  moreTextContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  moreText: {
    fontWeight: 'bold',
  },
  newContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white'
  },
  actionIcon: {
    marginLeft: 15,
  },
  actionIconRight: {
    marginLeft: 'auto',
  },

  backgroundContainer: {
    backgroundColor: 'white',
  }

});

export default ProfileCard;