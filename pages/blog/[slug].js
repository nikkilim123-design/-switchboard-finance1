
import Layout from '../../components/Layout'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
export async function getStaticPaths(){ const paths=getAllPostSlugs(); return { paths, fallback:false } }
export async function getStaticProps({params}){ const post=await getPostData(params.slug); return { props:{ post } } }
export default function Post({post}){ const jsonLd={"@context":"https://schema.org","@type":"Article","headline":post.title,"datePublished":post.date,"dateModified":post.date,"author":{"@type":"Person","name":"Switchboard Finance"},"mainEntityOfPage":{"@type":"WebPage","@id":(process.env.NEXT_PUBLIC_SITE_URL||'')+'/blog/'+post.slug}}; return (<Layout title={`${post.title} — Switchboard Blog`} description={post.excerpt || post.title}><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/><article className="prose"><h1>{post.title}</h1><small className="help">{new Date(post.date).toLocaleDateString()}</small><div dangerouslySetInnerHTML={{__html: post.contentHtml}}/></article></Layout>);}
