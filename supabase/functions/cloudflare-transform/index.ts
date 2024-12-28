import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const CLOUDFLARE_API_KEY = Deno.env.get('CLOUDFLARE_API_KEY') || '';
const CLOUDFLARE_ZONE_ID = Deno.env.get('CLOUDFLARE_ZONE_ID') || '';

interface CloudflareResponse {
  success: boolean;
  errors: any[];
  messages: any[];
  result: any;
}

async function getTransformationSettings(): Promise<CloudflareResponse> {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/settings/transformations`,
    {
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  
  return response.json();
}

async function updateTransformationSettings(settings: any): Promise<CloudflareResponse> {
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/settings/transformations`,
    {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    }
  );
  
  return response.json();
}

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const method = req.method;

    // Handle CORS preflight requests
    if (method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, PATCH, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // Get transformation settings
    if (method === "GET") {
      const settings = await getTransformationSettings();
      return new Response(JSON.stringify(settings), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Update transformation settings
    if (method === "PATCH") {
      const body = await req.json();
      const settings = await updateTransformationSettings(body);
      return new Response(JSON.stringify(settings), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
});