const random = (range) => {
    const rand = Math.random()
    const rangedRand = rand * range
    return Math.ceil(rangedRand)
}

export default random