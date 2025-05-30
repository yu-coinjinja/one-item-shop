import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'

export function ReturnButton() {
  const t = useTranslations('common')

  return (
    <div className="mt-8 text-center">
      <Link
        href="/"
        className="inline-flex items-center bg-black hover:bg-gray-800 px-6 py-3 rounded-lg font-medium text-white transition-colors"
      >
        {t('back')} to Store
      </Link>
    </div>
  )
}
