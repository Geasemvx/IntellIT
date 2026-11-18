// Sends the contact form.
// On Netlify (default): submissions appear under Forms in your Netlify dashboard,
// and Netlify emails each one to you once you add a form notification.
// Elsewhere: set VITE_FORMSPREE_ENDPOINT in a .env file and Formspree emails you instead.

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT

export async function sendMessage(data) {
  if (FORMSPREE) {
    const res = await fetch(FORMSPREE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error(`Form service responded with ${res.status}`)
    return
  }

  const body = new URLSearchParams({ 'form-name': 'contact', ...data }).toString()
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!res.ok) throw new Error(`Form service responded with ${res.status}`)
}
