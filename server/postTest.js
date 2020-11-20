import http from 'k6/http';

export default function () {
  const id = Math.floor(Math.random() * (11000000 - 10000000) + 10000000);
  const url = 'http://127.0.0.1:3001/images';
  const payload = JSON.stringify({
    roomPhotos: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057',
      'https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057',
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057',
      'https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057'
    ],
    roomId: id,
    title: 'Quo est eos ut aspernatur fuga.',
    reviewCount: 2,
    isSuperHost: false,
    rating: 4
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  http.post(url, payload, params);
}

//to run from terminal: k6 run --vus 200 --iterations 2000 server/postTest.js 