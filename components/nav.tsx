import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { wp, hp } from '../utils/helper';

interface navProps {
    isSearch?: boolean
}

const nav = () => {
    return (
        <View style={styles.main}>
            <Text>nav</Text>
        </View>
    )
}

export default nav

const styles = StyleSheet.create({
    main: {
        height: hp(50),
        backgroundColor: 'black'
    }
})