# MR Bot for Vega

A full-screen Vega TV app that opens the [MR Bot website](https://mustakimridoymr.github.io/MR-Bot/) in Amazon's WebView. The page receives TV remote focus, and system key events (including Back) are enabled.

## Build a `.vpkg`

1. Install Node.js 22.14 or newer and the Vega SDK/CLI for your platform.
2. Install project dependencies:

   ```sh
   npm install
   ```

3. Build a release package:

   ```sh
   npm run build
   ```

   For a debug package, run `npm run build:debug`. The Vega CLI writes the `.vpkg` under `build/`.
4. Install and launch it on a connected Vega device:

   ```sh
   vega run-app <path-to-vpkg> com.mustakimridoymr.mrbot.main -d <device-id>
   ```

The Vega SDK is required for packaging; `npm install` alone does not produce a `.vpkg`.

## Download a `.vpkg`

GitHub Actions builds a release package on pushes to `main` and can also be started
from the **Actions → Build Vega package → Run workflow** page. Download the
`mrbot-vega-vpkg` artifact from the completed workflow run.

To publish directly downloadable `.vpkg` files on a GitHub Release, push a
version tag such as `v1.0.1`. The release will contain each package produced
by the build.