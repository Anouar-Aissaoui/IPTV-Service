import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const SEARCH_ENGINES = {
  google: "https://www.google.com/ping?sitemap=",
  bing: "https://www.bing.com/ping?sitemap=",
  yandex: "https://www.yandex.com/webmaster/site/indexNow?url=",
  index_now: "https://api.indexnow.org/indexnow"
};

interface SubmissionResult {
  engine: string;
  status: number;
  success: boolean;
  message?: string;
}

const submitToSearchEngine = async (engine: string, url: string, sitemapUrl: string): Promise<SubmissionResult> => {
  try {
    const response = await fetch(`${url}${sitemapUrl}`);
    return {
      engine,
      status: response.status,
      success: response.ok,
      message: response.ok ? 'Submitted successfully' : 'Submission failed'
    };
  } catch (error) {
    console.error(`Error submitting to ${engine}:`, error);
    return {
      engine,
      status: 500,
      success: false,
      message: error.message
    };
  }
};

const submitSitemap = async (sitemapUrl: string) => {
  const results: SubmissionResult[] = [];

  // Submit to each search engine
  for (const [engine, url] of Object.entries(SEARCH_ENGINES)) {
    const result = await submitToSearchEngine(engine, url, sitemapUrl);
    results.push(result);
    
    // Log the result
    console.log(`${engine} submission:`, result);
  }

  return results;
};

serve(async (req) => {
  try {
    const { sitemapUrl } = await req.json();
    
    if (!sitemapUrl) {
      return new Response(
        JSON.stringify({ error: 'Sitemap URL is required' }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const results = await submitSitemap(sitemapUrl);
    const allSuccessful = results.every(r => r.success);

    return new Response(
      JSON.stringify({
        message: allSuccessful ? 'Sitemap submitted successfully to all search engines' : 'Some submissions failed',
        results
      }),
      { 
        headers: { "Content-Type": "application/json" },
        status: allSuccessful ? 200 : 207 // 207 Multi-Status for partial success
      }
    );
  } catch (error) {
    console.error('Error in submit-sitemap function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        message: error.message 
      }),
      { 
        headers: { "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});