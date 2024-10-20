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

export default function App() {
  const [name, setName] = useState(""); // Lưu tên người dùng
  const [screen, setScreen] = useState("Screen01"); // Quản lý màn hình hiện tại
  const [newJob, setNewJob] = useState(""); // Trạng thái để lưu công việc mới ở Screen3
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái cho ô tìm kiếm
  const [editingJobKey, setEditingJobKey] = useState(null); // Trạng thái để xác định có đang chỉnh sửa công việc nào không
  const [data, setData] = useState([
    // Dữ liệu gốc
    {
      key: "1",
      title: "To check email",
      image: require("./data/iconamoon_edit-bold.png"),
      checked: true,
    },
    {
      key: "2",
      title: "UI task web page",
      image: require("./data/iconamoon_edit-bold.png"),
      checked: true,
    },
    {
      key: "3",
      title: "Learn javascript basic",
      image: require("./data/iconamoon_edit-bold.png"),
      checked: true,
    },
    {
      key: "4",
      title: "Learn HTML advance",
      image: require("./data/iconamoon_edit-bold.png"),
      checked: true,
    },
    {
      key: "5",
      title: "Medical App UI",
      image: require("./data/iconamoon_edit-bold.png"),
      checked: true,
    },
    {
      key: "6",
      title: "Learn Java",
      image: require("./data/iconamoon_edit-bold.png"),
      checked: true,
    },
  ]);

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
    setEditingJobKey(null); // Đặt trạng thái chỉnh sửa về null khi thêm mới
    setScreen("Screen03");
  };

  // Hàm chuyển sang màn hình 3 để chỉnh sửa công việc (Screen03)
  const handleEditJob = (key, title) => {
    setNewJob(title); // Gán tiêu đề công việc vào input
    setEditingJobKey(key); // Gán key công việc cần chỉnh sửa
    setScreen("Screen03"); // Chuyển sang màn hình 3
  };

  // Hàm để xử lý việc thay đổi trạng thái checkbox
  const handleCheck = (key) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, checked: !item.checked }; // Đổi trạng thái checked
      }
      return item;
    });
    setData(newData); // Cập nhật dữ liệu
  };

  // Hàm để lọc dữ liệu dựa trên nội dung tìm kiếm
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hàm để render từng mục trong danh sách công việc
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

  // // Hàm xử lý khi nhấn nút "Finish"
  // const handleFinish = () => {
  //   if (newJob.trim()) {
  //     const newKey = (data.length + 1).toString(); // Tạo key mới cho công việc
  //     const newItem = { key: newKey, title: newJob, image: require("./data/iconamoon_edit-bold.png"), checked: false };
  //     setData([...data, newItem]); // Thêm công việc mới vào danh sách
  //     setNewJob(''); // Xóa nội dung đã nhập sau khi thêm
  //     setScreen('Screen02'); // Quay lại Screen02
  //   } else {
  //     alert('Please enter a job!');
  //   }
  // };

  // Hàm xử lý khi nhấn nút "Finish" để thêm hoặc chỉnh sửa công việc
  const handleFinish = () => {
    if (newJob.trim()) {
      if (editingJobKey) {
        // Nếu đang chỉnh sửa công việc
        const updatedData = data.map((item) => {
          if (item.key === editingJobKey) {
            return { ...item, title: newJob }; // Cập nhật tiêu đề công việc
          }
          return item;
        });
        setData(updatedData); // Cập nhật lại danh sách công việc
      } else {
        // Nếu thêm công việc mới
        const newKey = (data.length + 1).toString(); // Tạo key mới cho công việc
        const newItem = {
          key: newKey,
          title: newJob,
          image: require("./data/iconamoon_edit-bold.png"),
          checked: false,
        };
        setData([...data, newItem]); // Thêm công việc mới vào danh sách
      }
      setNewJob(""); // Xóa nội dung đã nhập sau khi thêm hoặc chỉnh sửa
      setScreen("Screen02"); // Quay lại màn hình danh sách công việc
    } else {
      alert("Please enter a job!"); // Hiển thị cảnh báo nếu chưa nhập công việc
    }
  };

  return (
    <>
      {screen === "Screen01" ? (
        <View style={styles.container}>
          <Image
            source={require("./data/Image95.png")}
            style={styles.hinhAnh}
          />
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
            <TouchableOpacity
              style={styles.customButton}
              onPress={handleGetStarted}
            >
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
              <Image
                source={require("./data/Avatar31.png")}
                style={styles.avata}
              />
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
                onChangeText={setSearchTerm} // Cập nhật nội dung tìm kiếm
              />
            </View>
          </View>
          <View style={styles.screen2P2}>
            {/* Hiển thị danh sách dữ liệu bằng FlatList */}
            <FlatList
              data={filteredData} // Sử dụng dữ liệu đã lọc
              renderItem={renderItem}
              keyExtractor={(item) => item.key}
              contentContainerStyle={styles.listContainer}
            />
          </View>
          <View style={styles.screen2P3}>
            {/* Thêm TouchableOpacity cho biểu tượng cộng */}
            <TouchableOpacity
              style={styles.addButton}
              onPress={handleGoToScreen3}
            >
              <View style={styles.addButtonContainer}>
                <Image
                  source={require("./icon/add.png")}
                  style={styles.addIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        // Màn hình 3
        <View style={styles.screen3}>
          <View style={styles.screen2P1}>
            <Image
              source={require("./data/Avatar31.png")}
              style={styles.avata}
            />
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
              onChangeText={setNewJob} // Cập nhật nội dung công việc mới
            />
          </View>
          <View style={styles.styleButton}>
            <TouchableOpacity
              style={styles.customButton1}
              onPress={handleFinish}
            >
              <Text style={styles.buttonText}>FINISH</Text>
              <Image source={require("./icon/arrow-right.png")} />
            </TouchableOpacity>
          </View>
          <Image
            source={require("./data/Image95.png")}
            style={styles.container1}
          />
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
    alignSelf: "center", // Căn giữa ô data theo trục ngang
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
    justifyContent: "center", // Căn giữa icon add
  },
  avata: {
    left: 25,
  },
  inputContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Đặt các nội dung trong khung ở giữa
    borderWidth: 0.5,
    borderRadius: 5,
    width: "80%",
    height: 35,
    paddingHorizontal: 15,
    marginTop: 20,
    alignSelf: "center", // Căn giữa chính ô input theo trục ngang
  },
  inputContainer2: {
    flexDirection: "row", // Sắp xếp theo hàng
    alignItems: "center",
    justifyContent: "space-between", // Giữ khoảng cách hợp lý giữa title và hình ảnh
    borderWidth: 0.5,
    borderRadius: 5,
    width: 270, // Điều chỉnh kích thước của ô
    height: 30, // Đặt chiều cao cố định
    paddingHorizontal: 15,
    marginTop: 7, // Giảm khoảng cách giữa các ô data
    alignSelf: "center", // Căn giữa ô data theo trục ngang
  },
  inputContainer3: {
    flexDirection: "row", // Sắp xếp theo hàng
    alignItems: "center",
    justifyContent: "space-between", // Giữ khoảng cách hợp lý giữa title và hình ảnh
    borderWidth: 0.5,
    borderRadius: 5,
    width: 270, // Điều chỉnh kích thước của ô
    height: 30, // Đặt chiều cao cố định
    paddingHorizontal: 15,
    marginTop: 7, // Giảm khoảng cách giữa các ô data
    alignSelf: "center", // Căn giữa ô data theo trục ngang
    top: 20,
  },
  itemText: {
    flex: 1,
    textAlign: "left", // Căn title về phía bên trái
    marginRight: 10, // Thêm khoảng cách giữa title và icon
  },
  itemImage: {
    width: 20, // Điều chỉnh kích thước hình ảnh
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
    backgroundColor: "lightblue", // Màu khung tròn
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
