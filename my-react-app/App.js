import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>

//     function timer(){
//         var sec = 30;
//         var timer = setInterval(function(){
//             document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
//             sec--;
//             if (sec < 0) {
//                 clearInterval(timer);
//             }
//         }, 1000);
//     }


//       {/* <Text>The Expo App is Working!</Text>
//       <Text>Here's another text</Text>

//       <Text>Time</Text>


//       <StatusBar style="auto" />


//       <TouchableOpacity
//         onPress={() => alert('Welcome')}
//         style={{ backgroundColor: 'blue' }}>
//         <Text style={{ fontSize: 20, color: '#fff' }}>Login with Gmail</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => alert('Welcome!')}
//         style={{ backgroundColor: 'yellow' }}>
//         <Text style={{ fontSize: 20, color: '#fff' }}>Login with Facebook</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         onPress={() => alert('Welcome!')}
//         style={{ backgroundColor: 'red' }}>
//         <Text style={{ fontSize: 20, color: '#fff' }}>Login with Twitter</Text>
//       </TouchableOpacity> */}

//       <Text></Text>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
   
function App() {
  return (
    <div className="App">
      <StopWatch />
    </div>
  );
}
  
export default App;