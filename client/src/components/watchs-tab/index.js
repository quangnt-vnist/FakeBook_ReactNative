import React, { useEffect } from 'react';
import { LogBox, RefreshControl, ScrollView, Text } from 'react-native';

import ListWatch from './listWatch';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

function WatchTab(props) {

    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }, []);
    
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        // check data return isLoading === false;
        wait(2000).then(() => {
            setRefreshing(false)

        });
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#fff" }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <ListWatch navigation={props.navigation} />
        </ScrollView>
    );
}

export { WatchTab };