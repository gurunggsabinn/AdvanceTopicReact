import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskStatus, deleteTask } from '../redux/actions';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install this package

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <TouchableOpacity onPress={() => dispatch(toggleTaskStatus(item.id))} style={{ flex: 1 }}>
        <View style={{ backgroundColor: getStatusColor(item.status), padding: 10, borderRadius: 5 }}>
          <Text>{item.title}</Text>
          <Text>Status: {item.status ? 'Done' : 'Due'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(deleteTask(item.id))} style={{ marginLeft: 10 }}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  const getStatusColor = (status) => {
    return status ? 'lightgreen' : 'lightyellow';
  };

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;