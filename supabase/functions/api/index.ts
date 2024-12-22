// Follow Deno's standard library imports
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the route from the URL
    const url = new URL(req.url);
    const path = url.pathname.split('/').filter(Boolean);

    // Example of using environment variables
    const apiKey = Deno.env.get("MY_API_KEY");
    
    // Basic routing example
    switch(path[0]) {
      case 'hello':
        return new Response(
          JSON.stringify({ message: 'Hello World!' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      
      case 'env':
        return new Response(
          JSON.stringify({ 
            message: 'Environment variable example',
            hasApiKey: !!apiKey 
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      
      default:
        return new Response(
          JSON.stringify({ message: 'Welcome to the API' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('Error:', error.message);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});