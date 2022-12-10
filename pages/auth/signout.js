import { useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
  const { doRequest } = useRequest({
    url: "http://localhost:4000/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Siging you out...</div>;
};
