import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput, Button, DataTable, Menu, Divider, Provider, Caption, Headline } from 'react-native-paper';
import { styles } from '../css/css'
import { perct } from './Percent'

export default function MaxOut() {
    const [table, setTable] = React.useState([]);
    const [array, setArray] = React.useState([]);
    const [weight, setWeight] = React.useState('');
    React.useEffect(() => {
        tableBreakdown()
    }, [array])

    const clear = () => {
        setTable([])
        setArray([])
        setWeight('')
    }
    const breakdown = () => {
        let warmUp = perct(weight, 65)
        let three = perct(weight, 80)
        let two = perct(weight, 85)
        let max = perct(weight, 100)
        let fail = perct(weight, 90)
        setArray([warmUp, three, two, max, fail])
    }

    const tableBreakdown = () => {
        setTable(array.map((e, i) => {
            let crap = ''
            if (i === 0) {
                crap = "Warm Up: Do 10 reps"
            } else if (i === 1) {
                crap = "Do 3 reps"
            } else if (i === 2) {
                crap = "Do 2 reps"
            } else if (i === 3) {
                crap = "Max out with 1 rep"
            } else if (i === 4) {
                crap = "If failed: Do 1 rep"
            }
            return (
                <View style={styles.textContainer} key={i}>
                    <Caption style={styles.caption}>{crap}</Caption>
                    <View style={styles.boxContainer}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Weight</DataTable.Title>
                                <DataTable.Title numeric>Plate Amount</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Cell>45 lbs</DataTable.Cell>
                                <DataTable.Cell numeric>{e[45] > 0 ? e[45] : 0}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>25 lbs</DataTable.Cell>
                                <DataTable.Cell numeric>{e[25] > 0 ? e[25] : 0}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>10 lbs</DataTable.Cell>
                                <DataTable.Cell numeric>{e[10] > 0 ? e[10] : 0}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>5 lbs</DataTable.Cell>
                                <DataTable.Cell numeric>{e[5] > 0 ? e[5] : 0}</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>2.5 lbs</DataTable.Cell>
                                <DataTable.Cell numeric>{e[2.5] > 0 ? e[2.5] : 0}</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </View>
                </View>
            )
        }))
    }
    return (
        <ScrollView>
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
                    <Button color="#4051B5" mode="outlined" style={styles.button} onPress={() => breakdown()}>Build plan to "Max Out"</Button>
                </View>
                {table}
                {table.length > 0 ? <View style={styles.textContainer}>
                    <Button onPress={() => clear()} color="#4051B5" mode="outlined" style={styles.exButton}>Clear</Button>
                </View> : <View></View>}
                <View style={{ paddingBottom: 35 }}></View>
            </View>
        </ScrollView>
    )
}
