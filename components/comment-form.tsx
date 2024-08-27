"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const commentSchema = z.object({
  content: z.string().min(1, "コメントを入力してください").max(500, "コメントは500文字以内で入力してください"),
});

interface CommentFormProps {
  postId: string;
}

export default function CommentForm({ postId }: CommentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, postId }),
      });

      if (!response.ok) {
        throw new Error("コメントの投稿に失敗しました");
      }

      toast({
        title: "コメントが投稿されました",
        description: "ページを更新すると表示されます",
      });
      reset();
    } catch (error) {
      toast({
        title: "エラー",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <Textarea
        {...register("content")}
        placeholder="コメントを入力してください"
        className="mb-2"
      />
      {errors.content && (
        <p className="text-red-500 text-sm mb-2">{errors.content.message}</p>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "送信中..." : "コメントを投稿"}
      </Button>
    </form>
  );
}
