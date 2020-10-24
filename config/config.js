//PORT
process.env.PORT = process.env.PORT || 8080;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

if (process.env.NODE_ENV === "dev") {
  process.env.URL_BASE = "http://localhost:4000/api/";
} else {
  process.env.URL_BASE = process.env.URL_BASE;
}

//API FACEBOOK
process.env.ID_FACEBOOK = process.env.ID_FACEBOOK || '358921788786000'