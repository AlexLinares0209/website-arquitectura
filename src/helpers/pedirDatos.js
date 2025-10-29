import data from "../data/data_projects.json"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 100)
    })
}

export const pedirProjectPorId = (id) => {

    return new Promise((resolve, reject) => {

        const item = data.find((elemento) => elemento.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontró el producto"
            })
        }

    })
}