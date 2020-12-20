import React from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { pageName } from '../../navigator/constant.page'
import { AuthActions } from '../auth/redux/action';

import styled from 'styled-components/native'
import IconAWS from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PostAction } from '../post/redux/action';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Container = styled.View`
    display: flex;
    width: ${WIDTH - 20}px;
    backgroundColor: #EEF2F3;
    margin: 10px 10px;
`

const TittleTab = styled.Text`
    fontWeight: 700;
    fontSize: 23px;
`

const RowAvt = styled.View`
    width: 100%;
    height: 50px;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const RowItem = styled.View`
    width: 100%;
    height: 90px;
    margin: 5px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    margin: 0 5px 0 0;
    border-radius: 50px;
    background-color: green;
`

const RightContent = styled.TouchableOpacity`
    width: ${WIDTH - 80}px;
    height: 50px;
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const NameTitle = styled.Text`
    font-weight: 700;
    font-size: 18px;
`
const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`
const SmallItem = styled.View`
    opacity: 0.3,
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#ccc",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
`

const LargeButton = styled.TouchableOpacity`
    flexDirection: row;
    alignItems: center;
    height: 50px;
`

const RightContentButton = styled.TouchableOpacity`
    width: ${WIDTH - 50}px;
    height: 50px;
    padding: 0 10px;
    display: flex;
    alignItems: center;
    flex-direction: row;
    justify-content: space-between;
`

const OptionTab = (props) => {
    const { auth } = props;

    const onPressProfile = () => {
        props.navigation.navigate(pageName.profile)
    }
    const onPressLogout = () => {
        console.log('click');
        props.logout();
        console.log('props', props);
        props.navigation.replace(pageName.LOG_IN_NEW_ACC)
    }

    // useEffect(() => {
    //     if (props.auth?.isLoading === false && props.auth?.user?.id){
    //         props.getPostByUser();
    //     }
    // }, [])

    console.log(`https://fakebook-server.herokuapp.com${auth.profile?.avatar}`);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#EEF2F3" }}
        >
            <Container>
                <TittleTab>Menu</TittleTab>
                <RowAvt
                    style={{ marginBottom: 10, marginTop: 10 }}
                >
                    <Avatar
                        source={{ uri: `https://fakebook-server.herokuapp.com${auth.profile?.avatar}` }}
                        // source={{ uri: `https://fakebook-server.herokuapp.com/upload/avatars/user.jpg` }}
                    />
                    <RightContent
                        onPress={() => onPressProfile()}
                    >
                        <NameTitle>{auth.profile?.name}</NameTitle>
                        <Text>Xem trang cá nhân của bạn</Text>
                    </RightContent>
                </RowAvt>

                <View style={{
                    width: ((WIDTH - 20)),
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                }}>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginRight: 5 }}>
                        <Icon5 name="user-friends" color="#007AFD" size={20} />
                        <Text style={styles.label}>Bạn bè</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginLeft: 5 }}>
                        <IconAWS name="group" color="#007AFD" size={20} />
                        <Text style={styles.label}>Nhóm</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: ((WIDTH - 20)),
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                }}>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginRight: 5 }}>
                        <IconAWS name="flag" color="#EE6728" size={22} />
                        <Text style={styles.label}>Trang</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginLeft: 5 }}>
                        <MaterialCommunityIcons size={23} name={'television-play'} color={"#007AFD"} />
                        <Text style={styles.label}>Video trên watch</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: ((WIDTH - 20)),
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                }}>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginRight: 5 }}>
                        <Entypo name="shop" color="#007AFD" size={23} />
                        <Text style={styles.label}>Marketpalce</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginLeft: 5 }}>
                        <IconAWS name="calendar-check-o" color="#EA3E59" size={21} />
                        {/* <Icon5 name="calendar-check" color="#EA3E59" size={20} /> */}
                        <Text style={styles.label}>Sự kiện</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    width: ((WIDTH - 20)),
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                }}>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginRight: 5 }}>
                        <IconAWS name="bookmark" color="#9C39C6" size={21} />
                        <Text style={styles.label}>Đã lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.SmallItem, marginLeft: 5 }}>
                        <IconAWS name="clock-o" color="#007AFD" size={22} />
                        <Text style={styles.label}>Kỉ niệm</Text>
                    </TouchableOpacity>
                </View>

                {/* end item small */}

                <View style={{ height: 15 }}></View>

                <LargeButton
                    style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
                >
                    <IconAWS name="th-large" color="#4C6065" size={30} />
                    <RightContentButton>
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>Xem thêm</Text>
                        <IconAWS name="chevron-down" size={15} color="#111" />
                    </RightContentButton>
                </LargeButton>
                <LargeButton
                    style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
                >
                    <IconAWS name="question-circle" color="#4C6065" size={30} />
                    <RightContentButton>
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>Trợ giúp & hỗ trợ</Text>
                        <IconAWS name="chevron-down" size={15} color="#111" />
                    </RightContentButton>
                </LargeButton>
                <LargeButton
                    style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
                >
                    <Ionicons name="settings" color="#4C6065" size={30} />
                    <RightContentButton>
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>Cài đặt quyền riêng tư</Text>
                        <IconAWS name="chevron-down" size={15} color="#111" />
                    </RightContentButton>
                </LargeButton>
                <LargeButton
                    onPress={() => onPressLogout()}
                >
                    <Entypo name="log-out" color="#4C6065" size={30} />
                    <RightContentButton
                        onPress={() => onPressLogout()}
                    >
                        <Text style={{ fontWeight: "600", fontSize: 18 }}>Đăng xuất</Text>
                    </RightContentButton>
                </LargeButton>

            </Container>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    SmallItem: {
        backgroundColor: "#fff",
        borderRadius: 10,
        // alignItems: "center",
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 15,
        width: (WIDTH - 30) / 2,
    },
    label: {
        fontWeight: "700",
        fontSize: 14,
    }

})

const mapStateToProps = state => {
    const { auth } = state;
    return { auth };
}
const mapActions = {
    logout: AuthActions.logout,
    getPostByUser: PostAction.getPostByUser,
}
let connected = connect(mapStateToProps, mapActions)(OptionTab);

export { connected as OptionTab }