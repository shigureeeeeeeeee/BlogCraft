"use client";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });

export default function IndexPage() {
  return (
    <>
      <section className="relative pt-20 md:pt-32 lg:pt-48 pb-16 md:pb-24 lg:pb-32 bg-gradient-to-b from-background to-muted overflow-hidden">
        <div className="container text-center flex flex-col gap-8 items-center max-w-[64rem] relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Post Writer
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-[42rem] mx-auto">
              次世代のブログプラットフォーム。簡単に始められ、読者との繋がりを深められます。
            </p>
          </MotionDiv>
          <MotionDiv
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/register" className={cn(buttonVariants({ size: "lg" }))}>
              無料で始める
            </Link>
            <Link
              href="#features"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              機能を見る
            </Link>
          </MotionDiv>
          <MotionDiv
            className="relative w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/images/hero-screenshot.png"
              alt="Post Writerのスクリーンショット"
              width={1200}
              height={675}
              className="rounded-lg shadow-2xl"
            />
          </MotionDiv>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
      </section>

      <section id="features" className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">主な機能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                className="flex flex-col items-center text-center p-6 bg-muted rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">使い方</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <MotionDiv
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </MotionDiv>
                ))}
              </ol>
            </div>
            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/demo-screenshot.png"
                alt="Post Writerのデモ"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-12">ユーザーの声</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                className="bg-muted p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="mb-4 text-lg italic">{testimonial.content}</p>
                <div className="flex items-center justify-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">料金プラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <MotionDiv
                key={index}
                className="bg-background p-8 rounded-lg shadow-lg flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-2 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.link}
                  className={cn(buttonVariants({ variant: index === 1 ? "default" : "outline" }))}
                >
                  選択する
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">最新の記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <MotionDiv
                key={index}
                className="bg-muted p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href={post.slug} className={cn(buttonVariants({ variant: "outline" }))}>
                  続きを読む
                </Link>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">今すぐ始めましょう</h2>
            <p className="mb-8 text-xl max-w-2xl mx-auto">
              Post Writerで、あなたのブログ体験を次のレベルに引き上げましょう。無料で始められ、簡単に使えます。
            </p>
            <Link href="/register" className={cn(buttonVariants({ size: "lg", variant: "secondary" }))}>
              無料アカウントを作成
            </Link>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}

const features = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
    title: "簡単な投稿",
    description: "直感的なインターフェースで、誰でも簡単に記事を投稿できます。",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>,
    title: "コメント機能",
    description: "読者とのインタラクションを促進するコメント機能を搭載しています。",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "高速な読み込み",
    description: "Next.jsの最適化により、高速な読み込みを実現しています。",
  },
];

const steps = [
  {
    title: "アカウント作成",
    description: "簡単な登録プロセスでアカウントを作成します。",
  },
  {
    title: "ブログのセットアップ",
    description: "ブログの基本設定を行い、テーマをカスタマイズします。",
  },
  {
    title: "記事を書く",
    description: "直感的なエディターで記事を作成し、公開します。",
  },
  {
    title: "読者と交流",
    description: "コメント機能を通じて読者とコミュニケーションを取ります。",
  },
];

const testimonials = [
  {
    content: "Post Writerは私のブログ運営に革命をもたらしました。使いやすさと機能性が素晴らしいです。",
    author: "田中 太郎",
    title: "プロブロガー",
    avatar: "/images/avatar-1.jpg",
  },
  {
    content: "他のプラットフォームを使っていましたが、Post Writerに切り替えて正解でした。管理が簡単で、読者との交流も増えました。",
    author: "佐藤 花子",
    title: "ライフスタイルブロガー",
    avatar: "/images/avatar-2.jpg",
  },
  {
    content: "初心者でも簡単に使えるのが魅力です。サポートも親切で、安心して利用できています。",
    author: "鈴木 一郎",
    title: "テックブロガー",
    avatar: "/images/avatar-3.jpg",
  },
];

const pricingPlans = [
  {
    name: "無料プラン",
    price: "¥0/月",
    features: [
      "10記事/月まで",
      "基本的な分析ツール",
      "コミュニティサポート",
    ],
    link: "/register",
  },
  {
    name: "プロプラン",
    price: "¥1,980/月",
    features: [
      "無制限の記事",
      "高度な分析ツール",
      "優先サポート",
      "カスタムドメイン",
    ],
    link: "/register?plan=pro",
  },
  {
    name: "ビジネスプラン",
    price: "¥4,980/月",
    features: [
      "すべてのプロプラン機能",
      "複数ユーザー管理",
      "API アクセス",
      "専属サポート",
    ],
    link: "/register?plan=business",
  },
];

const latestPosts = [
  {
    title: "最新のブログ記事",
    excerpt: "最新のブログ記事の概要",
    slug: "/latest-post",
  },
  {
    title: "人気のある記事",
    excerpt: "人気のある記事の概要",
    slug: "/popular-post",
  },
  {
    title: "新しい機能の紹介",
    excerpt: "新しい機能の概要",
    slug: "/new-feature",
  },
];