import React, { useLayoutEffect } from 'react';
import { ScrollView, FlatList, View, Image, StyleSheet, Text, Dimensions,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window');


const DATA = [
  { id: '1', uri: 'https://ifh.cc/g/R6kRw0.jpg', title: 'Pet Therapy' },
  { id: '2', uri: 'https://ifh.cc/g/OjpzfX.jpg', title: 'Host an International High School Exchange Student (Nationwide)' },
  { id: '3', uri: 'https://ifh.cc/g/1tWvnh.jpg', title: 'EAC:Chance to Advance Seeks Volunteers to Mentor Youth' },
  { id: '4', uri: 'https://ifh.cc/g/1KWxbZ.jpg', title: 'Grief Camp Volunteers Needed in Long Island' },
  { id: '5', uri: 'https://ifh.cc/g/Kcq99r.jpg', title: 'Wyandanch Volunteers: Virtually work 1-on-1 with a kid impacted by chronic illness.' },
  { id: '6', uri: 'https://ifh.cc/g/AMqcbx.jpg', title: 'Volunteer with children with special needs!' },
];

const VerticalDATA = [
  {
    id: '1',
    userImageUri: 'https://ifh.cc/g/Wvonf4.jpg',
    postImageUri: 'https://ifh.cc/g/3tlT74.jpg',
    userName: 'Charlotte Johnson',
    description: 'Engage in pet therapy with youth who have experienced complex trauma, and/or who suffer from physical, mental, or emotional difficulties. The volunteer needs to maintain the confidentiality of the youth in our programs.',
  },
  {
    id: '2',
    userImageUri: 'https://ifh.cc/g/rcM4OF.jpg',
    postImageUri: 'https://ifh.cc/g/bBdG1S.jpg',
    userName: 'Elizabeth Montgomery',
    description: 'The Home with Friends program gives you the chance to get to know your Special Friends in the environment they are most comfortable in; their own homes. Together you can bake cookies, play games, create arts and crafts items, play in the snow, read books, or do just about anything you can think of!',
  },
  {
    id: '3',
    userImageUri: 'https://ifh.cc/g/dTxgGt.jpg',
    postImageUri: 'https://ifh.cc/g/yRPn88.jpg',
    userName: 'Isabella Fitzgerald',
    description: 'Volunteers are needed to assist in operation of the Long Island National Wildlife Refuge Complex Visitor Center and Nature Store, located in Shirley, NY. If you like interacting with people, both young and old, this is the volunteer position for you!',
  },
  {
    id: '4',
    userImageUri: 'https://ifh.cc/g/N37omW.jpg',
    postImageUri: 'https://ifh.cc/g/BbvW81.jpg',
    userName: 'Alexander Montgomery',
    description: 'Ready to have a fun experience? Ready to enjoy some cultural diversity? Ready to get inspired? Invite an international high school student to your home for a few weeks, a semester or even a full school year!',
  },
  {
    id: '5',
    userImageUri: 'https://ifh.cc/g/cA9nxV.jpg',
    postImageUri: 'https://ifh.cc/g/HfwTbK.jpg',
    userName: 'Joh',
    description: 'Old Bethpage Village Restoration is looking for history enthusiasts to help recreate the atmosphere from the early 1800s. OBVR has multiple volunteer opportunities from farming to reenactor.',
  },
  {
    id: '6',
    userImageUri: 'https://ifh.cc/g/x53jgx.jpg',
    postImageUri: 'https://ifh.cc/g/fRfyFg.jpg',
    userName: 'Genevieve Alexandra Thompson',
    description: 'Recruiting Organization: Suffolk County Safe Harbour Mentoring Program. The Safe Harbour Mentoring program has been established to engage and empower youth that have been impacted by human trafficking in Suffolk County, NY.',
  },
  {
    id: '7',
    userImageUri: 'https://ifh.cc/g/3pysWR.jpg',
    postImageUri: 'https://ifh.cc/g/Ba9L3V.jpg',
    userName: 'Adrianna Gabriella Rodriguez',
    description: 'Causes For Kids needs Volunteers. We are looking for motivated and driven students and adults to want to make a difference. Your efforts will help causes for kids continue its mission.',
  },
];
const PostItem = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProfileCard', {
      userName: item.userName,
      description: item.description,
      postImageUri: item.postImageUri,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image style={styles.postUserImage} source={{ uri: item.userImageUri }} />
        <Text style={styles.headerText}>{item.userName}</Text>
        <TouchableOpacity style={styles.moreIcon}>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image style={styles.postImage} source={{ uri: item.postImageUri }} />
      <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">
        {item.description}
      </Text>
    </TouchableOpacity>
  );
};

const PostsList = () => {
  const renderItem = ({ item }) => <PostItem item={item} />; // 수정됨

  return (
    <FlatList
      data={VerticalDATA}
      renderItem={renderItem} // 수정됨
      keyExtractor={item => item.id}
    />
  );
};

const Item = ({ uri, title }) => (
  <View style={styles.imageContainer}>
    <Image source={{ uri }} style={styles.horizontalImage} />
    <Text style={styles.imageText} numberOfLines={2} ellipsizeMode="tail">{title}</Text>
  </View>
);

const MyHorizontalList = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item uri={item.uri} title={item.title} />}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

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
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.navigate("ProfileCard")}>
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
            source={{ uri: 'https://ifh.cc/g/lF2da4.jpg' }} // 여기에 실제 이미지 URL을 적어주세요.
          />
          <View style={styles.textContainer}>
            <Text style={styles.recentText}>Opportunities Held Recently</Text>
          </View>
        </View>

        <MyHorizontalList />


        <PostsList/>

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
    width: width,
    height: 240,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
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
