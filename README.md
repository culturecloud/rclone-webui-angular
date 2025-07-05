# Rclone-Webui-Angular

This project is another webui for [rclone](https://github.com/rclone/rclone)

WARNING: this project is still in development, please do not use it in production environment

## How to Use

If you already have rclone installed in your local PC, just run:

```bash
rclone rcd --rc-web-gui --rc-web-gui-update --rc-web-fetch-url="https://s3.yuudi.dev/rwa/embed/version.json"
```

If that is not your case, choose one that suits you:

- [Desktop](./docs/native.md): Good for those who are not familiar with command line
- [Embed](./docs/embed.md): Good for managing local instance
- [PWA Standalone](./docs/pwa.md): Good for managing multiple remote servers

Other languages: [中文使用说明](./docs/zh/Instructions.md)

## Screenshot

<details>
    <summary>Expend</summary>

backends

![backends-screenshot](./docs/screenshots/backends.png)

create backends

![create-backend-screenshot](./docs/screenshots/create-backend.png)

explorer

![explorer-screenshot](./docs/screenshots/explorer.png)

mounting

![mounting-screenshot](./docs/screenshots/mounting.png)

</details>

## Contribute

If you feel like coding, translating or just want to help, please check [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

### Development

> Optional: This project ready for Dev-Container, try it out at [GitHub Codespace](https://codespaces.new/yuudi/rclone-webui-angular)

1.  install rclone if you didn't
1.  start project

    ```sh
    npm start # it will start rclone and angular at same time, API calling will be properly proxied to backed
    ```
