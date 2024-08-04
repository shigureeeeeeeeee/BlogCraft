"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/lib/validation";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

interface ProfileEditFormProps {
  user: {
    name: string | null | undefined;
    email: string | null | undefined;
    image?: string | null | undefined;
  };
  onSuccess?: () => void;
}

export default function ProfileEditForm({ user, onSuccess }: ProfileEditFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: user,
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: any) {
    setIsLoading(true);

    const response = await fetch("/api/user", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setIsLoading(false);

    if (!response.ok) {
      return toast({
        title: "更新に失敗しました",
        description: "プロフィールの更新に失敗しました。もう一度お試しください。",
        variant: "destructive",
      });
    }

    toast({
      title: "更新に成功しました",
      description: "プロフィールが更新されました。",
    });

    router.refresh();

    if (onSuccess) {
      onSuccess();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          名前
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          メール
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          プロフィール画像
        </label>
        <input
          id="image"
          type="text"
          {...register("image")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.image && <p className="mt-2 text-sm text-red-600">{errors.image.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        disabled={isLoading}
      >
        {isLoading ? "更新中..." : "更新"}
      </button>
    </form>
  );
}