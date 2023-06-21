# Rclone-Webui-Angular

This project is another webui for [rclone](https://github.com/rclone/rclone)

WARNING: this project is still in development, please do not use it in production environment

## Use

1. Install [rclone](https://rclone.org/downloads/) if you haven't

1. Then run the following command

   ```bash
   rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/yuudi/rclone-webui-angular/releases/latest"
   ```

   If you have used [rclone-webui-react](https://github.com/rclone/rclone-webui-react) before, you need to force an update by appending `--rc-web-gui-force-update` to the command

1. Then the browser will open automatically, if not, follow the link in the terminal

## Screenshot

backends

![backends-screenshot](./docs/screenshots/backends.png)

create backends

![create-backend-screenshot](./docs/screenshots/create-backend.png)

explorer

![explorer-screenshot](./docs/screenshots/explorer.png)

mounting

![mounting-screenshot](./docs/screenshots/mounting.png)

## Development environment

Run backend: `rclone rcd --rc-user="<your username>" --rc-pass="<your password>" --rc-addr=127.0.0.1:5572`

Run frontend: `ng serve`

Api calling will be proxied to backed [config](./src/proxy.conf.mjs)

## Todo

- [x] Mounting management
- [ ] Job viewer
- [x] International workflow
- [ ] More Platforms
  - [x] Rclone embedded
  - [ ] PWA Standalone
  - [ ] Electron
  - [ ] WinUI 3 with WebView2

## Contribute

### Bug report

Bug reports are welcome, please open an [issue](https://github.com/yuudi/rclone-webui-angular/issues/new/choose) or [discuss](https://github.com/yuudi/rclone-webui-angular/discussions/new/choose)

### Code

For small bugfix, just open a [pull request](https://github.com/yuudi/rclone-webui-angular/pulls)

For new feature or big changes, please open an [issue](https://github.com/yuudi/rclone-webui-angular/issues/new/choose) first to discuss

### Translation

If you want to help translate, first search the issue to see if there is already a translation in progress, if not, open an issue to claim the translation

Please use translate tool like [Poedit](https://poedit.net/) to translate the [XLIFF file](./src/locale/messages.xlf)
