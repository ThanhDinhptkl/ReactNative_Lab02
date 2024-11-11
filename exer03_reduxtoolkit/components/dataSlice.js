import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const linkMockAPI = 'https://671f2dbee7a5792f052d36c5.mockapi.io/listTask'

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get(linkMockAPI);
  return response.data;
});

// Tạo dữ liệu mới
export const createData = createAsyncThunk('data/createData', async (newItem) => {
  const response = await axios.post(linkMockAPI, newItem);
  return response.data;
});

// Cập nhật dữ liệu
export const updateData = createAsyncThunk('data/updateData', async (updatedItem) => {
  const response = await axios.put(`https://671f2dbee7a5792f052d36c5.mockapi.io/listTask/${updatedItem.id}`, updatedItem);
  return response.data;
});

// Xóa dữ liệu
export const deleteData = createAsyncThunk('data/deleteData', async (id) => {
  await axios.delete(`https://671f2dbee7a5792f052d36c5.mockapi.io/listTask/${id}`);
  return id; // trả về id để xóa item khỏi state
});

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => { state.loading = true; })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state) => { state.loading = false; })
      .addCase(createData.fulfilled, (state, action) => {
        state.items.push(action.payload); // Thêm item mới vào state
      })
      .addCase(updateData.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload; // Cập nhật item
        }
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload); // Xóa item
      });
  }
});

export const { reducer: dataReducer } = dataSlice;
