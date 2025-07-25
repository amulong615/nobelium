import { useConfig } from '@/lib/config'
import Vercel from '@/components/Vercel'

const Footer = ({ fullWidth }) => {
  const BLOG = useConfig()

  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since

  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6 text-center space-y-2">
        <div>
          © {from && from !== y ? `${from} —— ` : ''}
          {y} {BLOG.author} 版权所有{' '}
          <a
            href="https://amulong.cc"
            className="hover:underline hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            amulong.cc
          </a>
        </div>
        <div>
          联系邮箱：{' '}
          <a
            href="mailto:a.mulong@qq.com"
            className="hover:underline hover:text-blue-500"
          >
            a.mulong@qq.com
          </a>
        </div>
        <div>
          <a
            href="https://beian.miit.gov.cn"
            className="hover:underline hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            蒙ICP备2024065688号-1
          </a>
        </div>
      </div>
      <div className="mt-2 mb-6 text-center">
        <Vercel />
      </div>
    </div>
  )
}

export default Footer
