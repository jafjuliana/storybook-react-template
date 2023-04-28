import React from 'react'
import { render, screen } from '@testing-library/react'

import Example from './index'

describe('<Example />', () => {
  it('should render the heading', () => {
    const { container } = render(<Example />)

    expect(
      screen.getByRole('heading', { name: /Example/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

