import { render, screen } from '@testing-library/react'
import TodoForm from './Form'

test('form renders ok', () => {
	render(<TodoForm />)
	const element = screen.getByText('Submit')
	expect(element).toBeDefined()
})
