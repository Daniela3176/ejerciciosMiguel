const changeName = (searchedInput) => {
    return {
        type: 'CHANGE_NAME',
        payload: searchedInput
    }
}

export default changeName;