"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const router = (0, express_1.Router)();
router.post("/register", auth_controller_1.register);
router.post("/login", auth_controller_1.login);
router.post("/verify-otp", auth_controller_1.verifyOtp);
router.post("/refresh-token", auth_controller_1.refreshToken);
router.post("/reset-password-request", auth_controller_1.resetPasswordRequest);
router.post("/reset-password", auth_controller_1.resetPassword);
router.post("/logout", auth_controller_1.logout);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map