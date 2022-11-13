# Shan's Book My Show

This is a Full Stack Project Built with MERN Stack.

- This website features the main functionalities of the Real `BookMyShow`
- Like the landing Page, Movies Page, Plays Page
- It is also built with a test Payment Gateway System from **RazorPay**
- If you want to use this project you have to have 2 keys
  1. TMDB key
  2. RazorPay key
- Then you can use this project as you want.

Happy Developing! 🧑‍🎤✨

### Built with

- React
- Tailwind CSS
- Axios
- Headless UI
- React Slick
- React Icons
- RazorPay API
- TMDB API

## Terminal Commands

To use this project you should have used or installed the below shown Packages:

```bash
npx create-react-app .
npm install react-router-dom
npm install react-slick
npm install slick-carousel
npm install axios
npm install -D tailwindcss
npx tailwindcss init
npm install @headlessui/react
```

Go through the official websites to see detailed installation procedures.

## Major Routes

#### Home Page

```http
   /
```

| Route | Description               |
| :---- | :------------------------ |
| `/`   | **Takes to the HomePage** |

#### Movie Info

```http
   /movie/:id
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `id`      | `string` | **Required**. Id of movie to fetch |

#### Plays/ Events

```http
   /plays
```

| Route    | Description                |
| :------- | :------------------------- |
| `/plays` | **Takes to the PlaysPage** |

## Color Reference

Extra Colors used inspite of the colors present in Tailwind CSS

#### Dark BackGround

| Color | Hex     |
| ----- | ------- |
| 50    | #edf1fc |
| 100   | #d3d4e1 |
| 200   | #b6b8c9 |
| 300   | #989bb2 |
| 400   | #7c7f9b |
| 500   | #636582 |
| 600   | #4c4f66 |
| 700   | #363849 |
| 800   | #21222e |
| 900   | #0a0a16 |

#### Premier

| Color | Hex     |
| ----- | ------- |
| 50    | #edf4fd |
| 100   | #ced7e5 |
| 200   | #afbbcf |
| 300   | #909fbb |
| 400   | #7081a7 |
| 500   | #57668e |
| 600   | #444d6f |
| 700   | #303650 |
| 800   | #2b3147 |
| 900   | #080d17 |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_KEY`

You can get your own key from https://www.themoviedb.org/

## Deployment

To start this project run

```bash
  npm start
```
