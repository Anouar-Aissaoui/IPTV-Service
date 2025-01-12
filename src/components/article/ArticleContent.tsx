import React from 'react';
import { format } from 'date-fns';
import { Card, CardContent } from "@/components/ui/card";

interface ArticleContentProps {
  article: any;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ article }) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-muted-foreground mb-4">{article.description}</p>
        <div className="text-sm text-muted-foreground">
          Published on {format(new Date(article.published_at), 'MMMM dd, yyyy')}
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        {/* Introduction */}
        <div className="mb-8">
          <p>{article.content.introduction}</p>
          <div className="bg-yellow-900/20 border border-yellow-900/30 p-4 rounded-lg my-6">
            <h2 className="text-xl font-semibold mb-2">Important Notice</h2>
            <p>{article.content.disclaimer}</p>
          </div>
        </div>

        {/* Providers List */}
        <div className="mt-8 space-y-8">
          {article.content.providers?.map((provider: any, index: number) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {index + 1}. {provider.name}
                </h2>
                <p className="text-muted-foreground mb-4">{provider.subtitle}</p>
                
                <h3 className="text-xl font-semibold mb-2">Features:</h3>
                <ul className="list-disc pl-6 mb-4">
                  {provider.features.map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Pros:</h3>
                    <ul className="list-disc pl-6 text-green-500">
                      {provider.pros.map((pro: string, i: number) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cons:</h3>
                    <ul className="list-disc pl-6 text-red-500">
                      {provider.cons.map((con: string, i: number) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">Pricing:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(provider.pricing).map(([period, price]: [string, any]) => (
                    <div key={period} className="bg-card/50 p-4 rounded-lg text-center">
                      <div className="font-semibold">
                        {period.replace('_', ' ').charAt(0).toUpperCase() + period.slice(1).replace('_', ' ')}
                      </div>
                      <div className="text-xl font-bold">${price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conclusion */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
          <p>{article.content.conclusion}</p>
        </div>

        {/* FAQs */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {article.content.faqs.map((faq: any, index: number) => (
              <div key={index} className="bg-card/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};