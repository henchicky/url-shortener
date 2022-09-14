<h1 align="center">
  <img src="https://github.com/henchicky/url-shortener/blob/main/url-shortener-frontend/public/logo.png" alt="SHORTEN.NOW" width="50%">
</h1>

<div align="center">
  <a href="https://shorten-now.herokuapp.com/">SHORTEN.NOW</link>
</div>

### :book: Table of Contents

- [About](#about)
  - [Frontend Usage](#frontend-usage)
  - [Backend Usage](#backend-usage)
  - [Testing](#testing)

---

## About

SHORTEN.NOW is a url shortener hosted on heroku and can be access at [https://shorten-now.herokuapp.com/](https://shorten-now.herokuapp.com/).

Frontend is written in [ReactJS 18](https://reactjs.org/), bootstrapped with [MUI](https://mui.com/).

Backend is written in [.NET Core 6](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

Database used is [PostgreSQL](https://www.postgresql.org/).

### Frontend Usage

Clone this repo

```
git clone https://github.com/henchicky/url-shortener.git
cd url-shortener-frontend
npm install
npm start
```

> View on [http://127.0.0.1:5173/](http://127.0.0.1:5173/)


### Backend Usage

```
cd url-shortener-backend
```

1) Download and install [Visual Studio 2022](https://visualstudio.microsoft.com/vs/community/) or [Rider](https://www.jetbrains.com/rider/download/#section=windows). 

2) Download and install [PostgreSql](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).

3) Press the play button on Visual Studio/Rider to run backend server. This will open up Swagger. 

### Testing
Run test cases in Visual Studio/Rider. Test cases can be found in `url-shortener-backend.unit-tests`. 
