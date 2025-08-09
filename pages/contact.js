
import Layout from '../components/Layout'
export default function Contact(){ return (<Layout title="Contact — Switchboard Finance" description="Contact Switchboard Finance for quotes and lender options.">
  <h1>Contact</h1>
  <p className="prose">Prefer email? <a href="mailto:hello@switchboard.finance">hello@switchboard.finance</a></p>
  <form className="grid" name="contact" method="post" action="https://formspree.io/f/your-id">
    <div className="card"><label>Name</label><input className="input" name="name" placeholder="Your name" required/></div>
    <div className="card"><label>Email</label><input className="input" type="email" name="email" placeholder="you@example.com" required/></div>
    <div className="card"><label>Phone</label><input className="input" name="phone" placeholder="+61"/></div>
    <div className="card" style={{gridColumn:'1/-1'}}><label>How can we help?</label><textarea className="input" name="message" rows="6" placeholder="Tell us about your scenario"></textarea><small className="help">Submitting will send us an email.</small></div>
    <div className="card"><button className="btn primary" type="submit">Send</button></div>
  </form>
</Layout>)}
