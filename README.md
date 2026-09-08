# Airfare Index India — Ready-to-Deploy MVP

A Vercel-ready Next.js prototype for Problem Statement 26056.

## What is already working
- Interactive dashboard
- 30-day Airfare Price Index chart
- Route-wise movement heatmap
- Advance-purchase / lead-time elasticity chart
- Quote explorer with route, lead-time and airline filters
- CSV export
- JSON APIs at `/api/index` and `/api/quotes`
- Responsive dark UI
- No database or environment variables required for the demo

## Deploy to Vercel
1. Upload this folder to a GitHub repository.
2. In Vercel, click **Add New → Project** and import the repository.
3. Keep the detected framework as Next.js.
4. Click **Deploy**. No environment variables are required for the demo.

## Important hackathon note
The included dataset is deterministic synthetic demo data. It makes the website fully functional immediately, but it should not be presented as live airline data.

For the production ingestion layer, use compliant airline/OTA APIs or permitted scraping jobs outside Vercel serverless functions. A separate scheduled worker can write normalized observations to PostgreSQL/Supabase, while this Next.js app reads the data and computes/publishes the index.

## API examples
- `/api/index` returns index series, route indices, lead-time elasticity and methodology metadata.
- `/api/quotes` returns normalized quote observations.

## Index logic for the PPT
Use a fixed route basket and fixed weights. For each route, compute a comparable weighted average total fare for each observation date, divide by the base-period fare, multiply by 100, then aggregate using route weights. Keep the basket and weights fixed during the comparison period.
