"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip, BarChart, Bar, XAxis, YAxis } from "recharts";
import { RecentPosts } from "@/components/recent-posts";
import { ProfileImageUpload } from "@/components/profile-image-upload";
import ProfileEditForm from "@/components/profile-edit-form";
import { CalendarIcon, PenIcon, EyeIcon, Edit, LayoutDashboard } from "lucide-react";
import { LogoutButton } from "@/components/logout-button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function ProfileContent({ user, postStats, recentPosts, monthlyPostStats }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">プロフィール</h1>
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">概要</TabsTrigger>
          <TabsTrigger value="posts">投稿</TabsTrigger>
          <TabsTrigger value="edit">編集</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>プロフィール情報</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Avatar className="w-32 h-32 mb-4">
                  <AvatarImage src={user.image ?? ""} alt={user.name ?? ""} />
                  <AvatarFallback>{user.name?.[0] ?? "U"}</AvatarFallback>
                </Avatar>
                <ProfileImageUpload userId={user.id} />
                <h2 className="text-2xl font-semibold mt-4">{user.name ?? "名前未設定"}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="flex items-center">
                    <PenIcon className="mr-2 h-4 w-4" />
                    <span>{postStats.reduce((acc, stat) => acc + stat.value, 0)} 投稿</span>
                  </div>
                  <div className="flex items-center">
                    <EyeIcon className="mr-2 h-4 w-4" />
                    <span>{user.viewCount ?? 0} ビュー</span>
                  </div>
                </div>
                <div className="flex items-center mt-4 space-x-2">
                  <Button onClick={() => setIsEditing(true)}>
                    <Edit className="mr-2 h-4 w-4" />
                    プロフィールを編集
                  </Button>
                  <Link href="/dashboard" className={cn(buttonVariants({ variant: "outline" }))}>
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    ダッシュボード
                  </Link>
                </div>
                <LogoutButton className="mt-2" />
              </CardContent>
            </Card>
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>投稿統計</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={postStats}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {postStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>月別投稿数</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyPostStats}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="posts">
          <Card>
            <CardHeader>
              <CardTitle>最近の投稿</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentPosts posts={recentPosts} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="edit">
          <Card>
            <CardHeader>
              <CardTitle>プロフィール編集</CardTitle>
            </CardHeader>
            <CardContent>
              <ProfileEditForm user={user} onSuccess={() => setIsEditing(false)} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}