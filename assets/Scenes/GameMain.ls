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
      "centerX": 0,
      "skin": "res://2700e4ae-a78d-48e8-ba28-9da71cd19136",
      "useSourceSize": true,
      "color": "#ffffff",
      "_$child": [
        {
          "_$id": "kyqmkcd3",
          "_$type": "Box",
          "name": "TopItem",
          "x": 1,
          "width": 459,
          "height": 99,
          "top": 0,
          "centerX": 0,
          "_$child": [
            {
              "_$id": "2q4g6dum",
              "_$type": "Image",
              "name": "BlackRoundRect",
              "x": 161,
              "y": 40,
              "width": 137,
              "height": 31,
              "centerX": 0,
              "skin": "res://cb22a5ec-281e-4c82-9741-c09776fecd4c",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "865f823c-c1cc-473a-95c1-b6744142d261",
                  "scriptPath": "../src/GameMain/TopItem/TimeShowManager.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "m3exbrai",
                  "_$type": "Text",
                  "name": "Time",
                  "y": 1,
                  "width": 137,
                  "height": 30,
                  "text": "- 12月26日 -",
                  "fontSize": 20,
                  "color": "#FFFFFF",
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                }
              ]
            },
            {
              "_$id": "5jimb3cg",
              "_$type": "Image",
              "name": "LevelShow",
              "x": 202,
              "y": 74,
              "width": 54.194546759148544,
              "height": 23.988471657498202,
              "centerX": 0,
              "skin": "res://295d6407-013e-43e4-9450-fd27dd17ec04",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "d8d5f664-603d-4dd1-85e4-e4390f0aee8a",
                  "scriptPath": "../src/GameMain/TopItem/LevelShowManager.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "0dc1lx6i",
                  "_$type": "Sprite",
                  "name": "Dot",
                  "x": 38,
                  "y": 8.5,
                  "width": 7.5,
                  "height": 7.5,
                  "_gcmds": [
                    {
                      "_$type": "DrawCircleCmd",
                      "x": 0.5,
                      "y": 0.5,
                      "radius": 0.5,
                      "percent": true,
                      "lineWidth": 1,
                      "fillColor": "rgba(0, 0, 0, 1)"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "c94uyg9r",
          "_$type": "Box",
          "name": "Goods",
          "width": 457,
          "height": 672,
          "_$comp": [
            {
              "_$type": "7e1b6e8b-b28e-4b62-a103-f3184eee9224",
              "scriptPath": "../src/GameMain/GoodsManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "3dylx463",
              "_$type": "Sprite",
              "name": "card",
              "x": 70,
              "y": 100,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "6z3mff4z",
              "_$type": "Sprite",
              "name": "card(1)",
              "x": 200,
              "y": 100,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "9rr2y5lu",
              "_$type": "Sprite",
              "name": "card(2)",
              "x": 330,
              "y": 100,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "gcjqs21g",
              "_$type": "Sprite",
              "name": "card(3)",
              "x": 70,
              "y": 130,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "oboabhzi",
              "_$type": "Sprite",
              "name": "card(4)",
              "x": 70,
              "y": 220,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "lts7hfqf",
              "_$type": "Sprite",
              "name": "card(5)",
              "x": 70,
              "y": 250,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "w1te9cq8",
              "_$type": "Sprite",
              "name": "card(6)",
              "x": 70,
              "y": 340,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "k02evtvj",
              "_$type": "Sprite",
              "name": "card(7)",
              "x": 70,
              "y": 350,
              "width": 60,
              "height": 66,
              "visible": false,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            }
          ]
        },
        {
          "_$id": "b95a0s3u",
          "_$type": "Sprite",
          "name": "Box",
          "width": 457,
          "height": 672,
          "_mouseState": 2,
          "mouseThrough": true,
          "_gcmds": [],
          "_$comp": [
            {
              "_$type": "37b70b97-ca88-4413-bceb-388360be6e1e",
              "scriptPath": "../src/GameMain/BoxManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "5ij8qi49",
              "_$type": "Image",
              "name": "Background",
              "x": -7,
              "y": 528,
              "width": 470.0420394047194,
              "height": 150.28995897749124,
              "skin": "res://b377d643-bbd9-48cc-a07f-10ba0d4650de",
              "color": "#ffffff"
            },
            {
              "_$id": "bq2qzili",
              "_$type": "List",
              "name": "Choose",
              "x": 18,
              "y": 563,
              "width": 420,
              "height": 66,
              "visible": false,
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
            },
            {
              "_$id": "5gs445yx",
              "_$type": "Sprite",
              "name": "Choosed",
              "width": 457,
              "height": 672
            }
          ]
        },
        {
          "_$id": "851pag9k",
          "_$type": "Box",
          "name": "ButtonGroup",
          "y": 706,
          "width": 459,
          "height": 91,
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