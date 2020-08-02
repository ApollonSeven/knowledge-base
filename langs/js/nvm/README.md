# Node Version Manager

## Installing

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## Commands

To download, compile, and install the latest release of node, do this:
```bash
nvm install --lts
```
or
```bash
nvm install node
```

To install a specific version of node:
```bash
nvm install 12.0.3
```

To install default node:
```bash
nvm alias default node
```

To use node version:
```bash
nvm use node
```

You can list available versions using ```ls-remote```:
```bash
nvm ls-remote
```

List of all installing versions:
```bash
nvm ls
```

Current version of node:
```bash
nvm current
```
