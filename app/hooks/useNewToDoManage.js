import React from "react";
import useAsyncStorageCRUD from "./useAsyncStorageCRUD";

export default function useNewToDoManage() {
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");

  const {toDoCreate} = useAsyncStorageCRUD();

    const fieldsTab = [
        {   value: title,
            onChange: (e) => setTitle(e),
            placeholder: "Name of the to-do"},
        {   value: description,
            onChange: (e) => setDescription(e),
            placeholder: "Description"}
    ]

  async function handleSubmit(){
        if (title.length === 0 ){
            return alert("The title is empty");
        }
       await toDoCreate({title, description });
        setTitle("");
        setDescription("");
    }

    return {fieldsTab, handleSubmit};
}