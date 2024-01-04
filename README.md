<p align="center">
  <img src="https://raw.githubusercontent.com/remarkablegames/inversion/master/public/screenshot.png" alt="Inversion">
</p>

# Inversion

<kbd>Inversion</kbd> is a 2D platformer puzzle game where two players must come together to win.

This game was made during the [Global Game Jam 2022](https://globalgamejam.org/2022/games/inversion-7), in which the theme was `duality`. The game was bootstrapped from [`phaser-platformer`](https://github.com/remarkablegames/phaser-platformer). Read the [blog post](https://remarkablegames.org/posts/inversion/).

Play the game on:

- [remarkablegames](https://remarkablegames.org/inversion/)
- [Newgrounds](https://www.newgrounds.com/portal/view/831514)
- [Itch.io](https://remarkablegames.itch.io/inversion)
- [Replit](https://replit.com/@remarkablemark/inversion?v=1)

## Credits

- [benox3](https://github.com/benox3) - Programmer, Level Designer, Artist
- [remarkablemark](https://github.com/remarkablemark) - Programmer, Level Designer
- [emex](https://soundcloud.com/emex-music/inversion) - Composer
- [mikewesthad](https://github.com/mikewesthad) - [Tilemaps in Phaser 3](https://github.com/mikewesthad/phaser-3-tilemap-blog-posts)
- [0x72](https://itch.io/profile/0x72) - [16x16 Industrial Tileset](https://0x72.itch.io/16x16-industrial-tileset)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Tiled](https://www.mapeditor.org/)

## Install

Clone the repository:

```sh
git clone https://github.com/remarkablegames/inversion.git
cd inversion
```

Install the dependencies:

```sh
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the game in the development mode.

Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

The page will reload if you make edits.

You will also see any errors in the console.

### `npm run build`

Builds the game for production to the `dist` folder.

It correctly bundles in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your game is ready to be deployed!

## Upload

Open `public/index.html` and remove the line where Google Analytics is disabled and remove the GitHub Corners script.

Build the game artifacts:

```sh
npm run build
```

Replace absolute URLs with relative URLs:

```sh
sed -i '' -e 's|src="/|src="|g' -e 's|href="/|href="|g' dist/index.html
```

Zip the game artifacts (replace `<version>` with the semver):

```sh
zip -r inversion-<version>.zip dist
```

Upload the zip archive to the game platform.

## License

[MIT](LICENSE)
