import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Serves the Vercel functions in /api during `npm run dev` (Vercel runs them in production)
const vercelApiDev = (): Plugin => ({
  name: 'vercel-api-dev',
  configureServer(server) {
    server.middlewares.use('/api', async (req, res, next) => {
      const url = new URL(req.url ?? '/', 'http://localhost')
      const route = url.pathname.replace(/^\/+|\/+$/g, '')
      if (!/^[a-z0-9-]+$/.test(route)) return next()

      try {
        const mod = await server.ssrLoadModule(`/api/${route}.ts`)
        const handler = mod[req.method ?? 'GET']
        if (typeof handler !== 'function') {
          res.statusCode = 405
          return res.end()
        }

        const chunks: Buffer[] = []
        for await (const chunk of req) chunks.push(chunk as Buffer)
        const hasBody = req.method !== 'GET' && req.method !== 'HEAD'
        const request = new Request(`http://localhost/api/${route}${url.search}`, {
          method: req.method,
          headers: req.headers as Record<string, string>,
          body: hasBody ? Buffer.concat(chunks) : undefined,
        })

        const response: Response = await handler(request)
        res.statusCode = response.status
        response.headers.forEach((value, key) => res.setHeader(key, value))
        res.end(Buffer.from(await response.arrayBuffer()))
      } catch (err) {
        server.config.logger.error(String(err))
        res.statusCode = 500
        res.end(JSON.stringify({ error: 'Internal error' }))
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Expose non-VITE_ vars (CAL_*) from .env files to the dev API handlers
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  return {
    plugins: [react(), vercelApiDev()],
  }
})
