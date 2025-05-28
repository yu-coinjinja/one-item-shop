import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | フランクフルト林 Official Store',
  description: '特定商取引法に基づく表記 - フランクフルト林公式ストア',
}

export default function TokuteiShoutorihiki() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="py-8 pt-24 md:pt-32">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="pb-8 border-gray-500 border-b font-bold text-3xl md:text-4xl tracking-wide">
            特定商取引法に基づく表記
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="space-y-8 text-gray-800">
          <section>
            <h2 className="mb-4 font-semibold text-xl">販売業者</h2>
            <p>フランクフルト林 Official Store</p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">運営責任者</h2>
            <p>フランクフルト林（Taichi Hayashi）</p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">所在地</h2>
            <p>
              〒000-0000
              <br />
              東京都渋谷区○○○○
              <br />
              ※詳細な住所については、法令に基づき請求があった場合に遅滞なく開示いたします。
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">電話番号</h2>
            <p>
              03-0000-0000
              <br />
              ※お問い合わせは原則としてメールにて承っております。
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">メールアドレス</h2>
            <p>info@frankfurtlin-store.com</p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">販売価格</h2>
            <p>各商品ページに記載された価格（税込）</p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">商品代金以外の必要料金</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>送料：全国一律無料</li>
              <li>決済手数料：無料</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">支払方法</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>クレジットカード決済（Visa、Mastercard）</li>
              <li>その他決済サービス</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">支払時期</h2>
            <p>注文確定時に決済が完了いたします。</p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">商品の引渡時期</h2>
            <p>
              ご注文確定後、7営業日以内に発送いたします。
              <br />
              配送状況により遅れる場合がございます。
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">返品・交換について</h2>
            <div className="space-y-2">
              <p>
                <strong>返品可能期間：</strong>商品到着後7日以内
              </p>
              <p>
                <strong>返品条件：</strong>
              </p>
              <ul className="space-y-1 ml-4 list-disc list-inside">
                <li>未使用・未開封の商品に限ります</li>
                <li>商品に不備がある場合</li>
                <li>注文と異なる商品が届いた場合</li>
              </ul>
              <p>
                <strong>返品送料：</strong>
                当店都合による返品の場合は当店負担、お客様都合による返品の場合はお客様負担
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">キャンセルについて</h2>
            <p>
              商品発送前であればキャンセルを承ります。
              <br />
              発送後のキャンセルはお受けできませんので、予めご了承ください。
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">個人情報の取り扱い</h2>
            <p>
              お客様の個人情報は、商品の発送とご連絡以外には使用いたしません。
              <br />
              詳細は
              <a href="/privacy-policy" className="text-blue-600 hover:underline">
                プライバシーポリシー
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-semibold text-xl">その他</h2>
            <p>
              本サイトの利用については、
              <a href="/terms-of-service" className="text-blue-600 hover:underline">
                利用規約
              </a>
              をご確認ください。
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}
