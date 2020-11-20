import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '2m', target: 300 },
    { duration: '2m', target: 600 },
    { duration: '2m', target: 1000 },
    { duration: '5m', target: 1000 },
  ],
};

const geneRateBatchData = (range) => {
  let rs = [];
  const BASE_URL = 'http://localhost:3001'; 
  for (let i = 1; i <= range; i++) {
    rs.push(['GET',
      `${BASE_URL}/images/${Math.floor(Math.random() * (10000000 - 9000000) + 9000000)}`,
      null,
      { tags: { name: 'PublicCrocs' } }, ]);
  }
  return rs;
};
export default function () {
  let responses = http.batch(geneRateBatchData(4));
  sleep(1);
}
