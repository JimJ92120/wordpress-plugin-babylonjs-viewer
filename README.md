# wordpress-plugin-babylonjs-viewer

Allow users to view and add 3D models to their content with Babylon.js Viewer.

---
## Requirements

### For plugin installation
|             |          |
|-------------|----------|
| `PHP`       | `>= 7.4` |
| `WordPress` | `>= 5.9` |

### For development
|             |           |
|-------------|-----------|
| `PHP`       | `>= 7.4`  |
| `WordPress` | `>= 5.9`  |
| `npm`       | `>= 6.0`  |
| `node`      | `>= 14.0` |

---
## How to use

1. Download the `.zip` file and install **Babylon.js Viewer** plugin in WordPress.

2. Activate **Babylon.js Viewer** plugin.

3. Add **Babylon.js Viewer** block to a page.

4. Add the model **URL** to the block or select a model from the **Media Library**.

Model example:
https://playground.babylonjs.com/scenes/BoomBox/BoomBox.gltf

Video Tutorial:

https://user-images.githubusercontent.com/57893611/213171974-18f0b380-10ba-4536-a991-e9de3e1dc5cb.mov


---
## Development

1. Install `npm` dependencies
```sh
npm install
```

2. Run `wp-env` environment
```sh
npm run wp-env start
```

3. Watch `src/` directory and block files
```sh
npm run start
```

4. Build `src/` directory and block files for **production**
```sh
npm run build
```

---
## Credits

- [Babylon.js](https://github.com/BabylonJS)  
- [WordPress](https://github.com/WordPress/)
- [StackOverflow](https://stackoverflow.com/)

---
## Documentation

- [Babylon.JS documentation](https://doc.babylonjs.com/)
- [Babylon.JS Viewer documentation](https://doc.babylonjs.com/features/featuresDeepDive/babylonViewer)
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)

