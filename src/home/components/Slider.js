import { View, Text, Image, Dimensions, } from 'react-native'
import React, { useState } from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel';


export default function Slider({ data }) {
    const [activeSlide, setactiveSlide] = useState(0);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <View>
            <Carousel
                //  ref={(c) => { this._carousel = c; }}
                autoplay={true}
                onSnapToItem={(index) => setactiveSlide(index)}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                sliderHeight={windowHeight}
                // itemHeight={}
                enableMomentum={true}
                decelerationRate={0.9}
                // loop={true}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                // data={data}
                data={data}
                renderItem={({ item, }) => (
                    <View style={{ elevation: 5, backgroundColor: "#ffffff" }}>
                        <Image
                            style={{ borderRadius: 30, backgroundColor: "#ffffff", height: windowHeight / 4, width: "89%", alignSelf: "center", marginTop: 20, elevation: 5 }}
                            source={{ uri: `${item.image}` }} />
                    </View>
                )
                }

            />
            <View style={{ flex: 1 }}>
                <Pagination
                    dotsLength={3}
                    activeDotIndex={activeSlide}
                    // carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: -10,
                        backgroundColor: '#5DA7A3'
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.7}
                    inactiveDotColor={"#D1D1D152"}
                    tappableDots={true}
                />
            </View>
        </View>
    )
}