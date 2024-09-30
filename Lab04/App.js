import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { Image } from "react-native";

function ScreenChat({ navigation }) {}
export default function App() {
  const data = [
    {
      key: "3",
      image: require("./image/ca_nau_lau.png"),
      title: "Ca nấu lẫu, nấu lẫu mini ...\nShop Devang",
    },
    {
      key: "4",
      image: require("./image/ga_bo_toi.png"),
      title: "1KG KHÔ GÀ BƠ TỎI\nShop LTD Food",
    },
    {
      key: "5",
      image: require("./image/xa_can_cau.png"),
      title: "Xe cần cẩu đa năng\nShop thế giới đồ chơi",
    },
    {
      key: "6",
      image: require("./image/do_choi_dang_mo_hinh.png"),
      title: "Đồ chơi dạng mô hình\nShop thế giới đồ chơi",
    },
    {
      key: "7",
      image: require("./image/lanh_dao_gian_don.png"),
      title: "Lãnh đạo giản đơn\nShop Minh Long Book",
    },
    {
      key: "8",
      image: require("./image/hieu_long_con_tre.png"),
      title: "Hiểu lòng con trẻ\nShop Minh Long Book",
    },
    // {
    //   key: "9",
    //   image: require("./image/trump_1.png"),
    //   title: "Trump 1\nShop Minh Long Book",
    // },
  ];

  const renderItem = ({ item }) => {
    const titleParts = item.title.split("\n");
    return (
      <View style={styles.itemContainer}>
        {item.image && <Image source={item.image} style={styles.itemImage} />}
        <View style={styles.itemTextContainer}>
          <View style={styles.textAndButtonContainer}>
            <Text>{titleParts[0]}</Text>
            <Button
              title="CHAT"
              onPress={() => alert(`Qua trang ${titleParts[1]}`)}
              // onPress={() => navigation.navigate("ScreenChat")}
              color={"#F31111"}
            />
          </View>
          <Text style={styles.shopText}>{titleParts[1]}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require("./image/tenTrai.png")} style={styles.icon} />
        <Text>Chat</Text>
        <Image
          source={require("./image/bi_cart-check.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.container2}>
        <Text>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại</Text>
        <Text>chat với shop!</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.container15}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  container2: {
    backgroundColor: "#FFAA",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  container15: {
    backgroundColor: "#1BA9",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  itemContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemTextContainer: {
    flex: 1,
  },
  textAndButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shopText: {
    color: "#7D5B5B",
  },
  button: {
    color: "#F31111",
  },
});
