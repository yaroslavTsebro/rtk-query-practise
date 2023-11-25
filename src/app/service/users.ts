import { createEntityAdapter } from "@reduxjs/toolkit";
import { User } from "../../types/user";
import { apiSlice } from "./api";

const usersAdapter = createEntityAdapter<User>();
const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({ url: "/users", method: "get" }),
      providesTags: (result) => [{ type: "User", id: "LIST" }],
      transformResponse: (response: User[]) => {
        return response;
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetUsersQuery } = usersApiSlice;

export const { selectAll: selectAllUsers, selectById: selectUserById } =
  usersAdapter.getSelectors((state) => state.users);
