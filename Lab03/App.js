import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image source={require("./image/vs_blue.png")} />
      </View>
      <View style={styles.noiDungContainer}>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.starContainer}>
          <Image source={require("./image/star.png")} />
          <Image source={require("./image/star.png")} />
          <Image source={require("./image/star.png")} />
          <Image source={require("./image/star.png")} />
          <Image source={require("./image/star.png")} />
          <Text style={styles.danhGiaContainer}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.cungHangContainer}>
          <Text style={styles.giaContainer}>1.790.000 đ</Text>
          <Text style={styles.gachNgangContainer}>1.790.000 đ</Text>
        </View>
        <View style={styles.hoiContainer}>
          <Text style={styles.hoanTienContainer}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <View style={styles.circle}>
            <Text style={styles.questionMark}>?</Text>
          </View>
        </View>
        <View>
          <View style={styles.chonMau}>
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={[
                  styles.customButtonWhite,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                  },
                ]}
                onPress={() => {}}
              >
                <Text style={styles.customButtonTextBlack}>4 MÀU-CHỌN MÀU</Text>
                <Text style={styles.customButtonTextBlack2}>{">"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonMua}>
              <TouchableOpacity style={styles.customButton} onPress={() => {}}>
                <Text style={styles.customButtonText}>CHỌN MUA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  noiDungContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  starContainer: {
    right: 22,
    top: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-between",
  },
  cungHangContainer: {
    top: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-between",
  },
  danhGiaContainer: {
    left: 30,
  },
  giaContainer: {
    top: 15,
    fontWeight: "bold",
    flexDirection: "row",
    right: 55,
  },
  gachNgangContainer: {
    top: 15,
    textDecorationLine: "line-through",
    marginRight: 5,
    left: 10,
  },
  hoiContainer: {
    right: 38,
    top: 45,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  hoanTienContainer: {
    color: "red",
    fontWeight: "bold",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    left: 5,
  },
  questionMark: {
    fontWeight: "bold",
  },
  chonMau: {
    top: 50,
    height: 40,
    alignItems: "center",
  },
  buttonWrapper: {
    top: 100,
    width: 300,
  },
  buttonMua: {
    top: 180,
    width: 300,
  },
  customButton: {
    backgroundColor: "red",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  customButtonWhite: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  customButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  customButtonTextBlack: {
    left: 70,
    color: "black",
    fontWeight: "bold",
  },
  customButtonTextBlack2: {
    color: "black",
    fontWeight: "bold",
  },
});
