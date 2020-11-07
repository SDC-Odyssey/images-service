import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    // { duration: '2m', target: 10 }, // below normal load
    { duration: '5m', target: 100 },
    // { duration: '2m', target: 200 }, // normal load
    // { duration: '5m', target: 200 },
    // { duration: '2m', target: 300 }, // around the breaking point
    // { duration: '5m', target: 300 },
    // { duration: '2m', target: 400 }, // beyond the breaking point
    // { duration: '5m', target: 400 },
    // { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
};
const getRandom = () => {
  return Math.floor(Math.random() * (10000000 - 9000000) + 9000000);
};

const geneRateBatchData = (range) => {
  let rs = [];
  const BASE_URL = 'http://127.0.0.1:3001'; 
  for (let i = 1; i <= range; i++) {
    rs.push(['GET',
      `${BASE_URL}/images/${getRandom()}`,
      null,
      { tags: { name: 'PublicCrocs' } }, ]);
  }
  return rs;
};
export default function () {
  // make sure this is not production

  let responses = http.batch(geneRateBatchData(4));

  sleep(1);
}
