import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView, Text, Modal } from 'react-native';
import { Card, Button, Rating, Input } from 'react-native-elements';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            number: '',
            message: '',
            showModal:false
        };
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            number: '',
            message: '',
            showModal: false
        });
    }

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <ScrollView>
                <Card title='Contact Information' wrapperStyle={{ margin: 20 }}>
                    <Text>123 Lavender Salon Rd</Text>
                    <Text style={{ marginBottom: 20 }}>Charleston, SC 12345</Text>
                    <Text>Phone: 555-867-5309</Text>
                    <Text style={{ marginBottom: 20 }}>Email: stylist@stylist.com</Text>
                    <Button
                        buttonStyle={{ borderRadius: 5, backgroundColor: 'purple' }}
                        title='Send me a message'
                        onPress={() => this.toggleModal()}
                    />
                </Card>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                    <Input
                            placeholder='Full Name'
                            leftIcon={{ type: 'font-awesome', name: 'user', color: 'purple' }}
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            onChangeText={name => this.setState({ name: name })}
                            value={this.state.name}
                        />
                        <Input
                            placeholder='Email'
                            leftIcon={{ type: 'font-awesome', name: 'envelope', color: 'purple' }}
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            onChangeText={email => this.setState({ email: email })}
                            value={this.state.email}
                        />
                        <Input
                            placeholder='Phone Number'
                            leftIcon={{ type: 'font-awesome', name: 'phone', color: 'purple' }}
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            onChangeText={number => this.setState({ number: number })}
                            value={this.state.number}
                        />
                        <Input
                            placeholder='Message'
                            leftIcon={{ type: 'font-awesome', name: 'comment', color: 'purple' }}
                            leftIconContainerStyle={{ paddingRight: 10 }}
                            onChangeText={message => this.setState({ message: message })}
                            value={this.state.message}
                        />
                        <View>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                                title='Submit'
                                color='purple'
                            />
                        </View>
                        <View style={{ margin: 10 }}>
                            <Button
                                onPress={() => {
                                    this.toggleModal();
                                }}
                                title='Cancel'
                                color='purple'
                            />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
});

export default Contact;