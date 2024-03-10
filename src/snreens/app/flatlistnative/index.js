import React, { Fragment, useEffect, useState, useCallback } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native';
import { colors, } from '../../../theme';
import HeaderBar from '../../../components/headerbar';
import Axios from 'axios';
import RenderItem from '../../../components/items/RenderItem';
import { useDebounce } from '../../../hooks/useDebounce';
import debounce from 'lodash.debounce';
import { formatData } from '../../../utils/formatData';

const FlatlistNative = () => {
    // const { debounce } = useDebounce()
    const [loader, setLoader] = useState(true)
    const [values, setValuse] = useState({
        data: [],
        currentPage: 1,
        pageSize: 50,
        numberOfData: 0,
        totalPage: 0
    });

    const getTags = () => {
        const controller = new AbortController();

        Axios.get(`https://api-primedeveloper.vercel.app/admin/api/admin/tags?pageSize=${values?.pageSize}&currentPage=${values?.currentPage}`, { signal: controller.signal })
            .then((response) => {
                if (response.status === 200) {
                    setValuse({
                        ...values,
                        data: [...values?.data, ...response?.data?.data],
                        numberOfData: response?.data?.numberOfData,
                        totalPage: response?.data?.totalPage
                    })
                }
            })
            .catch((error) => {
                console.log("get Tags ===>", error.response.data)
            })
            .finally(() => {
                setLoader(false)
            })

        console.log(controller)

        return () => {
            controller.abort()
        }
    };

    useEffect(() => {
        getTags()
    }, []);

    const renderItem = ({ item }) => (
        <RenderItem item={item} />
    );

    const data = Array.from(new Set(values?.data?.map((value) => value?._id).map((_id) => { return values?.data?.find((item) => item?._id === _id) }))) || []
    return (
        <Fragment>
            <HeaderBar title={"Flat List"} />
            <FlatList
                style={{}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 15 }}
                initialNumToRender={20}
                removeClippedSubviews={true}
                onEndReached={() => {
                    if (values?.currentPage <= values?.totalPage) {
                        setLoader(true)
                        setValuse({ ...values, currentPage: (values?.currentPage + 1) })
                        getTags()
                        console.log(values?.currentPage)
                    }
                }}
                onMomentumScrollEnd={() => {
                    console.log("call")
                }}
                numColumns={2}
                onEndReachedThreshold={0.01}
                data={formatData(data, 2)}
                // data={data?.length % 2 === 1 ? [...data, { empty: true }] : data}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                renderItem={renderItem}
                refreshing={loader}
                // renderItem={({ item }) => <RenderItem item={item} />}
                ListFooterComponent={() => (
                    loader &&
                    <View style={{ paddingVertical: 10, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size={"large"} color={colors?.primary?.main} />
                    </View>
                )}
                columnWrapperStyle={{ justifyContent: "space-between", gap: 10, display: "flex", flexDirection: "row", }}
                keyExtractor={(item) => item._id}
            />
        </Fragment>
    )
}

export default FlatlistNative;


/* import Axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import RenderItem from '../../../components/items/RenderItem';
import HeaderBar from '../../../components/headerbar';
import { colors } from '../../../theme';

// Functional component with React.memo
const ListItem = React.memo(({ item }) => {
    return (
        <View style={{ padding: 10 }}>
            <Text>{item.title}</Text>
        </View>
    );
});

// Class component with PureComponent
class ListItemClass extends React.PureComponent {
    render() {
        const { item } = this.props;
        return (
            <RenderItem item={item} />
        );
    }
}

const FlatlistNative = ({ data }) => {
    const [loader, setLoader] = useState(true)
    const [values, setValuse] = useState({
        data: [],
        currentPage: 1,
        pageSize: 40,
        numberOfData: 0,
        totalPage: 0
    });

    const getTags = () => {
        Axios.get(`https://api-primedeveloper.vercel.app/admin/api/admin/tags?pageSize=${values?.pageSize}&currentPage=${values?.currentPage}`)
            .then((response) => {
                if (response.status === 200) {
                    // setTags((prev) => [...prev, ...response?.data?.data])
                    setValuse({
                        ...values,
                        data: [...values?.data, ...response?.data?.data],
                        numberOfData: response?.data?.numberOfData,
                        totalPage: response?.data?.totalPage
                    })
                }
            })
            .catch((error) => {
                console.log("get Tags ===>", error.response.data)
            })
            .finally(() => {
                setLoader(false)
            })
    };

    useEffect(() => {
        getTags()
    }, []);

    const renderItem = ({ item }) => {
        // You can use either functional or class components optimized with React.memo or PureComponent
        // For example:
        // return <ListItem item={item} />;
        return <ListItemClass item={item} />;
    };

    return (
        <Fragment>
            <HeaderBar title={"Flat List"} />
            <FlatList
                style={{}}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 15, paddingHorizontal: 15 }}
                initialNumToRender={20}
                removeClippedSubviews={true}
                onEndReached={() => {
                    if (values?.currentPage <= values?.totalPage) {
                        setLoader(true)
                        setValuse({ ...values, currentPage: (values?.currentPage + 1) })
                        getTags()
                    }
                }}
                onEndReachedThreshold={0.5}
                data={Array.from(new Set(values?.data?.map((value) => value?._id).map((_id) => { return values?.data?.find((item) => item?._id === _id) }))) || []}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                refreshing={loader}
                // renderItem={({ item }) => <RenderItem item={item} />}
                ListFooterComponent={() => (
                    loader &&
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <ActivityIndicator size={"large"} color={colors?.primary?.main} />
                    </View>
                )}
            />
        </Fragment>
    );
};

export default FlatlistNative;
 */