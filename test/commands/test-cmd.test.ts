import {expect, test} from '@oclif/test'

describe('test-cmd', () => {
  test
  .stdout()
  .command(['test-cmd'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['test-cmd', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
