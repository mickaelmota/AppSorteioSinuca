import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
        width: "100%",
        height: "100%",
        marginBottom: 0,
        backgroundColor: 'white',
    },
    textBody: {
        fontSize: 14,
        color: "black",
    },
    textFlatList: {
        fontSize: 20,
        fontWeight: "bold"
    },
    itemFlatList: {
        flex:1,
        marginLeft: '2%',
        padding: 10,
        backgroundColor: "white",
    },
    itemTouchFlatFlist: {
        margin: 3
    },
    separatorFlatList: {
        height: 1,
        width: '86%',
        backgroundColor: '#CED0CE',
        marginLeft: '5%'
    },
    descricaoFlatList: {
        fontSize: 12,
    },
    btnAdicionar: {
        borderRadius: 50,
        height: 60,
        width: 60,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 10,
        bottom: 10,
    },
    textBtnAdicionar: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold"
    }
})

export default styles;