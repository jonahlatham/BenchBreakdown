import React from 'react'
import { View, StyleSheet, Text, DefaultTheme } from 'react-native'
import { TextInput, Button, DataTable } from 'react-native-paper';
import { styles } from '../css/css'
import { returnCalc } from '../breaker'

export default function Breakdown() {
    const [weight, setWeight] = React.useState('');
    const [result, setResult] = React.useState('');

    const breaks = (x) => {
        let res = returnCalc(x)
        setResult(res)
    }

    const clear = () => {
        setWeight('')
        setResult('')
    }

    return (
        <View style={styles.textContainer}>
            <TextInput
                clearButtonMode="always"
                style={styles.input}
                onChangeText={weight => setWeight(weight)}
                defaultValue={weight}
                label="Input a weight"
                keyboardType="numeric"
                mode="outlined"
                theme={{ colors: { primary: '#4051B5', underlineColor: 'transparent' } }}
            />
            <View style={styles.textContainer}>
                <Button color="#4051B5" mode="outlined" style={styles.button} onPress={() => breaks(weight)}>Get plate breakdown</Button>
                {result ? <View style={styles.boxContainer}>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Weight</DataTable.Title>
                            <DataTable.Title numeric>Plate Amount</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>45 lbs</DataTable.Cell>
                            <DataTable.Cell numeric>{result[45] > 0 ? result[45] : 0}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>25 lbs</DataTable.Cell>
                            <DataTable.Cell numeric>{result[25] > 0 ? result[25] : 0}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>10 lbs</DataTable.Cell>
                            <DataTable.Cell numeric>{result[10] > 0 ? result[10] : 0}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>5 lbs</DataTable.Cell>
                            <DataTable.Cell numeric>{result[5] > 0 ? result[5] : 0}</DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row>
                            <DataTable.Cell>2.5 lbs</DataTable.Cell>
                            <DataTable.Cell numeric>{result[2.5] > 0 ? result[2.5] : 0}</DataTable.Cell>
                        </DataTable.Row>
                    </DataTable>
                    <Button color="#4051B5" mode="outlined" style={styles.exLButton} onPress={() => clear()}>Clear</Button>
                </View> : <View></View>}
            </View>

        </View>
    )
}

