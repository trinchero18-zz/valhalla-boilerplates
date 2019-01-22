import { createSelector } from 'reselect';

const example = store => store.example.title;

export const exampleSelector = createSelector(
    example,
    example => example
);
