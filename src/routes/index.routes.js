import { Router } from "express";
import {
  createTask,
  deleteTask,
  editTask,
  renderAbout,
  renderTask,
  renderTaskEdit,
  taskToggleDone,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.get("/about", renderAbout);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;
