import React, { Component, useRef, useState } from 'react';
import { Button, StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EmojiSelector from 'react-native-emoji-selector';
//import Emojicon from 'react-native-emojicon';
import Emoji from 'react-native-emoji';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GridImage = (arrayImage) => {
    const size = arrayImage.length;
    console.log('gidddddd', arrayImage.array[0])
    if (size === 1) {
        return (
            <>
                <Image
                    style={styles.img}
                    source={
                        { uri: arrayImage.array[0] }
                    }
                />
            </>
        )
    }

    else {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image
                        style={styles.img}
                        source={
                            // require('../../public/img/fb_reg.png')
                            { uri: arrayImage[0] }
                        }
                    />
                </View>
                <View>
                    <Image
                        style={styles.img}
                        source={
                            // require('../../public/img/fb_reg.png')
                            { uri: arrayImage[1] }
                        }
                    />
                </View>

            </View>
        )
    }

    if (size === 3) {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View>

                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    // container: {
    //     flex: 1,

    // },
    p1: {
        flex: 0.7,
        height: 75,
        width: 400,
        flexDirection: 'row',

    },

    picture: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderRadius: 25,
    },
    name: {
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'column'
    },
    p2: {
        flex: 6,
    },
    p3: {
        flex: 0.4,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        fontSize: 25,
        // backgroundColor: "blue",
    },
    img: {
        backgroundColor: "red",
        width: windowWidth,
        height: 300,

    },
    icon_create_room: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    icon_image: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    icon_: {
        color: `#6495ed`,
        fontSize: 20,
        textAlignVertical: "center",
        marginRight: 10,
    },
    // create_room: {
    //     color: `#6495ed`,
    //     fontSize: 20,
    //     textAlignVertical: "center",
    //     // marginLeft: 3,
    //     marginRight: 10,
    // },

    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginTop: 10,
    },

})


export { GridImage };