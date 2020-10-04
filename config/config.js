//PORT
process.env.PORT = process.env.PORT || 4000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

if (process.env.NODE_ENV === "dev") {
  process.env.URL_BASE = "http://localhost:4000";
} else {
  process.env.URL_BASE = process.env.URL_BASE;
}
