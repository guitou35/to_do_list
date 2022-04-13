import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Title({children}){
    return  (
            <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "600",
        marginBottom: 42,
        fontSize: 32,
    }
});
