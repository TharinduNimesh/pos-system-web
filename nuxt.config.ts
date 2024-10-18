// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || "http://localhost:5000/api",
      supabaseUrl: process.env.SUPABASE_URL || "http://localhost:5000",
      supabaseKey: process.env.SUPABASE_ANON_KEY || "supabase-key",
    },
  },
});
