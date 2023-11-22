oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cbx-test-oclif
$ cbx-test-oclif COMMAND
running command...
$ cbx-test-oclif (--version)
cbx-test-oclif/0.0.0 linux-x64 node-v18.18.2
$ cbx-test-oclif --help [COMMAND]
USAGE
  $ cbx-test-oclif COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cbx-test-oclif hello PERSON`](#cbx-test-oclif-hello-person)
* [`cbx-test-oclif hello world`](#cbx-test-oclif-hello-world)
* [`cbx-test-oclif help [COMMANDS]`](#cbx-test-oclif-help-commands)
* [`cbx-test-oclif plugins`](#cbx-test-oclif-plugins)
* [`cbx-test-oclif plugins:install PLUGIN...`](#cbx-test-oclif-pluginsinstall-plugin)
* [`cbx-test-oclif plugins:inspect PLUGIN...`](#cbx-test-oclif-pluginsinspect-plugin)
* [`cbx-test-oclif plugins:install PLUGIN...`](#cbx-test-oclif-pluginsinstall-plugin-1)
* [`cbx-test-oclif plugins:link PLUGIN`](#cbx-test-oclif-pluginslink-plugin)
* [`cbx-test-oclif plugins:uninstall PLUGIN...`](#cbx-test-oclif-pluginsuninstall-plugin)
* [`cbx-test-oclif plugins reset`](#cbx-test-oclif-plugins-reset)
* [`cbx-test-oclif plugins:uninstall PLUGIN...`](#cbx-test-oclif-pluginsuninstall-plugin-1)
* [`cbx-test-oclif plugins:uninstall PLUGIN...`](#cbx-test-oclif-pluginsuninstall-plugin-2)
* [`cbx-test-oclif plugins update`](#cbx-test-oclif-plugins-update)

## `cbx-test-oclif hello PERSON`

Say hello

```
USAGE
  $ cbx-test-oclif hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/oclif/cbx-test-oclif/blob/v0.0.0/src/commands/hello/index.ts)_

## `cbx-test-oclif hello world`

Say hello world

```
USAGE
  $ cbx-test-oclif hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cbx-test-oclif hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/oclif/cbx-test-oclif/blob/v0.0.0/src/commands/hello/world.ts)_

## `cbx-test-oclif help [COMMANDS]`

Display help for cbx-test-oclif.

```
USAGE
  $ cbx-test-oclif help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cbx-test-oclif.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `cbx-test-oclif plugins`

List installed plugins.

```
USAGE
  $ cbx-test-oclif plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cbx-test-oclif plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.5/src/commands/plugins/index.ts)_

## `cbx-test-oclif plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cbx-test-oclif plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cbx-test-oclif plugins add

EXAMPLES
  $ cbx-test-oclif plugins:install myplugin 

  $ cbx-test-oclif plugins:install https://github.com/someuser/someplugin

  $ cbx-test-oclif plugins:install someuser/someplugin
```

## `cbx-test-oclif plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cbx-test-oclif plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cbx-test-oclif plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.5/src/commands/plugins/inspect.ts)_

## `cbx-test-oclif plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cbx-test-oclif plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cbx-test-oclif plugins add

EXAMPLES
  $ cbx-test-oclif plugins:install myplugin 

  $ cbx-test-oclif plugins:install https://github.com/someuser/someplugin

  $ cbx-test-oclif plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.5/src/commands/plugins/install.ts)_

## `cbx-test-oclif plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cbx-test-oclif plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cbx-test-oclif plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.5/src/commands/plugins/link.ts)_

## `cbx-test-oclif plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cbx-test-oclif plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cbx-test-oclif plugins unlink
  $ cbx-test-oclif plugins remove
```

## `cbx-test-oclif plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ cbx-test-oclif plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.5/src/commands/plugins/reset.ts)_

## `cbx-test-oclif plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cbx-test-oclif plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cbx-test-oclif plugins unlink
  $ cbx-test-oclif plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.5/src/commands/plugins/uninstall.ts)_

## `cbx-test-oclif plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cbx-test-oclif plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cbx-test-oclif plugins unlink
  $ cbx-test-oclif plugins remove
```

## `cbx-test-oclif plugins update`

Update installed plugins.

```
USAGE
  $ cbx-test-oclif plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.5/src/commands/plugins/update.ts)_
<!-- commandsstop -->
