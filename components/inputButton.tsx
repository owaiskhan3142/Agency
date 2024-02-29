import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { FC } from 'react'


interface InputButtonProps {
    title: string
}

const InputButton: FC<InputButtonProps> = ({ title }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button}><Button title={title} /></TouchableOpacity>
        </View>
    )
}

export default inputButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',

    }
})