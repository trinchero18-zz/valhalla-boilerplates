export function get () {
    return {
        type: 'EXAMPLE_GET'
    };
}

export function set (payload) {
    return {
        type: 'EXAMPLE_SET',
        payload,
    };
}