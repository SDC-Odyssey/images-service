# images-service
Photo Module for WaterBnB

## Installation
# Requires Node 12.13.1^ & npm 6.12.1^ to run.

• From within the root directory run
  $ npm install

## Local development
# First seed the db using

  npm run seed

#  To run the server,

$ npm start

# To build the client,

$ npm run build

## API Endpoints
# GET /images/:2
  Response:
    {
      roomPhotos: [
        "https://sdc-pics.s3.amazonaws.com/sdcPic799.jpeg",
        "https://sdc-pics.s3.amazonaws.com/sdcPic434.jpeg",
        "https://sdc-pics.s3.amazonaws.com/sdcPic870.jpeg",
        "https://sdc-pics.s3.amazonaws.com/sdcPic975.jpeg",
        "https://sdc-pics.s3.amazonaws.com/sdcPic864.jpeg",
      ],
      _id: "5f821ebe4ebe09115258cdd3",
      roomId: 2,
      title: "Error illo et iure labore laborum ullam.",
      rating: 3,
      reviewCount: 5,
      isSuperHost: true,
      __v: 0,
    };
# POST /images/
  Request:
      {
        "roomPhotos": [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057"
        ],
        "roomId": 1204,
        "title": "Quo est eos ut aspernatur fuga.",
        "reviewCount": 2,
        "isSuperHost": false,
        "rating":4
    }
  Responce:
    {statusCode: 201, message: 'Success!'}

# PUT /images/:2 
  Request:
      {
        "roomPhotos": [
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1473893604213-3df9c15611c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057",
            "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MTI3NH0&w=1057"
        ],
        "roomId": 4,
        "title": "Quo est eos ut aspernatur fuga.",
        "reviewCount": 2,
        "isSuperHost": true,
        "rating":4
    }
  Responce:
    {statusCode: 203, message: 'Updated!'}

# DELETE /images/:2 

  Responce:
    {statusCode: 202, message: 'Deleted!'}

## ########################## POSTGRES DB SETUP

## npm install

## 1. from terminal run : < psql postgres > to enter pg commandline
## 2. create database: CREATE DATABASE oddesey;
## 3. npm run schema
## 4. npm run createData  --> 2m53.128s 50-70 million records(subject to change since there is randpm number of pic urls generated)
## 4. to seed DB needs to run 2 scripts:
        ##  npm run seedRoomInfoTable
        ##  npm run seedPictureUrlsTable
        