import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Layout from "../components/Layout";
import { LineTitle } from "../components/LineTitle";
import { ModalAlert } from "../components/ModalAlert";
import FrameOc from "../components/FrameOc";
import ItemList from "../components/ItemList";
import { styles } from "../styles/Styles";
import { normalize } from "../styles/FontSize";
import { getCount, getActive, getAll, updateState, sendReport } from "../api";

const Homescreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const [countLists, setCountLists] = useState({
    active: "",
    all: "",
  });
  const [namelist, setNamelist] = useState("");
  const [itemslist, setItemslist] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [responseText, setResponseText] = useState("");

  async function getOCcount() {
    const res = await getCount();
    setCountLists(res);
  }

  async function getOCactive() {
    const res = await getActive();
    setItemslist(res);
    setNamelist("Órdenes Activas");
  }

  async function getOcall() {
    const res = await getAll();
    setItemslist(res);
    setNamelist("Todas las Órdenes");
  }

  async function updateOC() {
    const res = await updateState(route.params.itemid);
    setModalVisible(true);
    res == 1
      ? setResponseText("Se actualizó la orden")
      : setResponseText("No se actualizó la orden");
    getOCcount();
    namelist.includes("Activas") ? getOCactive() : getOcall();
    setTimeout(() => {
      setModalVisible(false);
    }, 1300);
  }

  async function sendOCReport() {
    console.log(route.params.itemid);
    const res = await sendReport(route.params.itemid);
    setModalVisible(true);
    res
      ? setResponseText("Sen envió el reporte por Correo")
      : setResponseText("No se envió el reporte");
    setTimeout(() => {
      setModalVisible(false);
    }, 1300);
  }

  useEffect(() => {
    getOCcount();
  }, [isFocused]);

  return (
    <Layout>
      <ModalAlert modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(false);
          }}
          style={styles.modalBG}
        >
          <View style={styles.modalAlert}>
            <Text style={[styles.text, { fontSize: normalize(20) }]}>
              {responseText}
            </Text>
          </View>
        </TouchableOpacity>
      </ModalAlert>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FormScreen")}
      >
        <Text style={[styles.text, { fontSize: normalize(20) }]}>Nueva OC</Text>
      </TouchableOpacity>
      <View style={styles.row}>
        <FrameOc
          onPress={() => getOCactive()}
          text1={"Órdenes"}
          text2={"Activas"}
          num={countLists.active}
        />
        <FrameOc
          onPress={() => getOcall()}
          text1={"Total de"}
          text2={"Órdenes"}
          num={countLists.all}
        />
      </View>
      <LineTitle>
        <Text style={[styles.text, { fontSize: normalize(18) }]}>
          {namelist}
        </Text>
      </LineTitle>
      <View style={styles.containerItems}>
        <ItemList itemsOC={itemslist} />
      </View>
      {route.params ? (
        <View style={styles.row}>
          <TouchableOpacity style={styles.button1} onPress={() => updateOC()}>
            <Text style={[styles.text, { fontSize: normalize(20) }]}>
              Cerrar OC
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => sendOCReport()}
          >
            <Text style={[styles.text, { fontSize: normalize(20) }]}>
              Enviar Reporte
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </Layout>
  );
};
export default Homescreen;
