import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const GOOGLE_URL = "https://www.google.com/ping?sitemap="
const BING_URL = "https://www.bing.com/ping?sitemap="

const submitSitemap = async (sitemapUrl: string) => {
  try {
    // Submit to Google
    const googleResponse = await fetch(`${GOOGLE_URL}${sitemapUrl}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; IPTVServiceBot/1.0; +https://www.iptvservice.site)'
      }
    })
    console.log('Google submission status:', googleResponse.status)

    // Submit to Bing
    const bingResponse = await fetch(`${BING_URL}${sitemapUrl}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; IPTVServiceBot/1.0; +https://www.iptvservice.site)'
      }
    })
    console.log('Bing submission status:', bingResponse.status)

    return {
      google: googleResponse.status,
      bing: bingResponse.status
    }
  } catch (error) {
    console.error('Error submitting sitemap:', error)
    throw error
  }
}

serve(async (req) => {
  try {
    const { sitemapUrl } = await req.json()
    
    if (!sitemapUrl) {
      return new Response(
        JSON.stringify({ error: 'Sitemap URL is required' }),
        { status: 400 }
      )
    }

    const result = await submitSitemap(sitemapUrl)

    return new Response(
      JSON.stringify({
        message: 'Sitemap submitted successfully to Google and Bing',
        result
      }),
      { 
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        status: 200 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    )
  }
})