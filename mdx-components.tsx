import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override default HTML elements with styled versions
    h1: ({ children }) => (
      <h1 className="mb-8 font-bold text-gray-900 text-4xl">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 first:mt-0 mb-8 pb-4 border-gray-200 border-b font-bold text-gray-900 text-2xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 font-medium text-gray-700 text-2xl">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-6 text-gray-600 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="space-y-2 mb-6 text-gray-600 list-disc list-inside">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="space-y-2 mb-6 text-gray-600 list-decimal list-inside">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-indigo-600 hover:text-indigo-800 hover:underline no-underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mb-6 pl-6 border-gray-300 border-l-4 text-gray-700 italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 px-2 py-1 rounded font-mono text-gray-800 text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 mb-6 p-4 rounded-lg overflow-x-auto">
        {children}
      </pre>
    ),
    ...components,
  }
}
