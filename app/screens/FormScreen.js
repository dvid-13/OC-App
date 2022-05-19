import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Layout from "../components/Layout";
import OcForm from "../components/OcForm";
import DataForm from "../components/DataForm";
import { styles } from "../styles/Styles";

const FormScreen = ({ route }) => {
  useEffect(() => {
    console.log(route);
  });
  return (
    <Layout>
      {route.params ? (
        <DataForm oc_id={route.params.itemid} title={route.params.title} />
      ) : (
        <OcForm />
      )}
    </Layout>
  );
};
export default FormScreen;
