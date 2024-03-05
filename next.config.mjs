/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    AIRTABLE_PRIVATE_KEY: process.env.AIRTABLE_PRIVATE_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
    CHAT_GPT_ORG: process.env.CHAT_GPT_ORG,
    CHAT_GPT_API_KEY: process.env.CHAT_GPT_API_KEY,
  },
}

export default nextConfig
