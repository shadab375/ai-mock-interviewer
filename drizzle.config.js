/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:ULW9FyIzuGM1@ep-shrill-rice-a5etiy22.us-east-2.aws.neon.tech/neondb?sslmode=requireAIzaSyAVt2QAikwW-tnSlJNuVmny3TLcgMTK7zE',
  }
};