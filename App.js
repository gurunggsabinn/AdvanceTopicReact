import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import store from './redux/store';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <TaskList />
        <TaskItem />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
  },
});
