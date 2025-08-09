
import Layout from '../components/Layout'; import Link from 'next/link'
export default function Services(){ return (<Layout title="Services — Switchboard Finance" description="Commercial, asset, home and development lending.">
  <h1>Services</h1>
  <div className="prose">
    <h2>Commercial finance</h2><p>Cashflow lending, invoice finance, trade, commercial property, development & construction.</p>
    <h2>Asset finance</h2><p>Vehicles, yellow goods, office equipment, medical & fit-outs. Low-doc options available. <Link href="/asset-finance">Learn more →</Link></p>
    <h2>Home loans</h2><p>Owner-occupier, investment, bridging, refinance and debt consolidation.</p>
    <h2>Why Switchboard</h2><ul><li>Aggregator-panelled lenders</li><li>Fast approvals with clear policy notes</li><li>Hands-on support from enquiry to settlement</li></ul>
  </div>
</Layout>)}
