import { useEffect, useState } from "react";

type Comments = {
  id: string;
  postId: string;
  name: string;
  text: string;
  createdAt: number;
};
// custom hook for fetching comments
export const useFetchComments = (id: string) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://5ebd9842ec34e900161923e7.mockapi.io/post/${id}/comments`
        );
        const comments = await res.json();
        // added this conditon becouse API in some cases returns a string "Not found"
        if (!Array.isArray(comments)) {
          setComments([]);
          return;
        }
        setComments(comments);
      } catch (error) {
        setError("Something went wrong!");
        setComments([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComments();
  }, [id]);

  return {
    isLoading,
    comments,
    error,
  };
};
