import jwt from "jsonwebtoken";
import config from "config";

const privateKey = Buffer.from(
  config.get<string>("privateKey"),
  "base64"
).toString("ascii");
const publicKey = Buffer.from(
  config.get<string>("publicKey"),
  "base64"
).toString("ascii");

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e: any) {
    console.error(e);
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
}
