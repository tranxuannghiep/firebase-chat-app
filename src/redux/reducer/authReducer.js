
const initValues = {
    user: {}
}

const authReducer = (state = initValues, action) => {
    switch (action.type) {
        case 'auth/update':
            return {
                ...initValues,
                user: { ...action.payload }
            }
        default:
            return state;
    }
}

export default authReducer