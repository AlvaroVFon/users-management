import { describe, it, expect } from '@jest/globals'
import { spyConsole } from './utils/console.spy.js'

describe('logger', () => {
  it('should log a message', () => {
    const spy = spyConsole()
    expect(spy).toHaveBeenCalledWith('Hola Mundo')
    spy.mockRestore()
  })
})
