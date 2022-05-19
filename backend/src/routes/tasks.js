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
 *  name: Tasks
 *  description: Tasks endpoint
 */

/*********************************************
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Get all tasks counter
 *    tags: [Tasks]
 */
router.get("/api/count", getCount);

/*********************************************
 * @swagger
 * /tasks:
 *  get:
 *    sumary: Get all tasks
 *    tags: [Tasks]
 */
router.get("/api/getactive", getActives);

/***
 * @swagger
 * /tasks:
 *  get:
 *    sumary: Get all tasks
 *    tags: [Tasks]
 */
router.get("/api/getall", getAll);

/*********************************************
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new tasks
 *    tags: [Tasks]
 */
router.post("/api/saveoc", saveOC);

/***
 * @swagger
 * /tasks:
 *  post:
 *    summary: Create a new tasks
 *    tags: [Tasks]
 */
router.post("/api/savedata", saveData);

/***
 * @swagger
 * /tasks/:id:
 *  get:
 *    summary: Get one task by id
 *    tags: [Tasks]
 */
router.get("/api/getdata/:id", getData);

/***
 * @swagger
 * /api:
 *  delete:
 *    summary: Delete a tasks by id
 *    tags: [Tasks]
 */
router.delete("/api/:id", deleteData);

/***
 * @swagger
 * /api/:id:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 */
router.put("/api/:id", updateOC);

export default router;
