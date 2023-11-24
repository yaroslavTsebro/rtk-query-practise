import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_URL } from "../../utils/constants";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_URL }),
  tagTypes: ["Post", "User"],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: (builder) => ({}),
});
