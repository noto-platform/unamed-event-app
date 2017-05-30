import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Events from '.'

const HOUR = 1000 * 60 * 60;

const props = {
  list: Array(3).fill(0).map((_, i) => [{
    title: `event #${1}`,
    owner: `owner #${1}`,
    description: `description #${1}`,
    start_time: Date.now() * HOUR,
    end_time: Date.now() * HOUR * 2,
  }])
}
storiesOf('Events', module)
  .add('default', () => (
    <Events {...props} />
  ))
