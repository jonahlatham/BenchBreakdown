import React from 'react'
import { View, StyleSheet, Text, DefaultTheme } from 'react-native'

export function css() {
    return (
        <View></View>
    )
}

export const styles = StyleSheet.create({
    input: {
        width: '80%',
        fontSize: 20,
    },
    textContainer: {
        width: '100%',
        paddingTop: 25,
        alignItems: 'center',
    },
    button: {
        width: '80%',
        marginTop: 7,
        borderColor: '#4051B5',
        backgroundColor: '#e8ebf7'
    },
    exButton: {
        width: '80%',
        marginTop: 15,
        borderColor: '#4051B5',
        backgroundColor: '#e8ebf7'
    },
    exLButton: {
        width: '100%',
        marginTop: 15,
        borderColor: '#4051B5',
        backgroundColor: '#e8ebf7'
    },
    boxContainer: {
        width: '80%',
        height: 290,
        marginTop: 25,
        borderRadius: 7,
        borderStyle: 'solid',
        borderWidth: .3,
        borderColor: '#4051B5',
        backgroundColor: '#e8ebf7',
        alignItems: "center"
    },
    menuButt: {
        marginTop: 15,
        borderColor: '#4051B5',
        backgroundColor: '#e8ebf7',
        width: 315
    },
    textContainer: {
        width: '100%',
        paddingTop: 10,
        alignItems: 'center',
    },
    headline: {
        color: '#4051B5',
    },
    caption: {
        marginBottom: -15
    },
    caption2: {
        marginBottom: -15,
        marginTop: 10
    },
    wid: {
        width: '100%'
    }
});
