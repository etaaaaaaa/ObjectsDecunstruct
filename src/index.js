export default function deconstruct({special: [...args]} = obj) {
    const arr = []
    for (let item in args) {
        const {id, name, icon, description = "Описание недоступно"} = args[item]
        arr.push({id, name, icon, description})
    }
    return arr
}
