import React from "react";
import { Post } from "../../../types/post";
import { useAddReactionMutation } from "../../../app/service/posts";

type NameEmoji = { name: string; emoji: string };

const reactionEmoji: NameEmoji[] = [
  { name: "thumbsUp", emoji: "👍" },
  { name: "wow", emoji: "😮" },
  { name: "heart", emoji: "❤️" },
  { name: "rocket", emoji: "🚀" },
  { name: "coffee", emoji: "☕" },
];

const ReactionButtons: React.FC<{ post: Post }> = ({ post }) => {
  const [addReaction] = useAddReactionMutation();

  const reactionButtons = reactionEmoji.map(({name, emoji}) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => {
          if (post.reactions) {
            const newValue = post.reactions[name] + 1;
            addReaction({
              postId: post.id,
              reactions: { ...post.reactions, [name]: newValue },
            });
          }
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
