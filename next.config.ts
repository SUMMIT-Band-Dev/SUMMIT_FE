import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* 상위 폴더에 다른 lockfile이 있을 때 추적 루트 고정 (빌드 경고 방지) */
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: '/practice-room',
        destination: '/reservation',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
