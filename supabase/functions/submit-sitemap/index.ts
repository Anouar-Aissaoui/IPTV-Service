import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const GOOGLE_URL = "https://www.google.com/ping?sitemap="
const YANDEX_URL = "https://www.yandex.com/webmaster/site/indexNow?url="

const submitSitemap = async (sitemapUrl: string) => {
  try {
    // Submit to Google
    const googleResponse = await fetch(`${GOOGLE_URL}${sitemapUrl}`)
    console.log('Google submission status:', googleResponse.status)

    // Submit to Yandex
    const yandexResponse = await fetch(`${YANDEX_URL}${sitemapUrl}`)
    console.log('Yandex submission status:', yandexResponse.status)

    return {
      google: googleResponse.status,
      yandex: yandexResponse.status
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
        message: 'Sitemap submitted successfully',
        result
      }),
      { 
        headers: { "Content-Type": "application/json" },
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