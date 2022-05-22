import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./styles";

import api from "../Services/api";

export default function FormCadastro(props) {
    const [nome, setNome] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [mensagemValidacaoNome, setMensagemValidacaoNome] = useState("");
    const [mensagemValidacaoLocalidade, setMensagemValidacaoLocalidade] = useState("");
    
    function validarForm() {
        if (!nome) {
            setMensagemValidacaoNome("Preencha o nome");
        } else {
            setMensagemValidacaoNome("");
        }

        if (!localidade) {
            setMensagemValidacaoLocalidade("Preencha a localidade");
        } else {
            setMensagemValidacaoLocalidade("");
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Nome</Text>
                <TextInput
                style={styles.formInput}
                onChangeText={setNome}
                value={nome}
                placeholder="Nome"
                keyboardType="default"
                />
                <Text style={styles.textValidacao}>{mensagemValidacaoNome}</Text>

                <Text style={styles.formLabel}>Localidade</Text>
                <TextInput 
                style={styles.formInput}
                onChangeText={setLocalidade}
                value={localidade}
                placeholder="Localidade"
                keyboardType="default"
                />
                <Text style={styles.textValidacao}>{mensagemValidacaoLocalidade}</Text>

                <TouchableOpacity
                style={styles.formButton}
                    onPress={() => validarForm()}
                >
                    <Text style={styles.formTextButton}>Salvar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.formButtonFecharModal}
                    onPress={() => props.executar(false)}
                >
                    <Text style={styles.formTextButton}>Cancelar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}