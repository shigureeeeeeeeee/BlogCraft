import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "名前は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  image: z.string().url("有効なURLを入力してください").optional(),
});