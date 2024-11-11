import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createData, updateData } from './dataSlice';

const DataForm = ({ selectedItem, setSelectedItem }) => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedItem) {
      setContent(selectedItem.content); 
    }
  }, [selectedItem]);

  const handleSubmit = () => {
    if (selectedItem) {
      dispatch(updateData({ ...selectedItem, content })); 
    } else {
      dispatch(createData({ content })); 
    }
    setContent('');
    setSelectedItem(null); 
  };

  return (
    <View>
      <TextInput
        placeholder="Enter name"
        value={content}
        onChangeText={setContent}
        style = {{padding: 20}}
      />
      <Button title={selectedItem ? "Update" : "Create"} onPress={handleSubmit} />
    </View>
  );
};

export default DataForm;
