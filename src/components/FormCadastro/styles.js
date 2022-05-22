import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10
    },
    formLabel: {
        color: "000000",
        fontSize: 18,
        paddingLeft: 20
    },
    formInput: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    formTextButton: {
        fontSize: 20,
        color: "#ffffff"
    },
    formButton: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "green",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    formButtonFecharModal: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#aaaaaa",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30
    },
    textValidacao: {
        fontSize: 14,
        color: "red",
        paddingLeft: 20,
        paddingBottom: 10
    }
});

export default styles;