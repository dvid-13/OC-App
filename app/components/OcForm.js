import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Input } from "./Input";
import { styles } from "../styles/Styles";
import { color } from "../styles/Colors";
import { normalize } from "../styles/FontSize";
import Layout from "./Layout";
import { saveOc } from "../api";

const OcForm = () => {
  const [oc, setOc] = useState({
    name: "",
    company: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [responseText, setResponseText] = useState("");

  const onHandleChange = (name, value) => {
    setOc({ ...oc, [name]: value });
  };

  const onHandleSubmit = async () => {
    setModalVisible(true);
    setModalVisible(true);
    if (oc.name !== "" && oc.company !== "") {
      const res = await saveOc(oc);
      res.affrows == 1
        ? setResponseText("Se agregó la nueva OC")
        : setResponseText("No se pudo agregar la OC");
      console.log(res);
    } else {
      setResponseText("Ingrese datos válidos");
    }
    setTimeout(() => {
      setModalVisible(false);
    }, 1300);
  };

  return (
    <Layout style={[styles.layout, { justifyContent: "center" }]}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalAlert}>
          <Text style={[styles.text, { fontSize: normalize(20) }]}>
            {responseText}
          </Text>
        </View>
      </Modal>
      <View style={styles.inputContainer}>
        <Input
          label={"Empresa"}
          desc={"company"}
          onChangeText={onHandleChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label={"OC/descripcion"}
          desc={"name"}
          onChangeText={onHandleChange}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: 30 }}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={onHandleSubmit}
          >
            <Text style={[styles.text, { fontSize: normalize(20) }]}>
              Agregar orden
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};
export default OcForm;
