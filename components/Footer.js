import { useConfig } from '@/lib/config'
import Vercel from '@/components/Vercel'

const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()
 
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
return (
  <footer className="mt-6 w-full px-4 md:px-8 border-t border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl mx-auto py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>
        © {from && from !== y ? `${from} —— ` : ''}
        {y} <span className="font-semibold">{BLOG.author}</span> 版权所有 ·{' '}
        <a
          href="https://amulong.cc"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500"
        >
          amulong.cc
        </a>{' '}
        ·{' '}
        <a
          href="mailto:a.mulong@qq.com"
          className="underline hover:text-blue-500"
        >
          联系邮箱
        </a>{' '}
        ·{' '}
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500"
        >
          蒙ICP备2024065688号-1
        </a>
      </p>
    </div>
  </footer>
)
}
export default Footer
