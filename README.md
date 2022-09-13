<h1 align="center">
  <img src="https://github.com/henchicky/url-shortener/blob/main/url-shortener-frontend/public/logo.png" alt="SHORTEN.NOW" width="50%">
</h1>

<div align="center">
  <a href="https://shorten-now.herokuapp.com/">SHORTEN.NOW</link>
</div>

### :book: Table of Contents

- [About](#about)
  - [Frontend Usage](#frontend-usage)
    - [Install Dependencies](#install-dependencies)
    - [Development](#development)
  - [Backend Usage](#backend-usage)
    - [Install and Run](#install-and-run)

---

## About

SHORTEN.NOW is a url shortener.

The frontend written in [ReactJS 18](https://reactjs.org/), bootstrapped with [MUI](https://mui.com/).

The backend is written in [.NET Core 6](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

SHORTEN.NOW is hosted on heroku and can be access at [https://shorten-now.herokuapp.com/](https://shorten-now.herokuapp.com/).

### Frontend Usage

Clone this repo

```
git clone https://github.com/henchicky/url-shortener.git
cd url-shortener-frontend
```

#### Install dependencies

Run the following code to download and install all dependencies and devDependencies listed inside `package.json`. Run this code after installation of any new packages, or upgrading of package versions.

```
npm install
```

#### Development

To run in **development server:**  
(The page will reload if you make edits. You will also see any lint errors in the console :grinning:.)

> View on [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

```
npm start
```

---

### Backend Usage

```
cd url-shortener-backend
```

#### Install and Run

Download and install [Visual Studio 2022](https://visualstudio.microsoft.com/vs/community/). Open solution file (.sln) and click on the play button to run.
Swagger page will open up automatically, and you can use swagger to call the endpoints in development.

> Access at [https://localhost:44366/](https://localhost:44366/)
