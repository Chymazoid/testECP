interface iRequest {
  method: "GET" | "POST" | "PUT";
  url: string;
  body: string | null;
}

export const request = ({ method, url, body }: iRequest) => {
  return fetch(url, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    method,
    body,
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });
};
