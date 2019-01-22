const defaultState = () => ({
    title: 'Welcome to Valhalla - React/Redux boilerplate'
});

export function exampleReducer (state = defaultState(), { type, payload }) {
    switch (type) {
    
    default:
        return state;
    }
}
