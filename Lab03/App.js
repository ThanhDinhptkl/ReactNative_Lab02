import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
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
                onPress={() => navigation.navigate("Screen2")}
              >
                <Text style={styles.customButtonTextBlack}>4 MÀU-CHỌN MÀU</Text>
                <Text style={styles.customButtonTextBlack2}>{">"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonMua}>
              <TouchableOpacity style={styles.customButton}>
                <Text style={styles.customButtonText}>CHỌN MUA</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

function Screen2({ navigation }) {
  return (
    <>
      <View style={styles.screen2}>
        <Image
          source={require("./image/vs_blue.png")}
          style={styles.screen2Image}
        />
        <View style={styles.screen2Text}>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
        </View>
      </View>
      <View style={styles.screenNoiDung}>
        <View>
          <Text style={styles.screen2Text1}>Chọn một màu bên dưới:</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.squareButton}></TouchableOpacity>
          <TouchableOpacity style={styles.squareButton1}></TouchableOpacity>
          <TouchableOpacity style={styles.squareButton2}></TouchableOpacity>
          <TouchableOpacity style={styles.squareButton3}></TouchableOpacity>
        </View>
        <View style={styles.buttonXong}>
          <TouchableOpacity
            style={styles.customButton1}
            onPress={() => navigation.navigate("Screen3")}
          >
            <Text style={styles.customButtonText}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function Screen3({ navigation }) {
  return (
    <>
      <View style={styles.screen2}>
        <Image
          source={require("./image/vs_red_a1.png")}
          style={styles.screen2Image}
        />
        <View style={styles.screen2Text}>
          <Text>Điện Thoại Vsmart Joy 3</Text>
          <Text>Hàng chính hãng</Text>
          <Text>
            Màu: <Text style={styles.inDam}>đỏ</Text>
          </Text>
          <Text>
            Cung cấp bởi <Text style={styles.inDam}>Tiki Tradding</Text>
          </Text>
          <Text style={styles.inDam}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={styles.screenNoiDung}>
        <View>
          <Text style={styles.screen2Text1}>Chọn một màu bên dưới:</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.squareButton}></TouchableOpacity>
          <TouchableOpacity style={styles.squareButton1}></TouchableOpacity>
          <TouchableOpacity style={styles.squareButton2}></TouchableOpacity>
          <TouchableOpacity style={styles.squareButton3}></TouchableOpacity>
        </View>
        <View style={styles.buttonXong}>
          <TouchableOpacity style={styles.customButton1}>
            <Text style={styles.customButtonText}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
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
  screen2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "start",
  },
  screen2Image: {
    width: 112,
    height: 132,
  },
  screen2Text: {
    left: 26,
    top: 17,
  },
  screenNoiDung: {
    flex: 5,
    backgroundColor: "#C4C4C4",
  },
  screen2Text1: {
    left: 26,
    top: 17,
    fontSize: 20,
  },
  squareButton: {
    backgroundColor: "#C5F1FB",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: 50,
    left: 150,
  },
  squareButton1: {
    backgroundColor: "#F30D0D",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: 80,
    left: 150,
  },
  squareButton2: {
    backgroundColor: "#000000",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: 110,
    left: 150,
  },
  squareButton3: {
    backgroundColor: "#234896",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    top: 140,
    left: 150,
  },
  buttonXong: {
    top: 180,
    width: 300,
    left: 52,
  },
  customButton1: {
    backgroundColor: "#234896",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  inDam: {
    fontWeight: "bold",
  },
});
