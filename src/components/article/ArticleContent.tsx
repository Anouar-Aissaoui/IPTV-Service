import React from 'react';
import { format } from 'date-fns';

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
        <div dangerouslySetInnerHTML={{ __html: article.content.introduction }} />

        {/* Providers List */}
        <div className="mt-8">
          {article.content.providers?.map((provider: any, index: number) => (
            <section key={index} className="mb-12 border-b pb-8">
              <h2 className="text-2xl font-bold mb-4">
                {index + 1}. {provider.name}
              </h2>
              
              <h3 className="text-xl font-semibold mb-2">Features:</h3>
              <ul className="list-disc pl-6 mb-4">
                {provider.features.map((feature: string, i: number) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              {provider.pros && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Pros:</h3>
                  <ul className="list-disc pl-6 mb-4">
                    {provider.pros.map((pro: string, i: number) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </>
              )}

              {provider.cons && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Cons:</h3>
                  <ul className="list-disc pl-6 mb-4">
                    {provider.cons.map((con: string, i: number) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </>
              )}

              {provider.pricing && (
                <>
                  <h3 className="text-xl font-semibold mb-2">Pricing:</h3>
                  <ul className="list-none pl-6 mb-4">
                    {Object.entries(provider.pricing).map(([period, price]: [string, any]) => (
                      <li key={period}>
                        {period.charAt(0).toUpperCase() + period.slice(1)}: ${price}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          ))}
        </div>

        {/* Conclusion */}
        {article.content.conclusion && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
            <div dangerouslySetInnerHTML={{ __html: article.content.conclusion }} />
          </section>
        )}

        {/* FAQs */}
        {article.content.faqs && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {article.content.faqs.map((faq: any, index: number) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};