import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders heading', () => {
    render(<App />)
    expect(screen.getByText(/React App for CI\/CD Demo/i)).toBeDefined()
  })

  it('has counter button', () => {
    render(<App />)
    expect(screen.getByText(/Count is/i)).toBeDefined()
  })

  it('has fetch data button', () => {
    render(<App />)
    expect(screen.getByText(/Fetch Data/i)).toBeDefined()
  })
})