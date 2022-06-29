import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, Image, ImageBackground, FlatList } from 'react-native'
import Header from './components/Header'
import Faltview from './components/Faltview'
// import Carousel, { Pagination } from 'react-native-snap-carousel';


export default function Home({ navigation }) {
    const [iroData, setiroData] = useState()
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        var axios = require('axios');
        var FormData = require('form-data');
        var data = new FormData({
            'lang_id': 'en',
            'user_id': '357'
        });
        data.append('lang_id', 'en')
        data.append('user_id', '357')
        // var fdata = qs.stringify({
        //     'lang_id': 'en',
        //     'user_id': '357'
        // });
        var config = {
            method: 'post',
            url: 'http://proteinium.iroidtechnologies.in/api/v1/get-mealcategories',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYTM1OWI5NDIxMzU2MjdiN2JkZjlmYmUyYTE2MDE3OWRmMTg0NTY2ZTIzZjJhN2QyMmRmMzBiN2YyYjFlYjM1MzY2NTExN2U0NGFjZjlkMDEiLCJpYXQiOjE2NTQ4NDYzNTkuNDExNDYxMTE0ODgzNDIyODUxNTYyNSwibmJmIjoxNjU0ODQ2MzU5LjQxMTQ2ODAyOTAyMjIxNjc5Njg3NSwiZXhwIjoxNjg2MzgyMzU5LjQwMjYwNzkxNzc4NTY0NDUzMTI1LCJzdWIiOiIzNTciLCJzY29wZXMiOltdfQ.kUyGb1ivFhhoQLxPZtysdPxqOlF59_KX9ZEbtXq4aCnlN0vjRs7IiGB64tjJenh0qPyor77RildrEqFn54wHYhl8ex56yaXYGgqq5LWqQLtG4Pu1x-L957CAfi69EOY3cAMcuyx5noC8KeW50TPZL8SVLcaaY0cCbUfwKe9C-tckDmmj-UPPjjC0kGNXnuZf2yUayUoGetT7xvYNRkTkiYKPnEsfU4HNl14xwfT-kbgXO6knqCtsYCwTv7MGx_5ho5cMbnvIrMLivPMC_61jDPhY0tucZML68onvZ0BPC9oiJLRAsRKz9cmU0eTA1I-rreZASH7HQcbPe6n38UY2398nE8dWJjAOuubmslYagzue8wva5EHL-JBsAMYVPhIhUsNT5Ecc8_DzS8_FlFfO919GwxoieM3AgvHWV08We7gsmq06GatEQzS7EKZ40yfVT5cvHyH1VUetDwU0OPvOX5thaDhhAhzjQir7ac-XdBWTp0Iv57BMelzEbCbHWlg5buryWOkgZ8MBkJNU4WVArJHvbo_HJnbzAWTxwjnPSZmEVi801OyXv-GIucs1_GEZMs5WDSUfs-9U8pI81JmHQWH4hii9f5ag_-NTQIc1Fo5LGrdR8wm7QjDsbelzLgOqp-gNudMVbL3KeOODHJkmf1YV1su46-hP5NnXNnEtHx4',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: FormData
        };

        // console.log(data);
        axios(config)
            .then(function (response) {
                setiroData(response.data.data.meal_categories)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    // console.log(iroData.meal_categories);
    return (
        <View>
            <StatusBar backgroundColor={"#5DA7A3"} barStyle={"light-content"} />
            <Header />

            {/* <View style={{height:130,width:"89%",backgroundColor:"red",alignSelf:"center"}}>
                <Image   source={require("../assets/images/top-view-vegetable-composition-onions-garlics-peppers-greens-dark-background-seasoning-pepper-food-product-color.png")}></Image>
            </View> */}

            <FlatList
                data={iroData}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginVertical: 20 }}
                renderItem={({ item, index }) => (
                    <Faltview data={item} />
                )}
            />

        </View>
    )
}