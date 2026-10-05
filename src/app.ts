import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1-ENTRANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Traditional API uchun xizmat qiladigan (Middleware DP)
app.use(express.json()); // Rest API sifatida kelayotgan json datalarni o'tkazishga ruhsat beradi (Middleware DP) | json => object |
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6h
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  }),
);

// brauzer uchun locals variable | res.locals => view enginega ma'lumotlarni uzatish uchun ishlatiladi
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Traditional API larni ishga tushurish uchun ejs frameworkdan foydalandik

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // SPA:  REACT

export default app;
