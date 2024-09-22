import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 141800;

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = quantity * pricePerItem;

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "start",
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("./image/book.png")}
          style={{ width: 140, height: 167 }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Cung cấp bởi Tiki Trading
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#EE0D0D" }}>
            {pricePerItem.toLocaleString()} đ
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: "#808080",
              textDecorationLine: "line-through",
              marginBottom: 10,
            }}
          >
            {pricePerItem.toLocaleString()} đ
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={decrementQuantity}
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#F5F5F5",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 5,
              }}
            >
              <Text
                style={{ fontSize: 20, color: "#808080", fontWeight: "bold" }}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 10, fontSize: 16 }}>
              {quantity}
            </Text>
            <TouchableOpacity
              onPress={incrementQuantity}
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#F5F5F5",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ fontSize: 20, color: "#808080", fontWeight: "bold" }}
              >
                +
              </Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, color: "blue" }}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold" }}>Mã giảm giá đã lưu</Text>
          <Text style={{ color: "blue" }}>Xem tại đây</Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#000",
              paddingHorizontal: 10,
              paddingVertical: 5,
              width: 220,
            }}
          >
            <Image
              source={require("./image/yellow_block.png")}
              style={{ width: 30, height: 20, marginRight: 5 }}
            />
            <Text>Mã giảm giá</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#0A5EB7",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 7,
              paddingHorizontal: 20,
              marginLeft: 20,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: "#C4C4C4",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 15 }}>
            Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            <Text style={{ color: "blue" }}> Nhập tại đây</Text>
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          padding: 20,
          backgroundColor: "#C4C4C4",
          width: "100%",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>Tạm tính</Text>
          <Text style={{ fontSize: 18, color: "red" }}>
            {totalPrice.toLocaleString()} đ
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 10,
          backgroundColor: "#C4C4C4",
          width: "100%",
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          padding: 20,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Thành tiền</Text>
        <Text style={{ marginLeft: "auto", fontSize: 18, color: "red" }}>
          {totalPrice.toLocaleString()} đ
        </Text>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: 20,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            paddingVertical: 15,
            paddingHorizontal: 100,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            TIẾN HÀNH ĐẶT HÀNG
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
