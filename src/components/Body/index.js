import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';
import styles from './style';
import api from "../Services/api";

import FormCadastro from '../FormCadastro';
import { Button } from 'react-native-web';

export default function Body() {
    const [modalVisible, setModalVisible] = useState(false);
    const [jogadores, setJogadores] = useState([]);

    function toggleModal(visible, refresh) {
        setModalVisible(visible);

        if (refresh)
            refreshPage();
    }

    useEffect(() => {
        api
          .get("/api/Jogadores")
          .then((response) => setJogadores(response.data.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }, []);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
    <View style={styles.containerBody}>
       
        {jogadores.length > 0 ?
            <FlatList 
            data={jogadores}
            keyExtractor={(el) => el.id}
            renderItem={({ item }) => {
                return (
                    <View> 
                        <TouchableOpacity style={styles.itemTouchFlatFlist} onPress={() => alert('Item pressionado!')}>
                            <View style={styles.itemFlatList}>
                                <Text style={styles.textFlatList}>
                                    {item.nome}
                                </Text>
                                <Text style={styles.descricaoFlatList}>
                                    {item.localidade}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <View style={styles.separatorFlatList}></View>
                    </View>
                )
            }}
            />
        : 
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Nenhum jogador encontrado!</Text>
            </View>
        }   

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
        }}
        >
            <FormCadastro executar={toggleModal.bind(this, false)}  />
        </Modal>

        <Pressable
        onPress={() => w(true)}
        >
            <TouchableOpacity style={styles.btnAdicionar} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textBtnAdicionar}>+</Text>
            </TouchableOpacity>
        </Pressable>
            
        <View style={{margin: 2}}>
            <Button title='Atualizar' onPress={() => refreshPage()}></Button>
        </View>
    </View>
    );
}