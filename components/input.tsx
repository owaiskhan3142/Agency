import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React from 'react'

interface PictureInputProps {
    title: string
}

export default function input() {
    return (
        <View>
            <TouchableOpacity style={styles.button}><Button title='Login' /></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',

    }
})