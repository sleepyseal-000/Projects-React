import { createClient } from '@supabase/supabase-js'

const URL = 'https://vlzliucqguxydpcbstvd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsemxpdWNxZ3V4eWRwY2JzdHZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwODI5MDksImV4cCI6MTk5NjY1ODkwOX0.e9zvNAtYzsgIne0HcvJD1lRFw5ifWnXmxZcSHeAMcDQ';

export const supabase = createClient(URL, API_KEY);
