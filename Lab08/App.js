import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  CheckBox,
} from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  const [name, setName] = useState("");
  const [screen, setScreen] = useState("Screen01");
  const [newJob, setNewJob] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [editingJobKey, setEditingJobKey] = useState(null); // Trạng thái để xác định có đang chỉnh sửa công việc nào không
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.jobs); // Sử dụng Redux selector để lấy danh sách công việc từ store

  const handleGetStarted = () => {
    if (name.trim()) {
      setScreen("Screen02");
    } else {
      alert("Please enter your name!");
    }
  };

  const handleBackToScreen01 = () => {
    setScreen("Screen01");
  };

  const handleBackToScreen02 = () => {
    setScreen("Screen02");
  };

  const handleGoToScreen3 = () => {
    setNewJob(""); // Reset lại input khi thêm công việc mới
    setEditingJobKey(null); 
    setScreen("Screen03");
  };

  const handleEditJob = (key, title) => {
    setNewJob(title); 
    setEditingJobKey(key); 
    setScreen("Screen03");
  };

  const handleCheck = (key) => {
    dispatch({ type: "TOGGLE_CHECK", payload: key }); // Gửi action toggle trạng thái checked
  };

  const handleFinish = () => {
    if (newJob.trim()) {
      if (editingJobKey) {
        dispatch({ type: "EDIT_JOB", payload: { key: editingJobKey, title: newJob } });
      } else {
        dispatch({ type: "ADD_JOB", payload: newJob });
      }
      setNewJob("");
      setScreen("Screen02");
    } else {
      alert("Please enter a job!");
    }
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.inputContainer2}>
      <CheckBox
        value={item.checked}
        onValueChange={() => handleCheck(item.key)}
      />
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity onPress={() => handleEditJob(item.key, item.title)}>
        <Image source={item.image} style={styles.itemImage} />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      {screen === "Screen01" ? (
        <View style={styles.container}>
          <Image source={require("./data/Image95.png")} style={styles.hinhAnh} />
          <Text style={styles.inDam}>MANAGE YOUR</Text>
          <Text style={styles.inDam1}>TASK</Text>
          <View style={styles.inputContainer}>
            <Image source={require("./icon/mail.png")} />
            <TextInput
              style={styles.txtField}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.styleButton}>
            <TouchableOpacity style={styles.customButton} onPress={handleGetStarted}>
              <Text style={styles.buttonText}>GET STARTED</Text>
              <Image source={require("./icon/arrow-right.png")} />
            </TouchableOpacity>
          </View>
        </View>
      ) : screen === "Screen02" ? (
        <>
          <View style={styles.screen2}>
            <View style={styles.screen2P1}>
              <TouchableOpacity onPress={handleBackToScreen01}>
                <Image source={require("./data/IconButton12.png")} />
              </TouchableOpacity>
              <Image source={require("./data/Avatar31.png")} style={styles.avata} />
              <View style={styles.textContainer}>
                <Text style={styles.greeting}>Hi, {name}!</Text>
                <Text style={styles.subText}>Have a great day ahead!</Text>
              </View>
            </View>
            <View style={styles.inputContainer1}>
              <Image source={require("./icon/search.png")} />
              <TextInput
                style={styles.txtField}
                placeholder="Search"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </View>
          </View>
          <View style={styles.screen2P2}>
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
              contentContainerStyle={styles.listContainer}
            />
          </View>
          <View style={styles.screen2P3}>
            <TouchableOpacity style={styles.addButton} onPress={handleGoToScreen3}>
              <View style={styles.addButtonContainer}>
                <Image source={require("./icon/add.png")} style={styles.addIcon} />
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.screen3}>
          <View style={styles.screen2P1}>
            <Image source={require("./data/Avatar31.png")} style={styles.avata} />
            <View style={styles.textContainer}>
              <Text style={styles.greeting}>Hi, {name}!</Text>
              <Text style={styles.subText}>Have a great day ahead!</Text>
            </View>
            <TouchableOpacity onPress={handleBackToScreen01}>
              <Image source={require("./data/IconButton12.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.inDam3}>
              {editingJobKey ? "EDIT YOUR JOB" : "ADD YOUR JOB"}
            </Text>
          </View>
          <View style={styles.inputContainer3}>
            <Image source={require("./data/fxemoji_note.png")} />
            <TextInput
              style={styles.txtField}
              placeholder="Input your job"
              value={newJob}
              onChangeText={setNewJob}
            />
          </View>
          <View style={styles.styleButton}>
            <TouchableOpacity style={styles.customButton1} onPress={handleFinish}>
              <Text style={styles.buttonText}>FINISH</Text>
              <Image source={require("./icon/arrow-right.png")} />
            </TouchableOpacity>
          </View>
          <Image source={require("./data/Image95.png")} style={styles.container1} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    backgroundColor: "white",
  },
  container1: {
    top: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  hinhAnh: {
    width: 180,
    height: 180,
  },
  inDam: {
    fontWeight: "bold",
    color: "#C4C",
    fontSize: 18,
    marginTop: 20,
  },
  inDam1: {
    fontWeight: "bold",
    color: "#C4C",
    fontSize: 18,
    marginTop: 10,
  },
  inDam3: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 30,
    width: "80%",
    height: 35,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  txtField: {
    flex: 1,
    paddingLeft: 10,
    color: "gray",
  },
  styleButton: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  customButton: {
    backgroundColor: "#00BDD6",
    borderRadius: 20,
    width: "130%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  customButton1: {
    backgroundColor: "#00BDD6",
    borderRadius: 20,
    width: "40%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  greeting: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  subText: {
    fontSize: 13,
    color: "#666",
    marginTop: 5,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  screen2: {
    flex: 1,
  },
  screen3: {
    flex: 1,
  },
  screen2P1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 8,
    backgroundColor: "white",
  },
  screen2P2: {
    flex: 2,
  },
  screen2P3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  avata: {
    left: 25,
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", 
    borderWidth: 0.5,
    borderRadius: 5,
    width: "80%",
    height: 35,
    paddingHorizontal: 15,
    marginTop: 20,
    alignSelf: "center", 
  },
  inputContainer2: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between", 
    borderWidth: 0.5,
    borderRadius: 5,
    width: 270, 
    height: 30, 
    paddingHorizontal: 15,
    marginTop: 7, 
    alignSelf: "center", 
  },
  inputContainer3: {
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between", 
    borderWidth: 0.5,
    borderRadius: 5,
    width: 270, 
    height: 30, 
    paddingHorizontal: 15,
    marginTop: 7, 
    alignSelf: "center", // Căn giữa ô data theo trục ngang
    top: 20,
  },
  itemText: {
    flex: 1,
    textAlign: "left",
    marginRight: 10, 
  },
  itemImage: {
    width: 20, 
    height: 20,
  },
  listContainer: {
    paddingBottom: 10,
    alignItems: "center",
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  addIcon: {
    width: 30,
    height: 30,
  },
});

