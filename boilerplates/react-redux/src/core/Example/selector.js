import { createSelector } from 'reselect';

const example = store => store.questions.toJS().example;

export const getExampleToJS = createSelector(
    example,
    (example) => example
);