import { useTranslations } from 'next-intl'

export function ContactInfo() {
  const t = useTranslations('footer')

  return (
    <div className="bg-gray-50 dark:bg-gray-800 mt-8 p-6 rounded-lg">
      <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-100 text-lg">
        {t('contact')}
      </h4>
      <div className="space-y-2 text-gray-600 dark:text-gray-300">
        <p>
          <strong>Email:</strong> support@takashiyamamura.com
        </p>
        <p>
          <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (JST)
        </p>
      </div>
    </div>
  )
}
