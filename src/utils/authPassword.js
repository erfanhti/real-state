import { compare, hash } from "bcryptjs";

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function comparePassword(password, hashedPassword) {
  const invalidPass = await compare(password, hashedPassword);
  return invalidPass;
}

export { hashPassword, comparePassword };
