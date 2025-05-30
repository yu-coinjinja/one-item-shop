interface PolicySectionProps {
  title: string
  children: React.ReactNode
}

export function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="mb-8">
      <h3 className="mb-4 pb-2 border-gray-200 dark:border-gray-700 border-b font-semibold text-gray-800 dark:text-gray-100 text-xl">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-300 leading-relaxed">{children}</div>
    </section>
  )
}
