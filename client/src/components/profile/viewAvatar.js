import React, { Component, useRef, useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, Image, Keyboard, TouchableOpacity, ScrollView,
    Dimensions, KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';
import { PostAction } from '../post/redux/action';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';


const ViewAvatar = ({ navigation }) => {

    return (
        <>
            <View>
                <Image
                    style={{ width: windowWidth, height: 400 }}
                    source={
                        { uri: images.uri }
                    }
                />
            </View>
        </>
    )
}