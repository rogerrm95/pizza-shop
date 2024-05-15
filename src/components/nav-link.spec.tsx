import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link  when is the current page link', () => {
    const wrapper = render(
      <>
        <NavLink to={'/dashboard'}>Dashboard</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/dashboard']}>
              {children}
            </MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('About').dataset.current).toEqual('false')
    expect(wrapper.getByText('Dashboard').dataset.current).toEqual('true')
  })
})
