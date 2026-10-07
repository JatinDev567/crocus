import '@testing-library/jest-dom/vitest'
import { cleanup, configure } from '@testing-library/react'
import { afterEach, beforeEach } from 'vitest'
import { reopenHall } from 'src/hallbook/book'

configure({ asyncUtilTimeout: 5000 })

beforeEach(() => {
  reopenHall()
})

afterEach(() => {
  cleanup()
  window.localStorage.clear()
})
