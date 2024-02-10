import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilePage = ({ hoursVolunteered, eventsAttended, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          {/* Profile Placeholder */}
          <Text>Profile</Text>
        </View>

        {/* Details Section */}
        <View style={styles.detailsSection}>
          {/* Header Title with Round Outline */}
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Header Title</Text>
          </View>

          {/* Stats Section */}
          <View style={styles.statsSection}>
            {/* Volunteer Hours */}
            <Text style={styles.statsText}>Hours Volunteered: {hoursVolunteered}</Text>

            {/* Events Attended */}
            <Text style={styles.statsText}>Events Attended: {eventsAttended}</Text>
          </View>
        </View>
      </View>

      {/* Description Section */}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF', // Set the background color of the entire page to white
  },
  row: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
  },
  profileSection: {
    // Width or flex can be adjusted depending on the desired size of the profile section
    marginRight: 10, // Add some space between the profile section and the details section
  },
  detailsSection: {
    flex: 1, // Take up all available space beside the profile section
  },
  headerTitleContainer: {
    padding: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#800080', // Purple outline
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statsSection: {
    flexDirection: 'row', // Align stats horizontally
    justifyContent: 'space-between', // Distribute space evenly between stats
    marginTop: 10, // Space from the header title
  },
  statsText: {
    // Styling for the stats text
  },
  description: {
    marginTop: 10, // Space from the row containing the profile and details sections
    // Additional styling for the description
  },
});

export default ProfilePage;





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
// const Profile = (pfp) => {

// }
// function ListItem(props) {
//   // Correct! There is no need to specify the key here:
//   return <li>{props.value}</li>;
// }
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // Correct! Key should be specified inside the array.
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const ProfileScreen = () => (
//   <View>
//     <Text>Profile Screen</Text>
//   </View>
// );

// export default ProfileScreen;
