import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { TextInput, Button, DataTable, Card, Title, Paragraph } from 'react-native-paper';
import { styles } from '../css/css'
import { returnCalc, reduceNums } from '../breaker'

export const perct = (x, y) => {
    let percentage = Math.floor((x * (y / 100)) / 5) * 5
    let answer = returnCalc(percentage)
    return answer
}

export default function Percent() {
    const [weight, setWeight] = React.useState('');
    const [perc, setPerc] = React.useState('');
    const [ans, setAns] = React.useState('');

    const perct = (x, y) => {
        let percentage = Math.floor((x * (y / 100)) / 5) * 5
        let answer = returnCalc(percentage)
        setAns(answer)
    }

    const clear = () => {
        setAns('')
    }

    return (
        <View style={styles.textContainer}>
            <TextInput
                style={styles.input}
                onChangeText={weight => setWeight(weight)}
                defaultValue={weight}
                placeholder="Input a weight"
                keyboardType="numeric"
                mode="outlined"
                theme={{ colors: { primary: '#4051B5', underlineColor: 'transparent', } }}
            />
            <TextInput
                style={styles.input}
                onChangeText={perc => setPerc(perc)}
                defaultValue={perc}
                placeholder="Input the percent"
                keyboardType="numeric"
                mode="outlined"
                theme={{ colors: { primary: '#4051B5', underlineColor: 'transparent', } }}
            />
            <View style={styles.textContainer}>
                <Button color="#4051B5" mode="outlined" style={styles.button} onPress={() => perct(weight, perc)}>Get percentage</Button>
            </View>

            {ans ? <View style={styles.boxContainer}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Weight</DataTable.Title>
                        <DataTable.Title numeric>Plate Amount</DataTable.Title>
                    </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell>45 lbs</DataTable.Cell>
                        <DataTable.Cell numeric>{ans[45] > 0 ? ans[45] : 0}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>25 lbs</DataTable.Cell>
                        <DataTable.Cell numeric>{ans[25] > 0 ? ans[25] : 0}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>10 lbs</DataTable.Cell>
                        <DataTable.Cell numeric>{ans[10] > 0 ? ans[10] : 0}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>5 lbs</DataTable.Cell>
                        <DataTable.Cell numeric>{ans[5] > 0 ? ans[5] : 0}</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>2.5 lbs</DataTable.Cell>
                        <DataTable.Cell numeric>{ans[2.5] > 0 ? ans[2.5] : 0}</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View> : <View></View>}
            {ans ? <View style={styles.textContainer}>
                <Button onPress={() => clear()} color="#4051B5" mode="outlined" style={styles.exButton}>Clear</Button>
            </View> : <View></View>}
            <View style={{ paddingBottom: 35 }}></View>
        </View>
    )
}
