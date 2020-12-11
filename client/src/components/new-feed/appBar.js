import React, { useState, useRef } from 'react';

import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

// Import react-native-reanimated
// from "https://github.com/software-mansion/react-native-reanimated"
import Animated, { Easing } from 'react-native-reanimated'
import { Dimensions, StyleSheet, TextInput, TouchableHighlight, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { Value, timing } = Animated;

// Calculate window size
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Container = styled.View`
    width: 100%;
    height: 58px;
    padding: 0 11px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
`

const Text = styled.Text`
    color: #3a86e9;
    font-size: 27px;
    font-weight: bold;
    letter-spacing: -0.3px;
`

const Row = styled.View`
    flex-direction: row
`

const Button = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 21px;
    background: #eee;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
`

// animation values
const _input_box_translate_x = new Value(width)
const _back_button_opacity = new Value(0)
const _content_translate_y = new Value(height)
const _content_opacity = new Value(0)

const AppBar = () => {

    const [isFocused, setFocused] = useState(false);
    const [keyword, setKeyword] = useState("");
    const inputSearch = useRef(null);

    // console.log('input', _input_box_translate_x, _back_button_opacity, _content_opacity, _content_translate_y);

    const _onFocus = () => {
        // update state
        setFocused(true);
        console.log('focus', isFocused);
        // animation config
        // input box
        const input_box_translate_x_config = {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }
        const back_button_opacity_config = {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }

        // content
        const content_translate_y_config = {
            duration: 0,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }
        const content_opacity_config = {
            duration: 200,
            toValue: 1,
            easing: Easing.inOut(Easing.ease)
        }

        // run animation
        timing(_input_box_translate_x, input_box_translate_x_config).start()
        timing(_back_button_opacity, back_button_opacity_config).start()
        timing(_content_translate_y, content_translate_y_config).start()
        timing(_content_opacity, content_opacity_config).start()

        // force focus
        // const inputSearch = useRef();
        inputSearch.current.focus();
    }

    const _onBlur = () => {
        // update state
        setFocused(false);
        // animation config
        // input box
        const input_box_translate_x_config = {
            duration: 200,
            toValue: width,
            easing: Easing.inOut(Easing.ease)
        }
        const back_button_opacity_config = {
            duration: 50,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }

        // content
        const content_translate_y_config = {
            duration: 0,
            toValue: height,
            easing: Easing.inOut(Easing.ease)
        }
        const content_opacity_config = {
            duration: 200,
            toValue: 0,
            easing: Easing.inOut(Easing.ease)
        }

        // run animation
        timing(_input_box_translate_x, input_box_translate_x_config).start()
        timing(_back_button_opacity, back_button_opacity_config).start()
        timing(_content_translate_y, content_translate_y_config).start()
        timing(_content_opacity, content_opacity_config).start()

        // force 
        inputSearch.current.blur();

    }

    return <>
        <Container>
            <Text>facebook</Text>
            <Row>
                <Button
                    onPress={() => { alert("hello") }}
                    // onPress={_onFocus}
                >
                    <Icon name='search' size={20} color="#111" />
                </Button>
                <Button
                >
                    <Icon5 name='facebook-messenger' size={20} color="#111" />
                </Button>
            </Row>
        </Container>
    </>
}

export default AppBar;
