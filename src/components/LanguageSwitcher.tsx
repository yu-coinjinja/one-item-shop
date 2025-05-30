'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { routing } from '@/i18n/routing'

const localeNames = {
  en: 'English',
  ja: '日本語',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  ko: '한국어',
} as const

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('language')
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (locale: string) => {
    router.push(pathname, { locale })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 font-medium text-gray-700 hover:text-gray-900 text-sm transition-colors cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{t('select')}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="right-0 z-50 absolute bg-white shadow-lg mt-2 border border-gray-200 rounded-md w-48">
          <div className="py-1">
            {routing.locales.map(locale => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className="block hover:bg-gray-100 px-4 py-2 w-full text-gray-700 text-sm text-left transition-colors"
              >
                {localeNames[locale as keyof typeof localeNames]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
