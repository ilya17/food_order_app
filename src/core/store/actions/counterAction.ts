export const increment = (value: string) => {
    return {
        type: 'INCREMENT',
        value
    }
}

export const decrement = (value: string) => {
    return {
        type: 'DECREMENT',
        value
    }
}