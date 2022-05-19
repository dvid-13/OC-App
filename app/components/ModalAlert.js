import React from "react";
import { View, Modal } from "react-native";

export const ModalAlert = ({ children, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      {children}
    </Modal>
  );
};
