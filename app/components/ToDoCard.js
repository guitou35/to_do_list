import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";

export default function ToDoCard({title, description, handleDelete, checked, handleCheckedChange}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkbox} onPress={handleCheckedChange}>
                {checked && <Ionicons name="checkmark" color="black" size={32}/>}
            </TouchableOpacity>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description === "" ? "No description" : description}</Text>
                <TouchableOpacity onPress={handleDelete}>
                    <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(60, 60, 67, 0.6);",
        width: "100%",
        paddingBottom: 16,
        marginBottom: 16
    },
    checkbox: {
        width: 40,
        height: 40,
        marginRight: 12,
        borderWidth: 1,
        borderColor: "rgba(60, 60, 67, 0.6);",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center"
    },
    title : {
        marginBottom: 4,
        fontSize: 18,
        fontWeight: "600"
    },
    description : {
        fontSize: 16,
        color: "rgba(60, 60, 67, 0.6)",
        marginBottom: 8,
    },
    deleteText : {
        color: "rgba(0, 122, 255, 1)",
        fontSize: 15,
        fontWeight: "600"
    }
});
