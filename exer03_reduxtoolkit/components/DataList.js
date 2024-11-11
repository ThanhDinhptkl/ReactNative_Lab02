import React, { useEffect, useState} from 'react';
import { FlatList, Text, ActivityIndicator, Button, View , ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './dataSlice';
import DataForm from './DataForm';

export default function DataList() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.data);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteData(id));
  };

  if (loading) return <ActivityIndicator />;

  return (
    <ScrollView>
      <View>
        <DataForm selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style = {{marginTop: 20}}>
              <Text style = {{padding: 20}}>{item.content}</Text>
              <Button title="Edit" onPress={() => setSelectedItem(item)} />
              <Button title="Delete" onPress={() => handleDelete(item.id)} />
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
