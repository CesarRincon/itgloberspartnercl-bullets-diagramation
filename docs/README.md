📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Bullet Diagramation

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)]


Context of elements that will render the lower levels of navigation within a list of bullets with images.

<img width="1863" alt="image" src="https://user-images.githubusercontent.com/90701896/220166038-5805a956-6e14-4cb9-bc61-3aeda2967811.png">

## Configuration 

1. Import the Bullet Diagramation's app to your theme's dependencies in the manifest.json, for example:
```json
  dependencies: {
    "{vendor}.bullets-diagramation": "0.x"
  }
 ```
 
 2. Add the list-context block to the store-theme. For example:
```json
 {
  "flex-layout.row#bullet-group": {
    "title": "Container bullet group",
    "children": [
      "list-context.bullet-group"
    ]
  },
  "list-context.bullet-group": {
    "title": "Mi contexto de lista bullets",
    "children": [
      "slider-layout#bullet-group"
    ],
    "props": {
      "bullets": [
        {
          "image": "bullet-image-1.jpg",
          "secondaryImage": "bullet-image-1-1.jpg",
          "titleBullet": "SUETER LIGERO ESCOTE OJAL",
          "link": {
            "url": "/mujer"
          }
        },
        {
          "image": "bullet-image-2.jpg",
          "secondaryImage": "bullet-image-2-1.jpg",
          "titleBullet": "SUETER LIGERO ESCOTE OJAL",
          "link": {
            "url": "/mujer"
          }
        },
        {
          "image": "bullet-image-3.jpg",
          "secondaryImage": "bullet-image-3-1.jpg",
          "titleBullet": "CHALECO CRUZADO BOTONES METÁLICOS",
          "link": {
            "url": "/mujer"
          }
        },
        {
          "image": "bullet-image-4.jpg",
          "secondaryImage": "bullet-image-4-1.jpg",
          "titleBullet": "CÁRDIGAN RAYAS CORDÓN EN CINTURA",
          "link": {
            "url": "/mujer"
          }
        }
      ]
    }
  },
  "slider-layout#bullet-group": {
    "props": {
      "itemsPerPage": {
        "desktop": 4,
        "tablet": 3,
        "phone": 2
      },
      "infinite": true,
      "blockClass": "bullet-group",
      "showPaginationDots": "never"
    }
  }
 }
   ```

 Block name     | Description                                      |
| -------------- | ----------------------------------------------- |
| `list-context.bullet-group` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store-theme block to render a default detailed list with all bullets   |

### list-context.bullet-group props

| Prop name    | Type            | Description    | Default Value                                                     |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `bullet`        | `Array`       | Define the bullet array to render in the list-context       | `undefined`              |


### bullets props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------- | ---------- | 
| `img`        | `String`       | Define the image to render in the list-context       | `undefined`              |
| `SecondaryImg`   | `string`   |   Define the second image to render in the list-context for faded effect | `undefined`
| `titleBullet`        | `String`       | Define the title to render in the list-context       | `undefined`              |
| `Link`        | `LinkProps`       |  Define the url to render in the list-context       | `undefined`              |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles |
| ----------- | 
| `bullet__container` | 
| `bullet__item` | 
| `bullet__item--title` | 
| `bullet__item--image` | 
| `bullet__item--Secondary-image` |
| `bullet__item--link` |

## Contributors 

Thanks goes to these wonderful people:

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)