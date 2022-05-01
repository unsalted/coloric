import { Router } from "express";
import indexPage from "./pages/index";
import unsplashService from "./services/unsplash";

export default Router()
  .get("/", indexPage)
  .get("/services/unsplash", unsplashService);
