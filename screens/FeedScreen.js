import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const FeedScreen = () => (
  <ScrollView>
    <Text>Feed Screen</Text>

    <View style = {styles.container}>
      <Text >A container qjqoiwenfvaoiwndfvaiownvoiawjdsfiajwifoiawjefoiwqowjoeifjqowiejfqowejfoqwiejfoqwifje</Text>
      
    </View>

  </ScrollView>
);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginRight: 20, 
    marginLeft: 20, 
    backgroundColor: '#FFFFFF', // Set the background color of the entire page to white
  },
});


export default FeedScreen;
