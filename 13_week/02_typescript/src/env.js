"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().optional()
});
function createEnv(env) {
    const validateion = envSchema.safeParse(env);
    if (!validateion.success)
        throw new Error(validateion.error.message);
    return validateion.data;
}
exports.env = createEnv(process.env);
