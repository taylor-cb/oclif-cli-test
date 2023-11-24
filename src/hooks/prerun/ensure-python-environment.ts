import {Hook} from '@oclif/core'
import {execSync} from 'node:child_process'

const hook: Hook<'prerun'> = async function () {
  let pythonCommandResponse: string = ''

  try {
    pythonCommandResponse = execSync('python -V').toString()
  } catch {
    this.error('Python not found on system.')
  }

  const match = pythonCommandResponse.match(/Python (\d+\.\d+\.\d+)/)
  const matchingVersion = match ? match[1] : ''

  // Better version matching logic here
  if (matchingVersion !== '3.12.0') {
    this.error(`Python must be at least version 3.12.0, received ${matchingVersion}.`)
  }
}

export default hook
