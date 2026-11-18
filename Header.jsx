import { useState } from 'react'
import Section from './Section'
import { SERVICES, SITE } from '../config'
import { sendMessage } from '../lib/sendMessage'

const EMPTY = { name: '', email: '', company: '', service: '', message: '', 'bot-field': '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    if (form['bot-field']) return // spam trap
    setStatus('sending')
    try {
      await sendMessage(form)
      setStatus('sent')
      setForm(EMPTY)
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      title="Start a project"
      intro={`Tell us what you need, and you'll get a reply within ${SITE.responseTime}.`}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <dl className="space-y-8">
          <div>
            <dt className="text-sm text-ash">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${SITE.email}`} className="text-lg text-fog underline decoration-leaf/60 underline-offset-4 hover:decoration-leaf">
                {SITE.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-ash">Location</dt>
            <dd className="mt-1 text-lg">{SITE.location}</dd>
          </div>
          <div>
            <dt className="text-sm text-ash">Response time</dt>
            <dd className="mt-1 text-lg">Within {SITE.responseTime}</dd>
          </div>
        </dl>

        {status === 'sent' ? (
          <div role="status" className="rounded-3xl border border-leaf/40 bg-forest/20 p-8">
            <h3 className="font-display text-2xl font-semibold">Message sent</h3>
            <p className="mt-3 text-ash">Thanks for getting in touch. You'll hear back within {SITE.responseTime}.</p>
            <button type="button" onClick={() => setStatus('idle')} className="btn-outline mt-6">
              Send another message
            </button>
          </div>
        ) : (
          <form name="contact" onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
            <p className="hidden">
              <label>Leave this empty: <input name="bot-field" value={form['bot-field']} onChange={update} tabIndex={-1} autoComplete="off" /></label>
            </p>

            <label className="grid gap-2">
              <span className="text-sm text-ash">Name</span>
              <input className="field" name="name" required autoComplete="name" value={form.name} onChange={update} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-ash">Email</span>
              <input className="field" type="email" name="email" required autoComplete="email" value={form.email} onChange={update} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-ash">Company (optional)</span>
              <input className="field" name="company" autoComplete="organization" value={form.company} onChange={update} />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-ash">What do you need help with?</span>
              <select className="field" name="service" required value={form.service} onChange={update}>
                <option value="" disabled>Choose a service</option>
                {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Something else">Something else</option>
              </select>
            </label>
            <label className="grid gap-2 sm:col-span-2">
              <span className="text-sm text-ash">Tell us about your project</span>
              <textarea className="field min-h-40" name="message" required rows={6} value={form.message} onChange={update} />
            </label>

            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button type="submit" className="btn-primary disabled:opacity-60" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending message…' : 'Send message'}
              </button>
              <p aria-live="polite" className="text-sm text-red-300">
                {status === 'error' &&
                  `Your message didn't send. Check your connection and try again, or email ${SITE.email}.`}
              </p>
            </div>
          </form>
        )}
      </div>
    </Section>
  )
}
