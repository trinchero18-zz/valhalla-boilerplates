import { createSelector } from 'reselect';

const example = store => store.example.toJS().example;

export const getExampleToJS = createSelector(
    example,
    (example) => example
);