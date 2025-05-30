# PRD: Internationalization with Next-Intl

## Overview
This PRD outlines the implementation of internationalization (i18n) for the Takashi Yamamura single-product e-commerce store using Next-Intl. The goal is to expand market reach by supporting Japanese, Simplified Chinese, Traditional Chinese, and Korean languages while maintaining the elegant design and user experience.

## Business Objectives

### Primary Goals
- **Market Expansion**: Reach Japanese, Chinese, and Korean markets where idol merchandise has strong demand
- **User Experience**: Provide native language experience for international customers
- **Revenue Growth**: Increase sales through localized shopping experiences
- **Brand Accessibility**: Make Takashi Yamamura's brand accessible to broader Asian markets

### Success Metrics
- 25% increase in international traffic within 3 months
- 15% improvement in conversion rates for non-English users
- Reduced bounce rate for international visitors
- Positive user feedback on localized experience

## Target Languages & Markets

### Supported Locales
1. **Japanese (ja)** - Primary target market for idol merchandise
2. **Simplified Chinese (zh-CN)** - Mainland China market
3. **Traditional Chinese (zh-TW)** - Taiwan, Hong Kong markets
4. **Korean (ko)** - South Korean market
5. **English (en)** - Default/fallback language

### Market Research Insights
- Japanese idol merchandise market: High engagement, premium pricing acceptance
- Chinese markets: Growing interest in Japanese pop culture
- Korean market: Strong K-pop culture with crossover appeal
- All markets prefer native language shopping experiences

## Technical Implementation

### Architecture Overview
- **Framework**: Next-Intl with App Router
- **Routing Strategy**: Subdirectory routing (`/ja`, `/zh-cn`, `/zh-tw`, `/ko`)
- **Message Management**: JSON-based translation files for UI components
- **Static Content**: MDX files for locale-specific static pages
- **Fallback Strategy**: English as default with graceful degradation

### URL Structure
```
/ (English - default)
/ja (Japanese)
/zh-cn (Simplified Chinese)
/zh-tw (Traditional Chinese)
/ko (Korean)
```

### File Structure
```
src/
├── i18n/
│   ├── request.ts          # Next-Intl configuration
│   └── routing.ts          # Routing configuration
├── messages/
│   ├── en.json            # English UI translations
│   ├── ja.json            # Japanese UI translations
│   ├── zh-cn.json         # Simplified Chinese UI translations
│   ├── zh-tw.json         # Traditional Chinese UI translations
│   └── ko.json            # Korean UI translations
├── app/
│   └── [locale]/          # Localized routes
│       ├── layout.tsx     # Localized layout
│       ├── page.tsx       # Main product page
│       ├── success/
│       │   ├── page.tsx   # Success page component
│       │   ├── en.mdx     # English success content
│       │   ├── ja.mdx     # Japanese success content
│       │   ├── zh-cn.mdx  # Simplified Chinese success content
│       │   ├── zh-tw.mdx  # Traditional Chinese success content
│       │   └── ko.mdx     # Korean success content
│       ├── privacy-policy/
│       │   ├── page.tsx   # Privacy policy component
│       │   ├── en.mdx     # English privacy policy
│       │   ├── ja.mdx     # Japanese privacy policy
│       │   ├── zh-cn.mdx  # Simplified Chinese privacy policy
│       │   ├── zh-tw.mdx  # Traditional Chinese privacy policy
│       │   └── ko.mdx     # Korean privacy policy
│       ├── terms-of-service/
│       │   ├── page.tsx   # Terms component
│       │   ├── en.mdx     # English terms
│       │   ├── ja.mdx     # Japanese terms
│       │   ├── zh-cn.mdx  # Simplified Chinese terms
│       │   ├── zh-tw.mdx  # Traditional Chinese terms
│       │   └── ko.mdx     # Korean terms
│       ├── shipping-policy/
│       │   ├── page.tsx   # Shipping policy component
│       │   ├── en.mdx     # English shipping policy
│       │   ├── ja.mdx     # Japanese shipping policy
│       │   ├── zh-cn.mdx  # Simplified Chinese shipping policy
│       │   ├── zh-tw.mdx  # Traditional Chinese shipping policy
│       │   └── ko.mdx     # Korean shipping policy
│       └── api/           # API routes (locale-aware)
├── components/
│   ├── ui/               # Reusable UI components
│   └── mdx/              # MDX-specific components
```

## Content Localization Strategy

### Content Architecture

#### UI Components (JSON Messages)
- Navigation elements
- Form labels and buttons
- Error/success messages
- Interactive components
- Dynamic content placeholders

#### Static Content (MDX Files)
- Legal pages (privacy policy, terms of service, shipping policy)
- Success page content
- About/company information
- Help and support content
- Product descriptions and specifications

### Translation Priorities

#### High Priority (Phase 1)
- **UI Messages**: Buy button, navigation, form labels, error messages
- **Core MDX Content**: Privacy policy, terms of service, success page
- **Product Information**: Basic product name and description

#### Medium Priority (Phase 2)
- **Extended MDX Content**: Detailed shipping policy, help content
- **Email Templates**: Order confirmation notifications
- **SEO Content**: Meta descriptions, page titles

#### Low Priority (Phase 3)
- **Marketing Content**: Social media descriptions
- **Advanced Features**: Blog content, news updates (if added)
- **Customer Support**: FAQ sections, detailed help guides

### Translation Guidelines

#### Japanese (ja)
- **Tone**: Polite and respectful (敬語 appropriate for fan interactions)
- **Currency**: JPY (¥)
- **Cultural Notes**: 
  - Use appropriate honorifics for Takashi Yamamura
  - Consider seasonal greetings and cultural events
  - Idol-specific terminology and fan culture references

#### Simplified Chinese (zh-CN)
- **Tone**: Professional yet friendly
- **Currency**: CNY (¥)
- **Cultural Notes**:
  - Simplified characters for mainland China
  - Consider local payment preferences (Alipay, WeChat Pay future integration)
  - Respect for cultural sensitivities

#### Traditional Chinese (zh-TW)
- **Tone**: Professional yet friendly
- **Currency**: TWD (NT$)
- **Cultural Notes**:
  - Traditional characters for Taiwan/Hong Kong
  - Local cultural references where appropriate
  - Consider regional variations

#### Korean (ko)
- **Tone**: Respectful and enthusiastic
- **Currency**: KRW (₩)
- **Cultural Notes**:
  - Appropriate honorific levels
  - K-pop culture familiarity
  - Local shopping preferences

## User Experience Design

### Language Selection
- **Auto-detection**: Browser language preference detection
- **Manual Selection**: Language switcher in header/footer
- **Persistence**: Remember user's language choice via cookies
- **Fallback**: Default to English for unsupported locales

### Localized Elements

#### Visual Design
- **Text Direction**: All target languages are LTR (no RTL considerations needed)
- **Font Support**: Ensure proper font rendering for CJK characters
- **Layout Adjustments**: Account for text expansion/contraction
- **Cultural Colors**: Consider color meanings in different cultures

#### Interactive Elements
- **Date/Time Formats**: Localized formatting
- **Number Formats**: Currency and decimal formatting
- **Address Forms**: Country-specific address formats
- **Phone Numbers**: International format support

### Responsive Considerations
- **Mobile-first**: Ensure CJK text readability on mobile devices
- **Touch Targets**: Adequate sizing for different input methods
- **Loading States**: Localized loading messages

## Technical Requirements

### Next-Intl Configuration

#### Installation & Setup
```bash
bun add next-intl @next/mdx @mdx-js/loader @mdx-js/react
```

#### Core Configuration Files
1. **next.config.ts**: Next-Intl plugin integration with MDX support
2. **src/i18n/request.ts**: Request configuration
3. **src/i18n/routing.ts**: Routing configuration
4. **src/middleware.ts**: Locale detection and routing
5. **mdx-components.tsx**: Global MDX components configuration

#### Next.js Configuration with MDX
```typescript
// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withNextIntl(withMDX(nextConfig));
```

#### MDX Components Configuration
```typescript
// mdx-components.tsx
import type { MDXComponents } from 'mdx/types';
import { PolicySection, ContactInfo, OrderStatus, ReturnButton } from '@/components/mdx';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components for MDX content
    PolicySection,
    ContactInfo,
    OrderStatus,
    ReturnButton,
    // Override default HTML elements with styled versions
    h1: ({ children }) => <h1 className="text-3xl font-bold mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4">{children}</h2>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    ...components,
  };
}
```

#### Message Management
- **Format**: JSON files for UI components and dynamic content
- **Namespacing**: Organized by page/component functionality
- **Interpolation**: Support for dynamic values in UI messages
- **Pluralization**: Proper plural forms for each language

#### MDX Content Management
- **File Organization**: Locale-specific MDX files per static page
- **Component Integration**: Reusable React components within MDX
- **Rich Content**: Support for complex layouts, images, and interactive elements
- **Version Control**: Track changes to both content and structure
- **Translation Workflow**: Structured content easier for translators to manage

### Stripe Integration Updates

#### Multi-Currency Support
- **Currency Detection**: Based on user locale
- **Price Display**: Localized currency formatting
- **Checkout**: Currency-specific Stripe configuration

#### Localized Checkout
- **Address Forms**: Country-specific formats
- **Payment Methods**: Region-appropriate options
- **Success Messages**: Localized confirmation

### SEO Optimization

#### Hreflang Implementation
```html
<link rel="alternate" hreflang="en" href="https://store.com/" />
<link rel="alternate" hreflang="ja" href="https://store.com/ja" />
<link rel="alternate" hreflang="zh-CN" href="https://store.com/zh-cn" />
<link rel="alternate" hreflang="zh-TW" href="https://store.com/zh-tw" />
<link rel="alternate" hreflang="ko" href="https://store.com/ko" />
```

#### Localized Meta Tags
- **Title Tags**: Translated and culturally appropriate
- **Meta Descriptions**: Localized for each market
- **Open Graph**: Localized social media previews
- **Structured Data**: Multi-language schema markup

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Install and configure Next-Intl with MDX support
- [ ] Set up routing structure with `[locale]` segments
- [ ] Configure `@next/mdx` and `mdx-components.tsx`
- [ ] Create basic translation JSON files for UI components
- [ ] Create initial MDX files for core static pages (privacy, terms, success)
- [ ] Implement language switcher component
- [ ] Update main product page with Next-Intl hooks

### Phase 2: Core Features (Week 3-4)
- [ ] Complete MDX content for all static pages across all locales
- [ ] Develop reusable MDX components (`PolicySection`, `ContactInfo`, etc.)
- [ ] Localize checkout flow with JSON messages
- [ ] Update Stripe integration for multi-currency support
- [ ] Implement success page with MDX content loading
- [ ] Add email notification translations
- [ ] Test payment flows in all locales

### Phase 3: Content & Polish (Week 5-6)
- [ ] Complete all translation content (JSON + MDX)
- [ ] Implement SEO optimizations with hreflang tags
- [ ] Add cultural customizations and locale-specific styling
- [ ] Optimize MDX loading performance
- [ ] Test CJK character rendering across browsers
- [ ] Comprehensive cross-locale testing
- [ ] Translation quality review by native speakers

### Phase 4: Launch & Monitor (Week 7-8)
- [ ] Soft launch with limited traffic to test MDX performance
- [ ] Monitor analytics and user behavior across locales
- [ ] Gather user feedback on content quality and UX
- [ ] Performance optimization for MDX bundle sizes
- [ ] Bug fixes and content refinements
- [ ] Full launch announcement with localized marketing materials

### MDX-Specific Implementation Tasks

#### Week 1: MDX Setup
- [ ] Configure Next.js with both Next-Intl and MDX plugins
- [ ] Set up `mdx-components.tsx` with base styling
- [ ] Create template structure for static pages
- [ ] Implement dynamic MDX loading pattern
- [ ] Test basic MDX rendering with sample content

#### Week 2-3: Content Development
- [ ] Develop reusable MDX components for legal content
- [ ] Create English MDX content as baseline
- [ ] Implement error handling for missing MDX files
- [ ] Add proper TypeScript types for MDX components
- [ ] Test component integration within MDX content

#### Week 4-5: Localization
- [ ] Translate all MDX content to target languages
- [ ] Adapt content structure for cultural differences
- [ ] Implement locale-specific MDX components if needed
- [ ] Test content rendering across all locales
- [ ] Optimize for different text lengths and layouts

#### Week 6: Performance & Polish
- [ ] Optimize MDX bundle splitting and loading
- [ ] Implement proper caching strategies for MDX content
- [ ] Add loading states for MDX content
- [ ] Test performance with large MDX files
- [ ] Implement fallback strategies for failed MDX loads

## Quality Assurance

### Translation Quality
- **Native Speakers**: Review by native speakers for each language
- **Cultural Review**: Cultural appropriateness check
- **Context Accuracy**: Ensure translations fit the context
- **Consistency**: Maintain consistent terminology

### Technical Testing
- **Cross-browser**: Test CJK character rendering across different browsers
- **Mobile Devices**: Test on various mobile devices with different screen sizes
- **Payment Flows**: End-to-end testing for each locale and currency
- **Performance**: Load testing with different character sets and MDX content
- **MDX Rendering**: Test MDX component integration and dynamic loading
- **Bundle Size**: Monitor JavaScript bundle size with MDX content
- **Error Handling**: Test fallback behavior for missing MDX files
- **SEO**: Verify proper meta tag rendering for MDX pages

### User Testing
- **Native User Testing**: Test with users from each target market
- **Usability Testing**: Ensure intuitive navigation
- **Conversion Testing**: Monitor conversion rates by locale
- **Feedback Collection**: Implement feedback mechanisms

## Maintenance & Updates

### Content Management
- **Translation Updates**: Process for updating translations
- **New Content**: Workflow for adding new translatable content
- **Version Control**: Track translation versions and changes
- **Quality Control**: Regular review and updates

### Technical Maintenance
- **Next-Intl Updates**: Keep library updated
- **Performance Monitoring**: Monitor load times for different locales
- **Error Tracking**: Locale-specific error monitoring
- **Analytics**: Track usage patterns by language

## Risk Mitigation

### Technical Risks
- **Bundle Size**: Monitor JavaScript bundle size increase
- **Performance**: Ensure fast loading for all locales
- **SEO Impact**: Prevent negative SEO impact during migration
- **Fallback Strategy**: Robust fallback for missing translations

### Business Risks
- **Cultural Sensitivity**: Avoid cultural missteps
- **Legal Compliance**: Ensure compliance with local regulations
- **Market Reception**: Monitor market response and adapt
- **Support Capacity**: Prepare for increased support needs

## Success Criteria

### Technical Metrics
- [ ] Page load time < 3 seconds for all locales
- [ ] 100% translation coverage for core user flows
- [ ] Zero critical bugs in production
- [ ] 95%+ uptime across all localized routes

### Business Metrics
- [ ] 25% increase in international traffic
- [ ] 15% improvement in conversion rates for non-English users
- [ ] 90%+ user satisfaction scores for localized experience
- [ ] Successful payment processing in all target currencies

### User Experience Metrics
- [ ] Reduced bounce rate for international visitors
- [ ] Increased time on site for localized users
- [ ] Positive feedback on language quality
- [ ] Successful completion of purchase flows

## Future Considerations

### Additional Languages
- **Spanish (es)**: For Latin American markets
- **French (fr)**: For European markets
- **German (de)**: For German-speaking markets

### Advanced Features
- **Regional Pricing**: Dynamic pricing based on locale
- **Local Payment Methods**: Integration with regional payment providers
- **Cultural Customization**: Locale-specific design elements
- **Customer Support**: Multi-language customer support

### Technology Evolution
- **AI Translation**: Explore AI-assisted translation workflows
- **Real-time Translation**: Consider real-time translation features
- **Voice Interface**: Multi-language voice interactions
- **Accessibility**: Enhanced accessibility for different languages 

### MDX Content Strategy

#### Advantages of MDX for Static Pages
- **Rich Formatting**: Support for complex layouts, images, and interactive components
- **Locale-Specific Structure**: Different content organization per language/culture
- **Component Integration**: Embed React components within content
- **Maintainability**: Easier for translators to work with structured content
- **Flexibility**: Different page layouts and content flow per locale

#### MDX Implementation Pattern
Based on the [Next-Intl MDX documentation](https://next-intl.dev/docs/environments/mdx), each static page will follow this pattern:

```typescript
// src/app/[locale]/privacy-policy/page.tsx
import {notFound} from 'next/navigation';

export default async function PrivacyPolicyPage({params}) {
  const {locale} = await params;

  try {
    const Content = (await import(`./${locale}.mdx`)).default;
    return <Content />;
  } catch (error) {
    notFound();
  }
}
```

#### MDX Content Examples

**Legal Pages Structure:**
```markdown
// src/app/[locale]/privacy-policy/ja.mdx
import {PolicySection, ContactInfo} from '@/components/mdx';

# プライバシーポリシー

<PolicySection title="個人情報の収集について">
当サイトでは、お客様の個人情報を以下の目的で収集いたします...
</PolicySection>

<ContactInfo />
```

**Success Page Structure:**
```markdown
// src/app/[locale]/success/ja.mdx
import {OrderStatus, ReturnButton} from '@/components/mdx';

# ご注文ありがとうございます！

<OrderStatus />

お客様のご注文を承りました。確認メールをお送りしておりますので、ご確認ください。

<ReturnButton />
```

## MDX Content Management & Translation Workflow

### Content Structure Strategy

#### Hybrid Approach Benefits
- **UI Components**: JSON messages for dynamic, reusable interface elements
- **Static Content**: MDX files for rich, locale-specific content that may vary in structure
- **Flexibility**: Different content organization per culture while maintaining consistent UI

#### MDX Content Categories

**Legal & Policy Pages:**
- Privacy Policy: May require different legal structures per jurisdiction
- Terms of Service: Locale-specific legal requirements and cultural norms
- Shipping Policy: Country-specific shipping information and regulations

**Informational Pages:**
- Success Page: Cultural variations in celebration and communication style
- Help & Support: Different support channels and contact methods per region
- About/Company: Localized company information and cultural context

### Translation Management Workflow

#### Content Creation Process
1. **English Baseline**: Create comprehensive English MDX content with all components
2. **Structure Analysis**: Identify which components and layouts need cultural adaptation
3. **Translation Brief**: Provide context and cultural guidelines for each locale
4. **Iterative Review**: Native speaker review with cultural appropriateness check
5. **Technical Validation**: Test MDX rendering and component integration

#### Translator Guidelines for MDX

**Technical Requirements:**
- Maintain MDX component syntax: `<ComponentName prop="value">`
- Preserve import statements at the top of files
- Keep component props in English for consistency
- Test content in development environment

**Content Guidelines:**
- Adapt content structure for cultural preferences
- Modify examples and references for local relevance
- Adjust tone and formality levels appropriately
- Consider legal and regulatory differences

#### Version Control Strategy
```
messages/
├── en.json (v1.2.3)
├── ja.json (v1.2.1) 
└── ...

app/[locale]/privacy-policy/
├── en.mdx (v2.1.0)
├── ja.mdx (v2.0.8)
└── ...
```

### Quality Assurance for MDX Content

#### Automated Testing
- **Syntax Validation**: Ensure MDX files compile without errors
- **Component Testing**: Verify all imported components render correctly
- **Link Validation**: Check internal and external links in all locales
- **Performance Testing**: Monitor bundle size impact of MDX content

#### Manual Review Process
- **Content Accuracy**: Native speaker review for translation quality
- **Cultural Appropriateness**: Cultural consultant review for sensitive content
- **Legal Compliance**: Legal review for jurisdiction-specific requirements
- **UX Testing**: User testing with native speakers from target markets

### Maintenance & Updates

#### Content Update Workflow
1. **Change Request**: Identify need for content updates
2. **Impact Analysis**: Determine which locales need updates
3. **Translation Coordination**: Manage updates across multiple languages
4. **Testing & Validation**: Ensure updates work across all locales
5. **Deployment**: Coordinated release of updated content

#### Performance Monitoring
- **Bundle Analysis**: Monitor MDX content impact on bundle size
- **Loading Performance**: Track page load times for MDX-heavy pages
- **Error Tracking**: Monitor MDX compilation and rendering errors
- **User Analytics**: Track engagement with localized MDX content

### Future Considerations

#### Content Management System Integration
- **Headless CMS**: Consider integration with CMS for non-technical content updates
- **Translation Services**: API integration with professional translation services
- **Workflow Automation**: Automated translation status tracking and notifications

#### Advanced MDX Features
- **Interactive Components**: Locale-specific interactive elements
- **Dynamic Content**: Server-side rendering with locale-specific data
- **A/B Testing**: Test different content structures per locale
- **Personalization**: User preference-based content customization 