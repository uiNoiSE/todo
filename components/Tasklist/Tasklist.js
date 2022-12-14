import React, { useState, useEffect } from "react";
import { View, Text, Pressable, FlatList } from "react-native";

import CustomModal from "../CustomModal";
import CheckBox from "../Checkbox";

import { cache, currentUser } from "../../store";

import { TasklistStyles as TLS } from "./TasklistStyles";
import { mainStyles as MS } from "../../assets/styles/mainStyles";
import AddTaskButton from "../../assets/svg/addTaskButton";

export default function Tasklist() {
  const [userEmail, setUserEmail] = useState();
  const [todos, setTodos] = useState([]);

  const toggleCheckbox = (itemID) => {
    const updatedTask = todos.map((task) => {
      if (itemID === task.id) {
        task.checked = !task.checked;
      }
      return task;
    });

    setTodos(() => updatedTask);
  };

  const [newTodo, setNewTodo] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => {
    return <CheckBox onPress={toggleCheckbox} item={item} />;
  };

  const getData = async () => {
    try {
      const res = await currentUser.get("currently logged");
      const parsedRes = JSON.parse(res);
      const userData = await cache.get(parsedRes.email);
      const parsedUserData = JSON.parse(userData);
      if (res && userData) {
        setUserEmail(parsedRes.email);
        setTodos(parsedUserData.todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateSyncedTodo = async () => {
    try {
      const userData = await cache.get(userEmail);
      const parsedUserData = JSON.parse(userData);

      if (parsedUserData) {
        const resSynced = { ...parsedUserData, todos };
        await cache.set(userEmail, JSON.stringify(resSynced));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (userEmail) {
      updateSyncedTodo();
    }
  }, [todos]);

  return (
    <View style={TLS.wrapper}>
      <CustomModal
        setTodos={setTodos}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <View style={TLS.listHeader}>
        <Text style={MS.heading}>Daily Tasks</Text>
        <Pressable hitSlop={18} onPress={() => setModalVisible(true)}>
          <AddTaskButton />
        </Pressable>
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
