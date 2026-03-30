import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || "placeholder";

// Use lazy initialization to avoid build-time errors when env vars aren't set
let _supabase: SupabaseClient | null = null;
let _supabaseAdmin: SupabaseClient | null = null;

export const supabase = (() => {
  if (!_supabase) {
    _supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _supabase;
})();

export const supabaseAdmin = (() => {
  if (!_supabaseAdmin) {
    _supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);
  }
  return _supabaseAdmin;
})();

/*
-- Supabase SQL to create tables:

CREATE TABLE leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  phone text,
  email text NOT NULL,
  service text,
  message text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  first_name text,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE downloads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  first_name text,
  download_id text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE article_feedback (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL,
  vote text NOT NULL CHECK (vote IN ('yes', 'no')),
  type text NOT NULL CHECK (type IN ('blog', 'knowledge')),
  created_at timestamptz DEFAULT now()
);
*/
