export interface PostModel {
  "_id": string,
  "title": string,
  "category": string,
  "content": string,
  "image": string,
  "user": {
    "_id": string,
    "name": string
  },
  "timeToRead": string,
  "date": string
}
