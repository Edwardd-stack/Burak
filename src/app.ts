import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

/** 1-ENTRANCE **/
const app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Traditional API uchun xizmat qiladigan (Middleware DP)
app.use(express.json()); // Rest API sifatida kelayotgan json datalarni o'tkazishga ruhsat beradi (Middleware DP) | json => object |

/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); // Traditional API larni ishga tushurish uchun ejs frameworkdan foydalandik

/** 4-ROUTERS **/
app.use("/admin", routerAdmin); // BSSR: EJS
app.use("/", router); // SPA:  REACT

export default app;
