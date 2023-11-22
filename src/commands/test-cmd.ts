import {Args, Command, Flags} from '@oclif/core'
import {execSync} from 'node:child_process'

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
    const {args, flags} = await this.parse(TestCmd)

    const name = flags.name ?? 'world'
    this.log(`hello doot ${name} from /mnt/c/work/cli-test/oclif/cbx-test-oclif/src/commands/test-cmd.ts`)

    const res = execSync('python -V')

    this.log(res.toString())
  }
}
