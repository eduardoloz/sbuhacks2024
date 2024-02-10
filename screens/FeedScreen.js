import React, { useLayoutEffect } from 'react';
import { ScrollView, View, Image, StyleSheet, Text, Dimensions,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


const FeedScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Discover Opportunities', 
      headerTitleAlign: 'center', 
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => alert('Menu clicked!')}>
          <Ionicons name="menu" size={25} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={() => alert('Search clicked!')}>
          <Ionicons name="search" size={25} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>

    <View style={styles.recentContainer}>
          <Image
            style={styles.userImage}
            source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }} // 여기에 실제 이미지 URL을 적어주세요.
          />
          <View style={styles.textContainer}>
            <Text style={styles.recentText}>Opportunities Held Recently</Text>
          </View>
        </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://ifh.cc/g/R6kRw0.jpg' }} style={styles.horizontalImage} />
        <Text style={styles.imageText}>Animal Feeding</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image source={{ uri: 'https://ifh.cc/g/OjpzfX.jpg' }} style={styles.horizontalImage} />
        <Text style={styles.imageText}>Teaching</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image source={{ uri: 'https://ifh.cc/g/1tWvnh.jpg' }} style={styles.horizontalImage} />
        <Text style={styles.imageText}>Care</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image source={{ uri: 'https://ifh.cc/g/1KWxbZ.jpg' }} style={styles.horizontalImage} />
        <Text style={styles.imageText}>Event</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image source={{ uri: 'https://ifh.cc/g/Kcq99r.jpg' }} style={styles.horizontalImage} />
        <Text style={styles.imageText}>Instrument</Text>
      </View>
      <View style={styles.imageContainer}>
      <Image source={{ uri: 'https://ifh.cc/g/AMqcbx.jpg' }} style={styles.horizontalImage} />
        <Text style={styles.imageText}>Day Care</Text>
      </View>
      </ScrollView>


      <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>Username</Text>
        </View>
        </View>
        
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/3tlT74.jpg' }}
      />
      
      <Text style={styles.description}>Photo description here...</Text>
      
      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>

    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
      <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>Username</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/bBdG1S.jpg' }}
      />
      
      <Text style={styles.description}>Photo description here...</Text>
      
      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>

    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
      <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>Username</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/q0JLPQ.jpg' }}
      />
      
      <Text style={styles.description}>Photo description here...</Text>
      
      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>

    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
      <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>Username</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      

      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/yRPn88.jpg' }}
      />
      
      <Text style={styles.description}>Photo description here...</Text>
      
      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>

    <View style={styles.postContainer}>
      {/* 첫 번째 줄 */}
      <View style={styles.postHeader}>
      <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>Username</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      

      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/HfwTbK.jpg' }}
      />
      
      <Text style={styles.description}>Photo description here...</Text>
      
      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
      <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>Username</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>



      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/fRfyFg.jpg' }}
      />
      

      <Text style={styles.description}>Photo description here...</Text>
      

      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>
      

      <View style={styles.actionsContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
      <View style={styles.postSpace}>
        <Image
          style={styles.postUserImage}
          source={{ uri: 'https://ifh.cc/g/bmacV6.jpg' }}
        />
        <View style={styles.longRound}>
          <Text style={styles.headerText}>Username</Text>
        </View>
        </View>
        
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      

      <Image
        style={styles.postImage}
        source={{ uri: 'https://ifh.cc/g/Ba9L3V.jpg' }}
      />
      
      <Text style={styles.description}>Photo description here...</Text>
      
      <View style={styles.moreTextContainer}>
        <Text style={styles.moreText}>more</Text>
      </View>
      
      <View style={styles.actionsContainer}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.actionIcon} />
        <Ionicons name="share-social-outline" size={24} color="black" style={styles.actionIconRight} />
      </View>
    </View>

    </ScrollView>
  );
};




const styles = StyleSheet.create({
  recentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    width: 300,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'white', 
  borderColor: '#ccc', 
  borderWidth: 0.5, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentText: {
    fontSize: 16,
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  imageContainer: {
    position: 'relative',
    width: 140, // 이미지 컨테이너 너비를 직접 지정
    height: 200,
    margin: 10,
    borderRadius: 15,
  },
  horizontalImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  imageText: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    color: 'white',
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
    padding: 15,
    marginTop: 20
    
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
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  description: {
    marginTop: 10,
  },
  moreTextContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  moreText: {
    fontWeight: 'bold',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionIcon: {
    marginLeft: 15,
  },
  actionIconRight: {
    marginLeft: 'auto',
  },
});

export default FeedScreen;
