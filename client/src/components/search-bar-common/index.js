import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

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
    margin: 2px 0;
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
    width: ${WIDTH - 100}px;
    margin: 0 10px 0 0px;
    padding: 0 20px 0 15px;
    border: 1px solid #ccc;
    border-radius: 50px;
    display: flex;
    justify-content: center;
`

const RemoveTxtButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    margin: 0 10px 0 -35px;
    borderRadius: 50px;
`

const ButtonBack = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    margin: 0 10px 0 5px;
    borderRadius: 50px;
`

const ButtonSearch = styled.TouchableOpacity`
    width: 25px;
    height: 25px;
    margin: 0 10px 0 5px;
    borderRadius: 50px;
`

const LoadingView = styled.View`
    justifyContent: center;
    alignItems: center;
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
    const [loading, setLoading] = useState(false);

    // onChangeTextSearch
    const onChangeText = (value) => {
        setTextSearch(value);
        console.log('value', value);
        console.log('vtxtx', txtSearch);
    }

    // onChangeTextSearch
    const onRemoveTxt = () => {
        setTextSearch("");
        console.log('txtSearch', txtSearch);
    }

    // input search
    // useLayoutEffect(() => {
    //     props.navigation.setOptions({
    //         headerRight: () => (
    //             <Row>
    //                 <InputSearch
    //                     placeholder={"Tìm kiếm..."}
    //                     onChangeText={(txt) => {
    //                         onChangeText(txt)
    //                     }}
    //                 />
    //                 <RemoveTxtButton
    //                     onPress={setTextSearch("")}
    //                 >
    //                     <Icon name='remove' size={20} color="#ccc" />
    //                 </RemoveTxtButton>

    //             </Row>
    //         ),
    //     });

    // }, [props.navigation]);

    const onGoBack = () => {
        props.navigation.goBack();
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
        >
            <Container>
                <Row>
                    <ButtonBack
                        onPress={() => onGoBack()}
                    >
                        <Icon5 name='arrow-left' size={20} color="#111" />
                    </ButtonBack>
                    <InputSearch
                        placeholder={"Tìm kiếm..."}
                        onChangeText={txtSearch => {
                            setTextSearch(txtSearch);
                            console.log('text', txtSearch);
                        }}
                        value={txtSearch}
                    />
                    {txtSearch !== "" &&
                        <RemoveTxtButton
                            onPress={() => {
                                setTextSearch("");
                                console.log('click', txtSearch);
                            }}
                        >
                            <Icon name='remove' size={20} color="#ccc" />
                        </RemoveTxtButton>
                    }
                    <ButtonSearch
                        onPress={() => {
                            setLoading(true)
                            console.log(txtSearch);
                        }}
                    >
                        <Icon name='search' size={20} color="#111" />
                    </ButtonSearch>
                </Row>
                <Separator />
                { !loading &&
                    <RowTitle>
                        <Text style={{ fontWeight: "700", fontSize: 18 }}>Mới đây</Text>
                        <TouchableOpacity>
                            <Text>CHỈNH SỬA</Text>
                        </TouchableOpacity>
                    </RowTitle>
                }

                { !loading && <Separator /> }

                { loading &&
                    <LoadingView>
                        <ActivityIndicator size="large" color="#ccc" />
                        <Text>Loading ...</Text>
                    </LoadingView>
                }
                
                { !loading ?
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
                    }) : null
                }
            </Container>
        </ScrollView>
    );
};

export { SearchPage };