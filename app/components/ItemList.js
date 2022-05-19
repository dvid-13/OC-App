import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ModalAlert } from "../components/ModalAlert";
import { getData, deleteData } from "../api";
import { Item } from "./Item";
import { ItemData } from "../components/ItemData";
import { styles } from "../styles/Styles";
import { normalize } from "../styles/FontSize";
import { color } from "../styles/Colors";

const ItemList = ({ itemsOC }) => {
  const navigation = useNavigation();
  const [datalist, setDatalist] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [nameOC, setNameOC] = useState("");
  const [emptyList, setEmptyList] = useState(false);
  const isFocused = useIsFocused();

  async function getOCData(id) {
    try {
      const res = await getData(id);
      setDatalist(res);
      !res.length ? setEmptyList(true) : setEmptyList(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteOCData(id) {
    await deleteData(id);
  }

  const renderOC = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#012a4b" : color.blue_800;
    const colortext = item.id === selectedId ? "white" : "#626262";
    return (
      <Item
        item={item}
        backgroundColor={{ backgroundColor }}
        onPress={() => {
          setSelectedId(item.id);
          navigation.navigate("HomeScreen", {
            itemid: item.id,
            loaddata: false,
          });
        }}
        onLongPress={() => {
          setSelectedId(item.id);
          getOCData(item.id);
          setNameOC(item.name + " - " + item.company);
          setModalVisible(true);
        }}
        onPressIcon={() => {
          navigation.navigate("FormScreen", {
            itemid: item.id,
            title: item.name + " - " + item.company,
          });
        }}
      />
    );
  };

  const renderData = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? "#613572" : color.purple_300;
    const colortext = item.id === selectedId ? "white" : "#626262";
    return (
      <ItemData
        item={item}
        onPress={() => {
          console.log(item.cost);
        }}
        onPressIcon={() => {
          deleteOCData(item.id);
          setTimeout(() => {
            getOCData(selectedId);
          }, 100);
        }}
      />
    );
  };

  useEffect(() => {}, [isFocused]);

  return (
    <View style={styles.simpleBG}>
      <FlatList
        data={itemsOC}
        renderItem={renderOC}
        keyExtractor={(item) => item.id.toString()}
      />
      <ModalAlert modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={styles.modalBG}
        >
          <View style={styles.modalData}>
            <Text
              style={[
                styles.text,
                { fontSize: normalize(20), marginBottom: 15 },
              ]}
            >
              {nameOC}
            </Text>

            <FlatList
              data={datalist}
              renderItem={renderData}
              keyExtractor={(item) => item.id.toString()}
            />
            {emptyList && (
              <Text
                style={[
                  styles.text,
                  { fontSize: normalize(18), marginTop: 50 },
                ]}
              >
                Ningún dato que mostrar
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </ModalAlert>
    </View>
  );
};
export default ItemList;
