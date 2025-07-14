"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middlewares/auth");
const router = (0, express_1.Router)();
router.get("/users", auth_1.authMiddleware, user_controller_1.getAllUsers);
router.get("/users/:id", auth_1.authMiddleware, user_controller_1.getUserById);
router.put("/users/:id", auth_1.authMiddleware, user_controller_1.updateUser);
router.put("/users/:id/role", auth_1.authMiddleware, user_controller_1.updateUserRole);
exports.default = router;
//# sourceMappingURL=user.routes.js.map