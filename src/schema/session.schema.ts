import { object, string } from 'zod'

/**
 * @openapi
 * components:
 *  schemas:
 *    CreateSessionInput:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          types: string
 *          default: jane.doe@example.com
 *        password:
 *          types: string
 *          default: stringPassword123
 *    CreateSessionResponse:
 *      type: object
 *      properties:
 *        accessToken:
 *          types: string
 *        refreshToken:
 *          types: string
 */
export const createSessionSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }),
    password: string({
      required_error: 'Password is required',
    }),
  }),
})
