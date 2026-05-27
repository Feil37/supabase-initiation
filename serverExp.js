import express from "express";
import { createClient } from "@supabase/supabase-js";
import { loadEnvFile } from 'node:process';

loadEnvFile('.env');
const supabase = createClient('https://vknomnjtxgronuscetmo.supabase.co', process.env.API_KEY);

// On déclare l'app
const app = express();
const PORT = 3000;

app.get('/avis_clients', async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", '*')
  res.setHeader("Access-Control-Allow-Methods", 'OPTIONS, GET')
  const { data, err } = await supabase.from('avis_clients').select('*');
  res.end(JSON.stringify(data));
});

app.listen(PORT, () => {
  {
    console.log(`Server running at http://localhost:${PORT}/`)
  }
});