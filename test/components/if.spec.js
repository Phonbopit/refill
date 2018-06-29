import React from 'react'
import renderer from 'react-test-renderer'

import { If } from '../../src/components/If'

it('<If> should render when true', () => {
  const component = (
    <If render={true}>
      <h1>You can see me :)</h1>
    </If>
  )

  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})

it('<If> should not show when false', () => {
  const component = (
    <If render={false}>
      <h1>You can't see me :)</h1>
    </If>
  )

  const tree = renderer.create(component).toJSON()
  expect(tree).toMatchSnapshot()
})
