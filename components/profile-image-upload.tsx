"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProfileImageUploadProps {
  userId: string;
}

export function ProfileImageUpload({ userId }: ProfileImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    // ここで実際のアップロード処理を実装します
    // 例: FormDataを使用してAPIエンドポイントにファイルを送信

    setIsUploading(false);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        style={{ display: "none" }}
        id="profile-image-upload"
      />
      <Button asChild>
        <label htmlFor="profile-image-upload">
          {isUploading ? "アップロード中..." : "画像をアップロード"}
        </label>
      </Button>
    </div>
  );
}