import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Calculate window size
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Container = styled.View`
    backgroundColor: #fff;
    margin: 10px;
`

const Row = styled.View`
    flexDirection: row;
    alignItems: center;
`

const RowTitle = styled.View`
    width: 100%;
    alignItems: center;
    flexDirection: row;
    justifyContent: space-between;
`

const Separator = styled.View`
    height: 1px;
    backgroundColor: #E2E7E7;
    width: 100%;
    margin: 5px 0;
`

const RowSearchItem = styled.View`
    width: ${WIDTH - 20}px;
    height: 40px;
    alignItems: center;
    flexDirection: row;
`

const RightSearchContent = styled.View`
    width: ${WIDTH - 40}px;
    alignItems: center;
    flexDirection: row;
    justifyContent: space-between;
    padding: 0 0 0 20px;
`

const ViewAvatar = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    borderRadius: 50px;
`

const AvatarSearch = styled.Image`
    width: 25px;
    height: 25px;
    borderRadius: 50px;
`

const InputSearch = styled.TextInput`
    height: 35px;
    width: ${WIDTH - 60}px;
    margin: 0 10px 0 0px;
    padding: 0 20px 0 15px;
    border: 1px solid #ccc;
    border-radius: 50px;
    display: flex;
    justify-content: center;
`

const RemoveTxtButton = styled.View`
    width: 25px;
    height: 25px;
    margin: 0 10px 0 -35px;
    borderRadius: 50px;
`

let TXT = "";

const SearchPage = (props) => {

    // sample data
    const dataRecent = [
        { img: require("./../../public/img/assets/user5.jpg"), name: "Nguyễn Thế Quang" },
        { img: "", name: "Quang đẹp trai" },
        { img: require("./../../public/img/assets/user1.jpg"), name: "Phạm Tuấn Anh" },
        { img: require("./../../public/img/assets/user2.jpg"), name: "Nguyễn Quang Linh" },
        { img: require("./../../public/img/assets/user4.jpg"), name: "Nguyễn Xuân Thành" },
    ]

    // state input
    const [txtSearch, setTextSearch] = useState("");

    // onChangeTextSearch
    const onChangeText = (value) => {
        setTextSearch(value);
        TXT = value;
        console.log('value', value, TXT);
        console.log('vtxtx', txtSearch);
    }

    // onChangeTextSearch
    const onRemoveTxt = () => {
        setTextSearch("");
        TXT = "";
        console.log('txtSearch', txtSearch);
    }


    const HeaderSearch = () => {
        return (
            <Row>
                <InputSearch
                    placeholder={"Tìm kiếm..."}
                    onChangeText={(txt) => {
                        onChangeText(txt)
                    }}
                />
                { TXT !== "" &&
                    <RemoveTxtButton
                        onPress={setTextSearch("")}
                    >
                        <Icon name='remove' size={20} color="#ccc" />
                    </RemoveTxtButton>
                }
            </Row>
        )
    }

    // input search
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <Row>
                    <InputSearch
                        placeholder={"Tìm kiếm..."}
                        onChangeText={(txt) => {
                            onChangeText(txt)
                        }}
                    />
                    <RemoveTxtButton
                        onPress={setTextSearch("")}
                    >
                        <Icon name='remove' size={20} color="#ccc" />
                    </RemoveTxtButton>

                </Row>
            ),
        });

    }, [props.navigation]);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
        >
            <Container>
                {/* <Text>Count: {txtSearch} ----&gt; txt: {TXT} </Text> */}
                <RowTitle>
                    <Text style={{ fontWeight: "700", fontSize: 18 }}>Mới đây</Text>
                    <TouchableOpacity>
                        <Text>CHỈNH SỬA</Text>
                    </TouchableOpacity>
                </RowTitle>

                <Separator />

                {
                    dataRecent.map((e, key) => {
                        return (
                            <RowSearchItem key={key}>
                                <ViewAvatar>
                                    {e.img === "" ?
                                        <Icon name='search' size={20} color="#ccc" /> :
                                        <AvatarSearch source={e.img} />
                                    }
                                </ViewAvatar>
                                <RightSearchContent>
                                    <TouchableOpacity>
                                        <Text>{e.name}</Text>
                                    </TouchableOpacity>
                                    <ViewAvatar>
                                        <Icon name='remove' size={20} color="#ccc" />
                                    </ViewAvatar>
                                </RightSearchContent>
                            </RowSearchItem>
                        )
                    })
                }
            </Container>
        </ScrollView>
    );
};

export { SearchPage };