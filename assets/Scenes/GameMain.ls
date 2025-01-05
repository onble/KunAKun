{
  "_$ver": 1,
  "_$id": "kiyw52w6",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "9npzyo4s",
      "_$type": "Image",
      "name": "Background",
      "width": 460,
      "height": 800,
      "_mouseState": 2,
      "skin": "res://2700e4ae-a78d-48e8-ba28-9da71cd19136",
      "useSourceSize": true,
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "c94uyg9r",
          "_$type": "Box",
          "name": "Goods",
          "width": 457,
          "height": 457,
          "_$comp": [
            {
              "_$type": "7e1b6e8b-b28e-4b62-a103-f3184eee9224",
              "scriptPath": "../src/GameMain/GoodsManager.ts"
            }
          ]
        },
        {
          "_$id": "b95a0s3u",
          "_$type": "Sprite",
          "name": "Box",
          "x": 21,
          "y": 537,
          "width": 420,
          "height": 70,
          "_mouseState": 2,
          "_gcmds": [
            {
              "_$type": "DrawRectCmd",
              "x": 0,
              "y": 0,
              "width": 1,
              "height": 1,
              "percent": true,
              "lineWidth": 4,
              "lineColor": "rgba(255, 255, 255, 1)"
            }
          ],
          "_$comp": [
            {
              "_$type": "37b70b97-ca88-4413-bceb-388360be6e1e",
              "scriptPath": "../src/GameMain/BoxManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "bq2qzili",
              "_$type": "List",
              "name": "Choose",
              "width": 420,
              "height": 66,
              "_mouseState": 2,
              "itemTemplate": {
                "_$ref": "xh79ify6",
                "_$tmpl": "itemRender"
              },
              "repeatX": 7,
              "repeatY": 1,
              "_$child": [
                {
                  "_$id": "xh79ify6",
                  "_$type": "Sprite",
                  "name": "card",
                  "width": 60,
                  "height": 66,
                  "texture": {
                    "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                    "_$type": "Texture"
                  }
                }
              ]
            }
          ]
        },
        {
          "_$id": "851pag9k",
          "_$type": "Box",
          "name": "ButtonGroup",
          "y": 631,
          "width": 459,
          "height": 167,
          "_$comp": [
            {
              "_$type": "cc0ab760-60b9-4711-828a-3297a0af871c",
              "scriptPath": "../src/GameMain/ButtonManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "fnclp9hv",
              "_$type": "Image",
              "name": "Refresh",
              "x": 185,
              "y": -3,
              "width": 85,
              "height": 74,
              "skin": "res://1e414e55-be9c-4e05-8b98-307947bde062",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "kh1rdrwo",
                  "_$type": "Sprite",
                  "name": "Icon",
                  "x": 14,
                  "y": 4,
                  "width": 57,
                  "height": 57,
                  "texture": {
                    "_$uuid": "f8f54788-b136-4435-bccc-af8df4dd1707",
                    "_$type": "Texture"
                  }
                },
                {
                  "_$id": "ulv30r4h",
                  "_$type": "Sprite",
                  "name": "Dot",
                  "x": 68,
                  "y": -8,
                  "width": 30,
                  "height": 30,
                  "texture": {
                    "_$uuid": "d45d490c-dd32-46d8-bc7d-9fbed0a58da1",
                    "_$type": "Texture"
                  },
                  "_$child": [
                    {
                      "_$id": "3vwx5hsk",
                      "_$type": "Text",
                      "name": "dotNumber",
                      "x": 1,
                      "width": 30,
                      "height": 30,
                      "text": "99",
                      "fontSize": 18,
                      "color": "#FFFFFF",
                      "align": "center",
                      "valign": "middle",
                      "leading": 2
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}