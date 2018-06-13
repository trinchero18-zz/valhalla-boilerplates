export function get () {
    return {
        type: 'EXAMPLE_GET'
    };
}

export function set (payload) {
    return {
        payload,
        type: 'EXAMPLE_SET'
    };
}
