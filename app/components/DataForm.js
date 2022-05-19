import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Input } from "./Input";
import { styles } from "../styles/Styles";
import { color } from "../styles/Colors";
import { normalize } from "../styles/FontSize";
import Layout from "./Layout";
import { saveData } from "../api";

const DataForm = ({ oc_id, title }) => {
  const [data, setData] = useState({
    cost: "",
    description: "",
    oc_id: oc_id,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [divisa, setDivisa] = useState();

  const onHandleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onHandleSubmit = async () => {
    setModalVisible(true);
    if (data.cost !== "" && data.description !== "") {
      const res = await saveData(data);
      res.affrows == 1
        ? setResponseText("Se agregó el dato")
        : setResponseText("No se pudo agregar el dato");
      console.log(res);
    } else {
      setResponseText("Ingrese datos válidos");
    }
    setTimeout(() => {
      setModalVisible(false);
    }, 1300);
    console.log(data);
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
      <Text style={[styles.text, { fontSize: normalize(22) }]}>{title}</Text>

      <View style={styles.inputContainer}>
        <Input
          label={"Gasto"}
          desc={"cost"}
          onChangeText={onHandleChange}
          inputType="number-pad"
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label={"Descripcion"}
          desc={"description"}
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
export default DataForm;
