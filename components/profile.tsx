import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data: user, error } = useSWR("/api/user", fetcher);

  if (error) return <div>エラーが発生しました</div>;
  if (!user) return <div>読み込み中...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">プロフィール</h1>
      <p>名前: {user.name}</p>
      <p>メール: {user.email}</p>
      <p>画像: <img src={user.image} alt="プロフィール画像" className="w-16 h-16 rounded-full" /></p>
    </div>
  );
}