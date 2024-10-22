import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response): any => {
  // req.body = {email, password}

  //validation, express-validator, joi, zod

  // store in database - mongodb - mysql, pg, etc

  // generar token
  const token = jwt.sign(
    {
      test: "test",
    },
    "secret",
    {
      expiresIn: "2h",
    }
  );

  return res.json({
    token,
  });
};

export const profileHandler = (req: Request, res: Response): any => {
  return res.json({
    message: "Profile Data"
  })
};
