import { createSelector } from 'reselect';

const example = store => store.example.toJS().title;

export const exampleSelector = createSelector(
    example,
    example => example
);
