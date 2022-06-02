import { Router } from "express";
import {
  deleteData,
  getData,
  getActives,
  getAll,
  getCount,
  saveOC,
  saveData,
  updateOC,
} from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Order
 *  description: Orders endpoint
 */

/*********************************************
 * @swagger
 * /api/count:
 *  get:
 *    summary: Get all orders counter
 *    tags: [Order]
 */
router.get("/api/count", getCount);

/*********************************************
 * @swagger
 * /api/getactive:
 *  get:
 *    sumary: Get all orders
 *    tags: [Order]
 */
router.get("/api/getactive", getActives);

/***
 * @swagger
 * /api/getall:
 *  get:
 *    sumary: Get all orders
 *    tags: [Order]
 */
router.get("/api/getall", getAll);

/***
 * @swagger
 * /api/:id:
 *  get:
 *    summary: Get one order by id
 *    tags: [Order]
 */
router.get("/api/getdata/:id", getData);
/*********************************************
 * @swagger
 * /api/saveoc:
 *  post:
 *    summary: Create a new order
 *    tags: [Order]
 */
router.post("/api/saveoc", saveOC);

/***
 * @swagger
 * /api/savedata:
 *  post:
 *    summary: Create a new orders
 *    tags: [Order]
 */
router.post("/api/savedata", saveData);

/***
 * @swagger
 * /api/:id:
 *  delete:
 *    summary: Delete a order by id
 *    tags: [Order]
 */
router.delete("/api/:id", deleteData);

/***
 * @swagger
 * /api/:id:
 *  put:
 *    summary: Update a order by id
 *    tags: [Order]
 */
router.put("/api/:id", updateOC);

export default router;