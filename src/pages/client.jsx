import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://guhgadeecqnjvdrfgroc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1aGdhZGVlY3FuanZkcmZncm9jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NTU1NjMsImV4cCI6MjAyMTEzMTU2M30.P7Sa9V5P6OlzcSXJ_EICMMQsmenMEzbUjrwYcWQ5rUI";
export const supabase = createClient(supabaseUrl, supabaseKey);
