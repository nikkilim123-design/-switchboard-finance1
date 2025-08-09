
import Layout from '../../components/Layout'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'
export async function getStaticProps(){ const posts=getSortedPostsData(); return { props:{ posts } } }
export default function Blog({posts}){ return (<Layout title="Blog — Switchboard Finance" description="Guides and lender policy explainers for business and home finance."><h1>Blog</h1><ul className="blog-list">{posts.map(p=> (<li key={p.slug}><Link href={`/blog/${p.slug}`}><strong>{p.title}</strong></Link><br/><small className="help">{new Date(p.date).toLocaleDateString()} • {p.readingTime || ''}</small></li>))}</ul></Layout>);}
