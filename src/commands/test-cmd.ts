import {Args, Command, Flags} from '@oclif/core'

export default class TestCmd extends Command {
  static args = {
    file: Args.string({description: 'file to read'}),
  }

  static description = 'describe the command here'

  static examples = ['<%= config.bin %> <%= command.id %>']

  static flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    await this.config.runHook('ensure-python-environment', {id: 'test-cmd'})

    this.log('Executing command')
  }
}
