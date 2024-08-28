import DashboardHeader from "@/components/dashboard-header";
import DashboardShell from "@/components/dashboard-shell";
import EmptyPlaceholder from "@/components/empty-placeholer";
import PostCreateButton from "@/components/post-create-button";
import PostItem from "@/components/post-item";
import ProfileButton from "@/components/profile-button"; // Added import for ProfileButton
import { DashboardNav } from "@/components/dashboard-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { Eye, FileText, Users } from "lucide-react";
import { dashboardConfig } from "@/config/dashboard";
import { LogoutButton } from "@/components/logout-button";
import { UserNav } from "@/components/user-nav";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions.pages?.signIn || "/login");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  const totalViews = 1000; // この値は実際のデータから取得する必要があります
  const totalFollowers = 50; // この値は実際のデータから取得する必要があります

  return (
    <div className="flex">
      <DashboardShell className="flex-grow">
        <DashboardHeader heading="ダッシュボード" text="ブログの概要と統計">
          <UserNav user={{
            id: user.id,
            name: user.name ?? null,
            image: user.image ?? null,
            email: user.email ?? null
          }} />
        </DashboardHeader>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総投稿数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{posts.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">総閲覧数</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalViews}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                フォロワー数
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalFollowers}</div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">最近の投稿</h2>
          {posts.length ? (
            <div className="divide-y divide-border rounded-md border">
              {posts.slice(0, 5).map((post) => (
                <PostItem key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="post" />
              <EmptyPlaceholder.Title>
                記事が投稿されていません。
              </EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                記事を作成してください。
              </EmptyPlaceholder.Description>
              <PostCreateButton variant="outline" />
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </div>
  );
}
