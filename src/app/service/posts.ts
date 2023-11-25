import { createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { Post } from "../../types/post";
import { apiSlice } from "./api";

const postsAdapter = createEntityAdapter({
  sortComparer: (a: Post, b: Post) => b.date.localeCompare(a.date),
});

// const initialState = postsAdapter.getInitialState();

type PostsResponse = Post[];

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, void>({
      query: () => "/posts",
      transformResponse: (responseData: Post[]) => {
        let min = 1;
        const loadedPosts = responseData.map((post: Post) => {
          if (!post?.date)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
          if (!post?.reactions)
            post.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            };
          return post;
        });
        return loadedPosts;
      },
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Post", id } as const)),
        { type: "Post" as const, id: "LIST" },
      ],
    }),
    getPostsByUserId: builder.query<PostsResponse, number>({
      query: (id) => `/posts/?userId=${id}`,
      transformResponse: (responseData: Post[]) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.date)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();
          if (!post?.reactions)
            post.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            };
          return post;
        });
        return loadedPosts;
      },
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "Post", id } as const)),
        { type: "Post" as const, id: "LIST" },
      ],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
        method: "POST",
        body: {
          ...initialPost,
          userId: Number(initialPost.userId),
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      }),
      invalidatesTags: [{ type: "Post", id: "LIST" }],
    }),
    updatePost: builder.mutation({
      query: (initialPost) => ({
        url: `/posts/${initialPost.id}`,
        method: "PUT",
        body: {
          ...initialPost,
          date: new Date().toISOString(),
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg.id }],
    }),
    addReaction: builder.mutation({
      query: ({ postId, reactions }) => ({
          url: `posts/${postId}`,
          method: 'PATCH',
          body: { reactions }
      }),
      async onQueryStarted({ postId, reactions }, { dispatch, queryFulfilled }) {
          const patchResult = dispatch(
              extendedApiSlice.util.updateQueryData('getPosts', undefined, draft => {
                  const post = draft[postId]
                  if (post) post.reactions = reactions
              })
          )
          try {
              await queryFulfilled
          } catch {
              patchResult.undo()
          }
      }
  })
  }),
});

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useAddNewPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useAddReactionMutation
} = extendedApiSlice
