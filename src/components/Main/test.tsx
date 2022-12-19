import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('deve renderizar o heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
