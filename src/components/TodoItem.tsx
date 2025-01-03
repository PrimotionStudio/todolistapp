import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const TodoItem = ({ text }: { text: string; }) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.roundedSquare} />
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circle} />
        </View>
    );
};

export default TodoItem;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    itemLeft: {
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    itemText: {
        maxWidth: '80%'
    },
    roundedSquare: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5
    }
});