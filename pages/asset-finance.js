
import Head from 'next/head'
import Layout from '../components/Layout'
export default function AssetFinance(){
  const url = (process.env.NEXT_PUBLIC_SITE_URL || '') + '/asset-finance';
  const faqJsonLd = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity":[
      {"@type":"Question","name":"Can I get low-doc asset finance without full financials?","acceptedAnswer":{"@type":"Answer","text":"Yes. Many lenders accept alternative verification such as bank statements, BAS and ABN/GST status for established businesses with clean conduct."}},
      {"@type":"Question","name":"How fast can asset loans be approved?","acceptedAnswer":{"@type":"Answer","text":"Simple low-doc scenarios can be approved within 24–72 hours, depending on the asset and the quality of supporting information."}},
      {"@type":"Question","name":"What assets can be financed?","acceptedAnswer":{"@type":"Answer","text":"Common categories include vehicles, trucks, construction and manufacturing equipment, medical and office fit-outs. Policy and pricing vary by asset age and usage."}},
      {"@type":"Question","name":"How do rates and fees work?","acceptedAnswer":{"@type":"Answer","text":"Pricing depends on risk, asset age, deposit, trading history and credit profile. Newer assets and larger deposits generally reduce the rate."}}
    ]
  };
  return (
    <Layout title="Low-Doc Asset Finance in Australia | Switchboard Finance" description="Need an asset loan fast? Low-doc options for vehicles, equipment and fit-outs. Fast approvals, clear policy notes and sharp pricing.">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}/>
        <link rel="canonical" href={url}/>
      </Head>
      <h1>Low-Doc Asset Finance in Australia</h1>
      <p className="prose">If you <strong>need an asset loan</strong> for vehicles or equipment, we streamline approvals with <strong>low-doc</strong> options. We map your scenario to lenders that match your trading profile and the asset — then move quickly.</p>
      <div className="grid">
        <div className="card"><h3>Who it suits</h3><p>Time-poor operators with clean bank conduct, established ABN/GST, and a clear asset purchase.</p></div>
        <div className="card"><h3>What lenders look for</h3><p>Stability of trading, bank statements, BAS where needed, and the asset details (age, condition, usage).</p></div>
        <div className="card"><h3>Fast wins</h3><p>Tidy your statements, align ABN/GST, have the asset spec handy — and consider a deposit to sharpen pricing.</p></div>
      </div>
      <h2>How we help</h2>
      <ul className="prose">
        <li>Match your scenario to the right lender and product</li>
        <li>Low-doc pathways where full financials aren’t available</li>
        <li>Clear policy notes so you know what to expect</li>
        <li>Hands-on support from enquiry to settlement</li>
      </ul>
      <h2>FAQs</h2>
      <dl className="faq">
        <dt>Can I get low-doc asset finance without full financials?</dt>
        <dd>Yes. Many lenders accept alternative verification such as bank statements, BAS and ABN/GST status for established businesses with clean conduct.</dd>
        <dt>How fast can asset loans be approved?</dt>
        <dd>Simple low-doc scenarios can be approved within 24–72 hours, depending on the asset and the quality of supporting information.</dd>
        <dt>What assets can be financed?</dt>
        <dd>Vehicles, trucks, construction and manufacturing equipment, medical and office fit-outs. Policy and pricing vary by asset age and usage.</dd>
        <dt>How do rates and fees work?</dt>
        <dd>Pricing depends on risk, asset age, deposit, trading history and credit profile. Newer assets and larger deposits generally reduce the rate.</dd>
      </dl>
      <div className="cta" style={{marginTop:'16px'}}>
        <a className="btn primary" href="/contact">Get a fast quote</a>
        <a className="btn" href="/blog/low-doc-asset-finance-guide">Read the quick guide</a>
      </div>
    </Layout>
  )
}
