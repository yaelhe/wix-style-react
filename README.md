# Wix Style - React
'Wix Style' is a common name to the different UX style libraries designed by the UX guild (for dashboard, settings, editor, and viewer). The wix-style-react package contains React implemenations for the different components in the style library.

## Demo
Storybook can be seen [here](https://wix.github.io/wix-style-react/?selectedKind=1.%20Inputs&selectedStory=1.1%20Standard&full=0&down=0&left=1&panelRight=0).

## Getting Started
### Storybook
Storybook will allow you to see all the different components implemented, and the different usages of each one of them.
```javascript
    npm install
    npm start
```
### Using in a Project
#### Install the npm
```javascript
    npm install --save wix-style-react
```
#### Update webpack
The files are brought 'uncompiled' and 'unpacked'. You will need to make sure webpack standard loaders run on this project by adding 'node_modules/wix-style-react/src' to your loaders' include array, for example:
```javascript
    {
        test: /\.scss$/,
        include:['node_modules/wix-style-react/src')],
        loaders: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader'
        ]
    }
```
#### Use in your code
Please refer to the specific elements for code-based examples of how to use this library, e.g., [Button](https://wix.github.io/wix-style-react/?selectedKind=3.%20Buttons&selectedStory=3.1%20Standard&full=0&down=0&left=1&panelRight=0)

#### Notes
See the Storybook, and the story fields, for all the elements and the different parameters they receive.

__Important__: Make sure your body contains either the 'ltr' or 'rtl' class (dependent, of course, on the displayed language).

This project is currently still in initial development. It is advisable to be dependent on a specific version of this component for the time being.

## Tests
Please refer the [Testing page](https://wix.github.io/wix-style-react/?selectedKind=Introduction&selectedStory=Testing&full=0&down=0&left=1&panelRight=0)

## Contributing
Please refer the [Contribution page](https://wix.github.io/wix-style-react/?selectedKind=Introduction&selectedStory=Contribution&full=0&down=0&left=1&panelRight=0)

## License
This project is offered under MIT License.
