import { object, string } from "zod";

/**
 * @openapi
 * components:
 *   schemas:
 *     GetSessionResponse:
 *       type: array
 *       items:
 *         type: object
 *         required:
 *           - user
 *           - valid
 *           - userAgent
 *           - createdAt
 *           - updatedAt
 *         properties:
 *           _id:
 *             type: string
 *           user:
 *             type: string
 *           valid:
 *             type: boolean
 *           userAgent:
 *             type: string
 *           createdAt:
 *             type: string
 *           updatedAt:
 *             type: string
 *           __v:
 *             type: number
 *     CreateSessionInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         password:
 *           type: string
 *           default: stringPassword123
 *     CreateSessionResponse:
 *       type: object
 *       required:
 *         - accessToken
 *         - refreshToken
 *       properties:
 *         accessToken:
 *           type: string
 *         refreshToken:
 *           type: string
 */

export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }),
    password: string({
      required_error: "Password is required",
    }),
  }),
});
