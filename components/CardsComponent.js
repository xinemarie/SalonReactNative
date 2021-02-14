import React, { Component } from 'react';
import { Text, FlatList, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';

const cards = [
    {
        id: 0,
        image: 'https://i.imgur.com/GImvG4q.jpg',
        title: 'Cut',
        description: 'Haircuts for men, women, and children, and beard trim.'

    },
    {
        id: 1,
        image: 'https://i.imgur.com/Pz2WYAc.jpg',
        title: 'Color',
        description: 'Base color, foil highlights, balayage, gloss, and ombre.'

    },
    {
        id: 2,
        image: 'https://i.imgur.com/IGRuEAa.jpg',
        title: 'Style and more!',
        description: 'Simple blowout, treatments, Brazilian blowout, extensions, and waxing.'
    }
]

class SalonCards extends Component {
    render() {
        const renderCardItem = ({ item }) => {
            const { image, title, description } = item;
            return (
                <Card>
                    <Image source={{ uri: image }} style={{ alignSelf: 'center', width: 200, height: 300 }} />
                    <Text style={{ marginTop: 10, fontWeight: 'bold', textAlign: 'center' }}>
                        {title}
                    </Text>
                    <Text style={{ margin: 10 }}>
                        {description}
                    </Text>
                    <Button
                        buttonStyle={{ borderRadius: 5, backgroundColor: 'purple' }}
                        title='Services'
                    />
                </Card>
            );
        };

        return (
            <FlatList
                data={cards}
                renderItem={renderCardItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default SalonCards;