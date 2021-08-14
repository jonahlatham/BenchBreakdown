import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button, DataTable, Menu, Divider, Provider, Caption, Headline } from 'react-native-paper';
import { styles } from '../css/css'
import { perct } from './Percent'

export default function Workout() {
    const [table, setTable] = React.useState([]);
    const [array, setArray] = React.useState([]);
    const [visible, setVisible] = React.useState(true);
    const [workout, setWorkout] = React.useState('');
    const [weight, setWeight] = React.useState('');
    React.useEffect(() => {
        tableBreakdown()
    }, [array])

    const breakDown = () => {
        const warmUpWeight = perct(weight, 65)
        let threeTen = ''
        let ten
        let eight
        let six

        if (workout === "3 sets of 10") {
            threeTen = perct(weight, 75)
            setArray([warmUpWeight, threeTen])
        }
        if (workout === "Set of 10, 8, and 6") {
            ten = perct(weight, 70)
            eight = perct(weight, 75)
            six = perct(weight, 80)
            setArray([warmUpWeight, ten, eight, six])
        }
    }

    const tableBreakdown = () => {
        setTable(array.map((e, i) => {
            let crap = ''
            if (i === 0) {
                crap = "Warm Up: Do 10 reps"
            } else if (i === 1 && array.length < 3) {
                crap = "Do 3 sets of 10 reps"
            } else if (i === 1 && array.length > 2) {
                crap = "Do 10 reps"
            } else if (i === 2) {
                crap = "Do 8 rep"
            } else if (i === 3) {
                crap = "Do 6 rep"
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
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const chooseWorkout = (x) => {
        clear()
        setWorkout(x)
        closeMenu()
    }
    const clear = () => {
        setWorkout('')
        setWeight('')
        setTable([])
        setArray([])
    }

    return (
        <Provider>
            <ScrollView>
                {/* dropdown menu */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={() => openMenu()} color="#4051B5" mode="outlined" style={styles.menuButt}>{workout ? workout : "Choose workout"}</Button>}>
                        <Menu.Item onPress={() => { chooseWorkout("Set of 10, 8, and 6") }} title="Set of 10, 8, and 6" />
                        <Divider />
                        <Menu.Item onPress={() => { chooseWorkout("3 sets of 10") }} title="3 sets of 10" />
                    </Menu>
                </View>

                {/* text field & build button "shows after you pick workout"*/}
                {workout ? <View style={styles.textContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={weight => setWeight(weight)}
                        defaultValue={weight}
                        label="Input your max"
                        keyboardType="numeric"
                        mode="outlined"
                        theme={{ colors: { primary: '#4051B5', underlineColor: 'transparent', } }}
                    />
                    <Button onPress={() => breakDown()} color="#4051B5" mode="outlined" style={styles.exButton}>Build workout</Button>
                </View> : <View></View>}

                {/* table & button "shows after button clicked" */}
                {array ? table : <View></View>}
                {table.length > 0 ? <View style={styles.textContainer}>
                    <Button onPress={() => clear()} color="#4051B5" mode="outlined" style={styles.exButton}>Clear</Button>
                </View> : <View></View>}
                <View style={{ paddingBottom: 35 }}></View>
            </ScrollView>
        </Provider >
    )
}
