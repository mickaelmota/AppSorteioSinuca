import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';
import styles from './style';

import FormCadastro from '../FormCadastro';

export default function Body() {
    const [modalVisible, setModalVisible] = useState(false);

    function toggleModal(visible) {
        setModalVisible(visible);
    }

    const jogadores = [
        {id: 1, nome: "Usuário teste A", localidade: "Localidade 1", ativo: true, colocacao: 0},
        {id: 2, nome: "Usuário teste B", localidade: "Localidade 2", ativo: true, colocacao: 0},
        {id: 3, nome: "Usuário teste C", localidade: "Localidade 3", ativo: true, colocacao: 0},
        {id: 4, nome: "Usuário teste D", localidade: "Localidade 4", ativo: true, colocacao: 0},
        {id: 5, nome: "Usuário teste E", localidade: "Localidade 5", ativo: true, colocacao: 0},
        {id: 6, nome: "Usuário teste A", localidade: "Localidade 1", ativo: true, colocacao: 0},
        {id: 7, nome: "Usuário teste B", localidade: "Localidade 2", ativo: true, colocacao: 0},
        {id: 8, nome: "Usuário teste C", localidade: "Localidade 3", ativo: true, colocacao: 0},
        {id: 9, nome: "Usuário teste D", localidade: "Localidade 4", ativo: true, colocacao: 0},
        {id: 10, nome: "Usuário teste E", localidade: "Localidade 5", ativo: true, colocacao: 0},
        {id: 11, nome: "Usuário teste A", localidade: "Localidade 1", ativo: true, colocacao: 0},
        {id: 12, nome: "Usuário teste B", localidade: "Localidade 2", ativo: true, colocacao: 0},
        {id: 13, nome: "Usuário teste C", localidade: "Localidade 3", ativo: true, colocacao: 0},
        {id: 14, nome: "Usuário teste D", localidade: "Localidade 4", ativo: true, colocacao: 0},
        {id: 15, nome: "Usuário teste E", localidade: "Localidade 5", ativo: true, colocacao: 0},
        {id: 16, nome: "Usuário teste A", localidade: "Localidade 1", ativo: true, colocacao: 0},
        {id: 17, nome: "Usuário teste B", localidade: "Localidade 2", ativo: true, colocacao: 0},
        {id: 18, nome: "Usuário teste C", localidade: "Localidade 3", ativo: true, colocacao: 0},
        {id: 19, nome: "Usuário teste D", localidade: "Localidade 4", ativo: true, colocacao: 0},
        {id: 20, nome: "Usuário teste E", localidade: "Localidade 5", ativo: true, colocacao: 0},
        {id: 21, nome: "Usuário teste A", localidade: "Localidade 1", ativo: true, colocacao: 0},
        {id: 22, nome: "Usuário teste B", localidade: "Localidade 2", ativo: true, colocacao: 0},
        {id: 23, nome: "Usuário teste C", localidade: "Localidade 3", ativo: true, colocacao: 0},
        {id: 24, nome: "Usuário teste D", localidade: "Localidade 4", ativo: true, colocacao: 0},
        {id: 25, nome: "Usuário teste E", localidade: "Localidade 5", ativo: true, colocacao: 0},
    ]; 

    return (
    <View style={styles.containerBody}>
        <FlatList 
        data={jogadores}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
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
        }
        />

            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
            >
                <FormCadastro executar={toggleModal.bind(this)}  />
            </Modal>

            <Pressable
            onPress={() => w(true)}
            >
                <TouchableOpacity style={styles.btnAdicionar} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textBtnAdicionar}>+</Text>
                </TouchableOpacity>
            </Pressable>
            
    </View>
    );
}