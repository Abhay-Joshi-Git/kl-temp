// import axios from 'axios';
import casesMockData from '../../mocks/cases.json';

const fetchCases = () => new Promise(function(resolve, reject) {
    resolve(casesMockData)
  })
  .then(response => {
    return response;
  });

export default {
  fetchCases,
};
