import { createSelector } from 'reselect';

const casesData = state => state.cases;

const cases = createSelector(
  casesData,
  (data) => {
    if (data) {
      return data;
      // do the transformation if required
      // return data.map(item => item);
    }
    return [];
  },
);

export default {
  cases,
};
