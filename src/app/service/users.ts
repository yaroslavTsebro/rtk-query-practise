import { User } from "../../types/user";
import { apiSlice } from "./api";

type UserResponse = User[]

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserResponse, void>({
      query: () => "/users",
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: 'User', id } as const)),
        { type: 'User' as const, id: 'LIST' },
      ],
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
