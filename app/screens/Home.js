import React from "react";
import { StyleSheet, Text, ScrollView } from 'react-native';
import Button from "@components/UI/Button";
import Title from "@components/UI/Title";
import useAsyncStorageCRUD from "@hooks/useAsyncStorageCRUD";
import ToDoCard from "@components/ToDoCard";


export default function Home({navigation}){
    const {toDoList,toDoUpdate, toDoDelete} = useAsyncStorageCRUD();
    const handlePress = () => {
        navigation.navigate("ToDoCreate");
    }
    return  (
        <ScrollView contentContainerStyle={styles.container}>
            <Title>My to-do App</Title>
            {toDoList.map(({title, description, checked}, index)=>{
                function handleDelete(index){
                    toDoDelete(index);
                }
                function handleCheckedChange(){
                    toDoUpdate(index, {title, description, checked: !checked})
                }
                return (
                    <ToDoCard key={index}
                              title={title}
                              description={description}
                              handleDelete={handleDelete}
                              checked={checked}
                              handleCheckedChange={handleCheckedChange}
                    />
                )
                })}
            <Text>Hello word !</Text>
            <Button onPress={handlePress} > add to-do</Button>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
    },
});
