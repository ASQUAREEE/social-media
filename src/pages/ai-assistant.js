import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AIAssistant from '@/components/AIAssistant'
import { Card, CardContent } from "@/components/ui/card"

export default function AIAssistantPage() {
  return (
    <>
      <Head>
        <title>AI Social Media Assistant - AI Copilot</title>
        <meta name="description" content="Interact with our AI assistant for social media tasks and content creation." />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">AI Social Media Assistant</h1>
          <Card className="mb-8">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">How to use:</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Select the social media platform you're creating content for.</li>
                <li>Choose a task from the dropdown or enter your custom task.</li>
                <li>Click "Generate Content" to receive AI-generated content.</li>
                <li>Review, edit, and use the generated content for your social media posts!</li>
              </ol>
            </CardContent>
          </Card>
          <AIAssistant />
        </main>
        <Footer />
      </div>
    </>
  )
}