export const incrementPrice = (value: number) => {
    return {
        type: 'INCREMENT_PRICE',
        value
    }
}

export const decrementPrice = (value: number) => {
    return {
        type: 'DECREMENT_PRICE',
        value
    }
}