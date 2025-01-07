import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { createClient } from '@supabase/supabase-js';
import App from './App';
import './i18n/i18n';

export async function render(url: string, supabaseUrl: string, supabaseKey: string) {
  // Initialize Supabase client
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Pre-fetch any data needed for SSR
  const { data: seoMetrics } = await supabase
    .from('seo_metrics')
    .select('*')
    .eq('route', url)
    .maybeSingle();

  const context = {
    seoMetrics,
  };

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return { html, context };
}