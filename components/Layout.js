
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ title='Switchboard Finance', description='Smart finance, faster. Commercial, asset and home loan solutions.', children }){
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.switchboard.finance';
  const ogImg = url + '/logo.svg';
  const jsonLd = {"@context":"https://schema.org","@type":"FinancialService","name":"Switchboard Finance","image":ogImg,"@id":url,"url":url,"telephone":"+61 4xx xxx xxx","address":{"@type":"PostalAddress","addressCountry":"AU","addressLocality":"Melbourne"},"areaServed":"AU","sameAs":[]};

  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="icon" href="/favicon.ico"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content={title}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={ogImg}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content={title}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={ogImg}/>
      <link rel="canonical" href={url}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
    </Head>
    <header className="container header">
      <div className="brand"><img src="/logo.svg" alt="Switchboard Finance"/><strong>Switchboard Finance</strong></div>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/asset-finance">Asset finance</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
    <main className="container">{children}</main>
    <footer className="container footer">
      <div>© {new Date().getFullYear()} Switchboard Finance • ABN 00 000 000 000</div>
      <div className="notice">Credit representative details and lender panel available on request.</div>
    </footer>
  </>)
}
