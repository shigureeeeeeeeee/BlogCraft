export type Comment = {
    id: string;
    content: string;
    createdAt: string;
    author: {
      name: string;
      email: string;
      image: string;
    };
  };