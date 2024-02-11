// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ProfilePage = ({ hoursVolunteered, eventsAttended, description }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.row}>
//         {/* Profile Section */}
//         <View style={styles.profileSection}>
//           {/* Profile Placeholder */}
//           <Text>Profile</Text>
//         </View>

//         {/* Details Section */}
//         <View style={styles.detailsSection}>
//           {/* Header Title with Round Outline */}
//           <View style={styles.headerTitleContainer}>
//             <Text style={styles.headerTitle}>Header Title</Text>
//           </View>

//           {/* Stats Section */}
//           <View style={styles.statsSection}>
//             {/* Volunteer Hours */}
//             <Text style={styles.statsText}>Hours Volunteered: {hoursVolunteered}</Text>

//             {/* Events Attended */}
//             <Text style={styles.statsText}>Events Attended: {eventsAttended}</Text>
//           </View>
//         </View>
//       </View>

//       {/* Description Section */}
//       <Text style={styles.description}>{description}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#FFFFFF', // Set the background color of the entire page to white
//   },
//   row: {
//     flexDirection: 'row', // Align items horizontally
//     alignItems: 'center', // Center items vertically
//   },
//   profileSection: {
//     // Width or flex can be adjusted depending on the desired size of the profile section
//     marginRight: 10, // Add some space between the profile section and the details section
//   },
//   detailsSection: {
//     flex: 1, // Take up all available space beside the profile section
//   },
//   headerTitleContainer: {
//     padding: 5,
//     borderRadius: 20,
//     borderWidth: 2,
//     borderColor: '#800080', // Purple outline
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   statsSection: {
//     flexDirection: 'row', // Align stats horizontally
//     justifyContent: 'space-between', // Distribute space evenly between stats
//     marginTop: 10, // Space from the header title
//   },
//   statsText: {
//     // Styling for the stats text
//   },
//   description: {
//     marginTop: 10, // Space from the row containing the profile and details sections
//     // Additional styling for the description
//   },
// });

// export default ProfilePage;





// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center'
// //   }
// // });
// // const Profile = (pfp) => {

// // }
// // function ListItem(props) {
// //   // Correct! There is no need to specify the key here:
// //   return <li>{props.value}</li>;
// // }
// // function NumberList(props) {
// //   const numbers = props.numbers;
// //   const listItems = numbers.map((number) =>
// //     // Correct! Key should be specified inside the array.
// //     <ListItem key={number.toString()} value={number} />
// //   );
// //   return (
// //     <ul>
// //       {listItems}
// //     </ul>
// //   );
// // }

// // const ProfileScreen = () => (
// //   <View>
// //     <Text>Profile Screen</Text>
// //   </View>
// // );

// // export default ProfileScreen;













import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          // source={{ uri: 'https://placekitten.com/200/200' }} // Replace with the actual profile image source
          source={{ uri: 'https://lh3.googleusercontent.com/proxy/P79PZNpHTmEETMmN243fXBV3MW_EOhv-KyEYjYOXQegTfC03D4_9Ta32O7KkpKm73by3K92AztjeNsrCYVmI8xNI-m4cfRsMvulYL15DSmXKHm9UMmbbOHQ-elvzrS4mPubtoArYkUhJQkHmvnull7DLrdf_Tw4qtvwtsFMEos4N9lalPKzsnVbFXcAAhej4gOIw4w' }}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileBio}>Hi everyone! I am interested in giving my time to pet related volunteering groups. </Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.detailItem}>Posts: 100</Text>
        <Text style={styles.detailItem}>Followers: 500</Text>
        <Text style={styles.detailItem}>Following: 200</Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.detailItem}>Credits: 100</Text>
        <Text style={styles.detailItem}>Hours: 500</Text>
      </View>

      <View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileBio: {
    color: 'gray',
    marginBottom: 16,
  },
  profileDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailItem: {
    fontSize: 16,
  },
});

export default ProfileScreen;