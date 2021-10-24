import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Image} from 'react-native'


const handleFriendPage = () => {
    navigation.navigate("Friends")
}

export default function Friends() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{'\n'}Your Friends{'\n'}</Text>
            <View style={styles.bigCircle}>
                <View style={styles.firstcircle}>
                    <View style={styles.innerText}>
                        <Text>MT</Text>
                    </View>
                </View>
                <View style={styles.secondcircle}>
                    <View style={styles.innerText}>
                        <Text>HL</Text>
                    </View>
                </View>
                <View style={styles.thirdcircle}>
                    <View style={styles.innerText}>
                        <Text>LP</Text>
                    </View>
                </View>
            </View>
            <View style={styles.secRow}>
                <View style={styles.fourthcircle}>
                    <View style={styles.innerText}>
                        <Text>AN</Text>
                    </View>
                </View>
                <View style={styles.fifthcircle}>
                    <View style={styles.innerText}>
                        <Text>DG</Text>
                    </View>
                </View>
            </View>

            <View>
                <Text style={styles.header}>{'\n'}Add Friends{'\n'}</Text>
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.sectext}>Phone Number</Text>
                    </View>
                    <TextInput
                        placeholder = ""
                        style = {styles.input}
                    />
                    <View>
                        <Text style={styles.sectext}>{'\n'}Email</Text>
                    </View>
                    <TextInput
                        placeholder = ""
                        style = {styles.input}
                    />
                    </View>
            </View>
            <View>
                <Image style={styles.itemImage} source={require('../assets/fbgg.png')} />
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#73FFCD'
    },
    header: {
        fontSize: 30,
        textAlign: 'center'
    },
    firstcircle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#9500A2',
    },
    innerText: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontWeight: "bold"
    },
    secondcircle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#43B582',
        alignSelf: "center"
    },
    bigCircle: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    thirdcircle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#D600D6',
        alignSelf: "center"
    },
    secRow: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    fourthcircle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#FFE10F',
        alignSelf: "center"
    },
    fifthcircle: {
        width: 100,
        height: 100,
        borderRadius: 100/2,
        backgroundColor: '#F44236',
        alignSelf: "center"
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15, 
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: '50%',
        alignSelf: 'center'
    },
    itemImage: {
        width: 300,
        height: 120,
        margin: 40,
        alignSelf: 'center'
    },
    sectext: {
        textAlign: 'center'
    }
  })