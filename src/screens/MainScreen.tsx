import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TodoItem from '../components/TodoItem';

export default function MainScreen() {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState<string[]>([]);
    const saveTask = () => {
        if (task.length > 0) {
            Keyboard.dismiss();
            setTaskItems([...taskItems, task]);
            setTask('');
        }
    };

    const completeTask = (index: number) => {
        const updatedTaskItems = [...taskItems];
        updatedTaskItems.splice(index, 1);
        setTaskItems(updatedTaskItems);
    };
    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
                <View style={styles.items}>
                    {taskItems.toReversed().map((item, index) =>
                    (
                        <TouchableOpacity key={index} onLongPress={() => completeTask(index)}>
                            <TodoItem text={item} />
                        </TouchableOpacity>
                    )
                    )}
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTaskWrapper}>
                <TextInput
                    placeholder={'Write a Task'}
                    style={styles.input}
                    value={task}
                    onChangeText={text => setTask(text)}
                />
                <TouchableOpacity onPress={() => saveTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'none',
        flex: 1,
        // alignItems: 'center'
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        columnGap: 10
    },
    input: {
        flex: 1,
        padding: 20,
        fontSize: 15,
        // width: 250,
        backgroundColor: '#fff',
        borderRadius: 16,
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    addWrapper: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    addText: {
        fontSize: 25
    },
});