import { Component } from 'react'

// Keeps the rest of the site working if a decorative part (like the 3D robot) fails to load.
export default class SafeBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  componentDidCatch(error) { console.warn('3D scene failed to load:', error) }
  render() { return this.state.failed ? (this.props.fallback ?? null) : this.props.children }
}
