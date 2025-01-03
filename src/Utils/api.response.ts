import { Response } from "express";

export interface ApiResponse<T> {
  status: number;
  message: string;
  data?: T;
}

export const sendApiResponse = <T>(
  res: Response,
  status: number,
  message: string,
  data?: T
): Response => {
  const responseBody: ApiResponse<T> = {
    status,
    message,
    data,
  };

  return res.status(status).json(responseBody);
};
