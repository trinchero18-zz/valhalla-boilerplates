import { createSelector } from 'reselect';

const questions = (store) => store.questions.toJS().questions;

export const getQuestionsToJS = createSelector(
    questions,
    (questions) => questions
);