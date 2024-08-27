import { formatDate } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    image: string;
  };
}

interface CommentsProps {
  comments: Comment[];
}

export function Comments({ comments }: CommentsProps) {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <div key={comment.id} className="flex space-x-4">
          <Avatar>
            <AvatarImage src={comment.author.image} alt={comment.author.name} />
            <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-sm font-medium">{comment.author.name}</p>
            <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
            <p className="text-sm">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
