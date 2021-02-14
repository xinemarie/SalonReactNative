import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import SalonCarousel from './CarouselComponent';
import SalonCards from './CardsComponent';

const { width } = Dimensions.get('window');

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.carouselContainer}>
                    <SalonCarousel />
                </View>
                <View>
                    <SalonCards />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    carouselContainer: {
        width: width,
        height: width * 0.8,
        marginTop: 10
    },
});


export default Home;