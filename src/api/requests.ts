import { request } from "./request";

export const GET = (url: string) => {
  return request({ method: "GET", url, body: null });
};
