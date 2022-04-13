import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import Button from "@components/UI/Button";
import Input from "@components/UI/Input";
import Title from "@components/UI/Title";


import useNewToDoManage from "@hooks/useNewToDoManage";

export default function ToDoCreate({navigation}){

  const {fieldsTab, handleSubmit} = useNewToDoManage();

  const handlePress = () => {
        navigation.navigate("Home");
    }
    return  (
        <View style={styles.container}>
            <Title> Add a new task</Title>
            {fieldsTab.map(({value, onChange, placeholder}) => {
                return <Input key={placeholder} placeholder={placeholder} value={value} onChange={onChange} />
            })}
            <Button onPress={handleSubmit}>To-Do Add </Button>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f3e9',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
});
