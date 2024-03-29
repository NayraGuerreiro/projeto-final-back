import jwt from "jsonwebtoken";

export function generateToken(user) {
  const { _id, name, email, role } = user;

  const signature = process.env.TOKEN_SIGN_SECRET;
  const expiration = "72h";

  return jwt.sign({ _id, name, email, role }, signature, {
    expiresIn: expiration,
  });
}
