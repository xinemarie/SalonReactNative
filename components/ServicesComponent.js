import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';

class Services extends Component {

    static navigationOptions = {
        title: 'Services'
    }

    render() {
        return (
            <ScrollView>
                <Card title='Services'>
                    <Text>SERVICES HERE</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Services;