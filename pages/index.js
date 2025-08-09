
import Layout from '../components/Layout'
import Link from 'next/link'
export default function Home(){
  return (<Layout title="Switchboard Finance — Smart finance, faster." description="Commercial, asset and home loan solutions for Australian businesses and families. Fast turnarounds, sharp rates, zero fluff.">
    <section className="hero">
      <span className="kicker">Melbourne • Australia</span>
      <h1>Smart finance, faster. <span className="highlight">No fluff.</span></h1>
      <p>We connect you with the right lender and structure across commercial, asset and home loans. Low-doc options available. If you need funding fast, we’ll get you clarity even faster.</p>
      <div className="cta">
        <Link className="btn primary" href="/contact">Get a quote</Link>
        <Link className="btn accent" href="/services">See services</Link>
        <a className="btn" href="/rss.xml">RSS</a>
      </div>
    </section>
    <section>
      <div className="grid">
        <div className="card"><h3>Commercial loans</h3><p>Working capital, invoice finance, commercial property and development funding.</p><span className="badge">Fast</span></div>
        <div className="card"><h3>Asset finance</h3><p>Vehicles, equipment and fit-outs with streamlined low-doc options.</p><span className="badge">Low-doc</span></div>
        <div className="card"><h3>Home & investment loans</h3><p>Owner-occupier, investment, bridging and refinance options with sharp rates.</p><span className="badge">Sharp rates</span></div>
      </div>
    </section>
  </Layout>)
}
