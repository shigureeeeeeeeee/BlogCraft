'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PenSquare, Eye, Share2, BarChart3, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/login')
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {isMenuOpen && (
        <nav className="md:hidden px-4 py-2 bg-background border-b">
          <Link className="block py-2" href="#features" onClick={() => setIsMenuOpen(false)}>
            機能
          </Link>
          <Link className="block py-2" href="#testimonials" onClick={() => setIsMenuOpen(false)}>
            ユーザーの声
          </Link>
          <Link className="block py-2" href="#pricing" onClick={() => setIsMenuOpen(false)}>
            料金
          </Link>
          <Link className="block py-2" href="#faq" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-50 via-white to-pink-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    BlogCraftで、<br />ブログ作成を芸術に
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    BlogCraftで、あなたのアイデアを世界に発信しましょう。直感的な操作で、プロフェッショナルなブログを簡単に作成・管理できます。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90" onClick={handleGetStarted}>
                    無料で始める
                  </Button>
                  <Button variant="outline" className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors hover:bg-accent hover:text-accent-foreground">
                    デモを見る
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <img
                  alt="BlogCraft Dashboard"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/images/app-screenshot.png" //もっといい画像を用意する。
                  width="550"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              主な機能
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid gap-1"
              >
                <PenSquare className="w-10 h-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold text-center">簡単な記事作成</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  直感的なエディタで、美しい記事を簡単に作成できます。画像やビデオの挿入も簡単です。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid gap-1"
              >
                <Eye className="w-10 h-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold text-center">リアルタイムプレビュー</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  編集中でも、実際の表示を確認できるリアルタイムプレビュー機能を搭載しています。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid gap-1"
              >
                <Share2 className="w-10 h-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold text-center">簡単な共有と連携</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  SNSへの共有も簡単。各種プラットフォームとの連携で、より広い読者層にリーチできます。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid gap-1"
              >
                <BarChart3 className="w-10 h-10 mx-auto text-primary" />
                <h3 className="text-lg font-bold text-center">詳細な分析</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  記事のパフォーマンスを詳細に分析。読者の行動を理解し、コンテンツを最適化できます。
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="testimonials">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              ユーザーの声
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-850 justify-between"
              >
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  "BlogSaaSのおかげで、ブログ運営が格段に楽になりました。直感的な操作性と豊富な機能に大満足です！"
                </p>
                <div>
                  <p className="font-semibold">田中 花子</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">フリーランスライター</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-850 justify-between"
              >
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  "分析機能が素晴らしいです。読者の興味を把握し、コンテンツを最適化できるようになりました。"
                </p>
                <div>
                  <p className="font-semibold">佐藤 太郎</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">マーケティングマネージャー</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-850 justify-between"
              >
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  "他のプラットフォームとの連携が簡単で、ブログの拡散が容易になりました。おかげで読者が大幅に増えました。"
                </p>
                <div>
                  <p className="font-semibold">鈴木 美咲</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">起業家</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              料金プラン
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200 dark:border-gray-700"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center">無料プラン</h3>
                  <div className="mt-4 text-center text-gray-500 dark:text-gray-400">¥0/月</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>5記事/月</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>基本的な分析</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>コミュニティサポート</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">選択する</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200 dark:border-gray-700 relative"
              >
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  人気
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-center">プロプラン</h3>
                  <div className="mt-4 text-center text-gray-500 dark:text-gray-400">¥2,000/月</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>無制限の記事</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>高度な分析</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>カスタムドメイン</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>優先サポート</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">選択する</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800 justify-between border border-gray-200 dark:border-gray-700"
              >
                <div>
                  <h3 className="text-2xl font-bold text-center">エンタープライズ</h3>
                  <div className="mt-4 text-center text-gray-500 dark:text-gray-400">お問い合わせください</div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>すべてのプロ機能</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>専任サポート</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>カスタム開発</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="text-green-500 mr-2 h-4 w-4" />
                      <span>SLA保証</span>
                    </li>
                  </ul>
                </div>
                <Button className="mt-6">お問い合わせ</Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="faq">
          <div className="container px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12"
            >
              よくある質問
            </motion.h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>BlogSaaSは初心者でも使えますか？</AccordionTrigger>
                <AccordionContent>
                  はい、BlogSaaSは初心者にも使いやすいように設計されています。直感的なインターフェースと詳細なガイドにより、ブログ作成の経験がない方でも簡単に始められます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>既存のブログを移行できますか？</AccordionTrigger>
                <AccordionContent>
                  はい、可能です。BlogSaaSは主要なブログプラットフォームからの移行をサポートしています。詳細な手順ガイドを用意していますので、スムーズに移行できます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>カスタムドメインは使用できますか？</AccordionTrigger>
                <AccordionContent>
                  プロプラン以上では、カスタムドメインの使用が可能です。お好みのドメインを設定して、ブランディングを強化できます。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>サポートはありますか？</AccordionTrigger>
                <AccordionContent>
                  はい、すべてのプランでサポートを提供しています。無料プランではコミュニティサポート、プロプラン以上では優先サポートが利用可能です。エンタープライズプランでは、専任のサポートチームがつきます。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">今すぐ始めましょう</h2>
                <p className="max-w-[900px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BlogSaaSで、あなたのブログ体験を次のレベルに引き上げましょう。簡単な操作で、プロフェッショナルなブログを作成・管理できます。
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-sm space-y-2"
              >
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                    placeholder="メールアドレスを入力"
                    type="email"
                  />
                  <Button type="submit" variant="secondary">無料で始める</Button>
                </form>
                <p className="text-xs text-primary-foreground/60">
                  登録することで、
                  <Link className="underline underline-offset-2" href="#">
                    利用規約
                  </Link>
                  に同意したことになります。
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}