let key = 0

const getKey = () => {
    key += 1
    return key.toString()
}

export default getKey