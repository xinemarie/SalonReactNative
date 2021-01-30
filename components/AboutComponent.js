import React, { Component } from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import { ListItem, Card, Image } from 'react-native-elements';

class About extends Component {

    static navigationOptions = {
        title: 'About Tami'
    }

    render() {
        return (
            <ScrollView>
                <Card title="About the Stylist">
                    <Text style={{ margin: 10 }}>
                        I've been a licensed professional cosmetologist since 2011 after attending Charleston Cosmetology Institute.
                        I have great pride in becoming an independent hair stylist after building a wonderful clientele in the
                        Charleston area. I assisted the Scruples team at the 2016 Scruples Symposium in Cancun, Mexico, as well as
                        assisted in a commercially professional hair photoshoot, and I attend one of the largest annual hair shows our
                        industry offers every chance I get. It's been a dream to operate with flexibility, and I continue to grow in
                        the beauty industry with continuing education to give you the latest trends and techniques! The sky is truly
                        the limit! I am a huge family person! I have 3 boys of my own and an amazing husband that motivate me to
                        thrive! Amazing food, music, warm weather and the beach make me happy! I love to travel when I can (I have
                        family from Guam and have visited 8 times), and I like to attend local festivals and support small businesses.
                    </Text>
                    <Image
                        source={{ uri: '../assets/images/aboutTami.jpg' }}
                        style={{ width: 400, height: 500 }}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default About;