# GDI AUTO UPDATE

-   Auto fetch the latest source code of [GDI](gitlab.com/GoogleDriveIndex/Google-Drive-Index) _(Bhadoo Index)_
-   Auto deploy to **Cloudflare Worker**
-   Automated using **Github Action**
-   Support Rclone to list all shared drives

## 💁 BADGE

![GitHub forks](https://img.shields.io/github/forks/KevinNitroG/GDI-Auto-Update?style=for-the-badge)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/KevinNitroG/GDI-Auto-Update/main?style=for-the-badge)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/KevinNitroG/GDI-Auto-Update?style=for-the-badge)

## 📃 TABLE OF CONTENTS

-   [GDI AUTO UPDATE](#gdi-auto-update)
    -   [💁 BADGE](#-badge)
    -   [📃 TABLE OF CONTENTS](#-table-of-contents)
    -   [📝 HOW TO USE](#-how-to-use)
        -   [1️⃣ Fork, enable action](#1️⃣-fork-enable-action)
        -   [2️⃣ Add variable for Github Action](#2️⃣-add-variable-for-github-action)
        -   [3️⃣ Trigger workflow](#3️⃣-trigger-workflow)
    -   [🌟 STAR HISTORY](#-star-history)

## 📝 HOW TO USE

### 1️⃣ Fork, enable action

-   [Fork](../../../fork)
-   [Enable action](../../../actions) _(Click this from your forked repo)_

### 2️⃣ Add variable for Github Action

-   Go to your forked repo's `Settings` > `Secrets and Variables` _(Or [click here](../../../settings/secrets/actions) from your forked repo)_
-   Create `secret` is recommended over `variable` because `secret` is hidden from public when running in Github Action

|        **NAME**         |    **VALUE**    | **REQUIRED** |                                **EXAMPLE**                                | **DESCRIPTION**                                                                                                                                  | **WHERE TO GET**                                                                                                                                                                                                                                                                                                                       |
| :---------------------: | :-------------: | :----------: | :-----------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|      `USER_HEADER`      | URL to raw code |     Yes      |  [exampleUserHeader.js](../../../raw/main/docs/src/exampleUserHeader.js)  | The user variables of GDI from Start of code to the line `// DON'T TOUCH BELOW THIS UNLESS YOU KNOW WHAT YOU'RE DOING`<br>DON'T EDIT THE `root:` | [GDI worker.js source code](https://gitlab.com/GoogleDriveIndex/Google-Drive-Index/-/raw/master/src/worker.js)                                                                                                                                                                                                                         |
|      `DRIVE_ROOT`       | URL to raw code |     Yes      | [exampleDriveRoot.json](../../../raw/main/docs/src/exampleDriveRoot.json) | List of drives to put in `root` variable of GDI code                                                                                             | Set yourself                                                                                                                                                                                                                                                                                                                           |
| `CLOUDFLARE_ACCOUNT_ID` |    `string`     |     Yes      |                    `1234567890abcdef1234567890abcdef`                     | Cloudflare Account ID from your URL                                                                                                              | 1. Go to [`https://dash.cloudflare.com/`](https://dash.cloudflare.com/)<br>2. Later, there will be a long string in the URL after `https://dash.cloudflare.com/1234567890abcdef1234567890abcdef`                                                                                                                                       |
| `CLOUDFLARE_API_TOKEN`  |    `string`     |     Yes      |                     `324WeASb3i1e2oiVASd_659uAsIUbas`                     | Cloudflare API Token                                                                                                                             | 1. Go to [`https://dash.cloudflare.com/profile/api-tokens`](https://dash.cloudflare.com/profile/api-tokens)<br>2. Click on `Create Token`<br>3. Choose `Use template` of `Edit Cloudflare Workers`<br>4. Select yourself the `Account Resouces` and `Zone Resources`<br>5. `Continue to summary` > `Create Token`<br>6. Copy the token |
|     `WRANGLER_TOML`     | URL to raw code |     Yes      |  [exampleWrangler.toml](../../../raw/main/docs/src/exampleWrangler.toml)  | Wrangler.toml file                                                                                                                               | [Wrangler docs](https://developers.cloudflare.com/workers/cli-wrangler/configuration)                                                                                                                                                                                                                                                  |
|  `USER_RCLONE_CONFIG`   | URL to raw code |      No      |                                  No need                                  | Rclone config file                                                                                                                               | [Rclone docs](https://rclone.org/docs/)                                                                                                                                                                                                                                                                                                |
|   `RCLONE_DRIVE_NAME`   |    `string`     |      No      |                                `MyGDrive`                                 | Name of the drive to list all shared drives<br>In fact it will run command `rclone backend drives <MyGDrive>:`                                   |

### 3️⃣ Trigger workflow

-   Workflow will run at [20:00 UTC everyday](../.github/workflows/GDIUpdate.yml#L5) _(by default)_
-   Run by someone / yourself star the repo
-   Or manually trigger workflow from [here](../../../actions/workflows/GDIUpdate.yml) _(Click this from your forked repo)_

## 🌟 STAR HISTORY

[![Star History Chart](https://api.star-history.com/svg?repos=KevinNitroG/GDI-Auto-Update&type=Date)](https://star-history.com/#KevinNitroG/GDI-Auto-Update&Date)
