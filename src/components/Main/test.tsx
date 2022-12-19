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

  it('deve renderizar a cor corretamente', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
