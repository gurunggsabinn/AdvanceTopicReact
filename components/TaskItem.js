import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskItem = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (title.trim() !== '') {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 15}}
        placeholder="Enter task title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Button
        title="Add Task" 
        onPress={handleAddTask}
        disabled={title.trim() === ''}
      />
    </View>
  );
};

export default TaskItem;