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
      "_$comp": [
        {
          "_$type": "e9d6caa7-062a-40d7-b343-e6a16f5cb699",
          "scriptPath": "../src/GameMain/GameMainManager.ts"
        }
      ],
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
        },
        {
          "_$id": "3yk49z6e",
          "_$type": "Box",
          "name": "LevelUp",
          "width": 460,
          "height": 800,
          "visible": false,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "_$comp": [
            {
              "_$type": "ddea99e8-fbda-4bc4-9857-77989405fca0",
              "scriptPath": "../src/GameMain/LevelUpManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "fbsbszge",
              "_$type": "Box",
              "name": "blackBackground",
              "width": 460,
              "height": 800,
              "_mouseState": 2,
              "left": 0,
              "right": 0,
              "top": 0,
              "bottom": 0,
              "bgColor": "rgba(0, 0, 0, 0.5882352941176471)"
            },
            {
              "_$id": "ih72k757",
              "_$type": "Image",
              "name": "LevelUpBackground",
              "x": 117,
              "y": 242,
              "width": 225.0030246179651,
              "height": 119.75212952640133,
              "skin": "res://457286ea-b9b0-4357-b985-6441bca428c3",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "mt2l8bmz",
                  "_$type": "Text",
                  "name": "Title",
                  "width": 223,
                  "height": 100,
                  "text": "难度飙升",
                  "fontSize": 50,
                  "color": "rgba(252, 57, 49, 1)",
                  "bold": true,
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                },
                {
                  "_$id": "nyn5qzu7",
                  "_$type": "Text",
                  "name": "LittleTitle",
                  "x": 42,
                  "y": 98,
                  "width": 138,
                  "height": 19,
                  "text": "通关后将加入鸡群",
                  "fontSize": 15,
                  "color": "#FFFFFF",
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                }
              ]
            }
          ]
        },
        {
          "_$id": "1vhwf90l",
          "_$type": "Box",
          "name": "GameOver",
          "width": 460,
          "height": 800,
          "visible": false,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "_$comp": [
            {
              "_$type": "80a89061-91e1-4f61-9df7-c1e5bc7b8bc5",
              "scriptPath": "../src/GameMain/GameOverManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "95wabrc4",
              "_$type": "Box",
              "name": "blackBackground",
              "width": 460,
              "height": 800,
              "_mouseState": 2,
              "left": 0,
              "right": 0,
              "top": 0,
              "bottom": 0,
              "bgColor": "rgba(0, 0, 0, 0.5882352941176471)"
            },
            {
              "_$id": "ecoyvxko",
              "_$type": "Image",
              "name": "LevelUpBackground",
              "x": 117,
              "y": 242,
              "width": 225.0030246179651,
              "height": 119.75212952640133,
              "skin": "res://457286ea-b9b0-4357-b985-6441bca428c3",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "uzbukod0",
                  "_$type": "Text",
                  "name": "Title",
                  "width": 223,
                  "height": 100,
                  "text": "槽位已满",
                  "fontSize": 50,
                  "color": "rgba(252, 57, 49, 1)",
                  "bold": true,
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                },
                {
                  "_$id": "aipd2wwa",
                  "_$type": "Text",
                  "name": "LittleTitle",
                  "x": 42,
                  "y": 98,
                  "width": 138,
                  "height": 19,
                  "text": "今日已挑战5次",
                  "fontSize": 15,
                  "color": "#FFFFFF",
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                }
              ]
            },
            {
              "_$id": "iva7koip",
              "_$type": "Box",
              "name": "ButtonGroup",
              "y": 367,
              "width": 459,
              "height": 430,
              "_$child": [
                {
                  "_$id": "fq2lxqtu",
                  "_$type": "Image",
                  "name": "Reset",
                  "x": 151,
                  "y": 157,
                  "width": 156.31293179805124,
                  "height": 51.07254207263068,
                  "centerX": 0,
                  "skin": "res://80e33d42-8dba-4674-922b-e8d6d3378f2d",
                  "color": "#ffffff",
                  "_$child": [
                    {
                      "_$id": "xkctuwup",
                      "_$type": "Text",
                      "name": "Title",
                      "x": 2,
                      "y": 3,
                      "width": 153,
                      "height": 42,
                      "text": "重新挑战",
                      "fontSize": 26,
                      "color": "rgba(0, 0, 0, 1)",
                      "bold": true,
                      "align": "center",
                      "valign": "middle",
                      "leading": 2
                    }
                  ]
                },
                {
                  "_$id": "gs70n38r",
                  "_$type": "Image",
                  "name": "BackHome",
                  "x": 151,
                  "y": 221,
                  "width": 156.31293179805124,
                  "height": 51.07254207263068,
                  "centerX": 0,
                  "skin": "res://80e33d42-8dba-4674-922b-e8d6d3378f2d",
                  "color": "#ffffff",
                  "_$child": [
                    {
                      "_$id": "7202yghd",
                      "_$type": "Text",
                      "name": "Title",
                      "x": 2,
                      "y": 3,
                      "width": 153,
                      "height": 42,
                      "text": "返回鸡群",
                      "fontSize": 26,
                      "color": "rgba(0, 0, 0, 1)",
                      "bold": true,
                      "align": "center",
                      "valign": "middle",
                      "leading": 2
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "r46glitu",
          "_$type": "Box",
          "name": "RevivePage",
          "width": 460,
          "height": 800,
          "visible": false,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "_$comp": [
            {
              "_$type": "28ea23ac-0ff5-40e1-b9ef-cfa162bb792e",
              "scriptPath": "../src/GameMain/RevivePageManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "c7mwdsoi",
              "_$type": "Box",
              "name": "blackBackground",
              "width": 460,
              "height": 800,
              "_mouseState": 2,
              "left": 0,
              "right": 0,
              "top": 0,
              "bottom": 0,
              "bgColor": "rgba(0, 0, 0, 0.5882352941176471)"
            },
            {
              "_$id": "fv9zkf10",
              "_$type": "Image",
              "name": "Background",
              "x": 49,
              "y": 150,
              "width": 361.92432930683714,
              "height": 539.071026633225,
              "top": 150,
              "centerX": 0,
              "skin": "res://0de8f319-4b95-4738-9394-8ff31b422f64",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "9b8mar99",
                  "_$type": "Image",
                  "name": "Info",
                  "x": 59,
                  "y": 81,
                  "width": 243.5284733638983,
                  "height": 238.3955547215676,
                  "centerX": 0,
                  "skin": "res://02262042-8b42-40f8-8520-f34603f4613f",
                  "color": "#ffffff"
                },
                {
                  "_$id": "b5wmfn80",
                  "_$type": "Image",
                  "name": "TitleBackground",
                  "x": -28,
                  "y": -48,
                  "width": 417.4690695693807,
                  "height": 90.8024878621915,
                  "skin": "res://d1e54667-bfef-4ab7-97ac-453ed6411c08",
                  "color": "#ffffff",
                  "_$child": [
                    {
                      "_$id": "3t4vy0no",
                      "_$type": "Text",
                      "name": "Title",
                      "x": 32.000000000000036,
                      "y": 10.999999999999972,
                      "width": 353,
                      "height": 60,
                      "text": "立即复活",
                      "fontSize": 49,
                      "color": "rgba(255, 254, 85, 1)",
                      "bold": true,
                      "align": "center",
                      "valign": "middle",
                      "leading": 2,
                      "stroke": 3
                    }
                  ]
                },
                {
                  "_$id": "hfd5dwcn",
                  "_$type": "Image",
                  "name": "CloseButton",
                  "x": 306,
                  "y": -22,
                  "width": 55.917808219178106,
                  "height": 60.21917808219177,
                  "skin": "res://7905c976-4919-4f3c-9a18-08cd9b910f5b",
                  "color": "#ffffff"
                },
                {
                  "_$id": "ksqs2z8g",
                  "_$type": "Image",
                  "name": "VideoButton",
                  "x": 75,
                  "y": 348,
                  "width": 211.69548140884652,
                  "height": 77.31035963215226,
                  "centerX": 0,
                  "skin": "res://6341cf5d-715d-4f2f-af0d-478342e420c2",
                  "color": "#ffffff",
                  "_$child": [
                    {
                      "_$id": "pxkde44q",
                      "_$type": "Image",
                      "name": "Icon",
                      "x": 8.000000000000114,
                      "y": 19,
                      "width": 43.99999999999999,
                      "height": 33.00000000000003,
                      "skin": "res://05660d65-64d5-4ec1-aad6-03873f4fdb7d",
                      "color": "#ffffff"
                    },
                    {
                      "_$id": "9v0kehi7",
                      "_$type": "Text",
                      "name": "Text",
                      "x": 56,
                      "y": 11,
                      "width": 150,
                      "height": 52,
                      "text": "获得(0/1)",
                      "fontSize": 33,
                      "color": "#FFFFFF",
                      "bold": true,
                      "align": "center",
                      "valign": "middle",
                      "leading": 2,
                      "stroke": 2
                    }
                  ]
                },
                {
                  "_$id": "ydc61al8",
                  "_$type": "Image",
                  "name": "RefuseButton",
                  "x": 75,
                  "y": 438,
                  "width": 211.69548140884652,
                  "height": 77.31035963215226,
                  "centerX": 0,
                  "skin": "res://06216a43-4d53-4857-98d5-f7e2758cbe1c",
                  "color": "#ffffff",
                  "_$child": [
                    {
                      "_$id": "gcagytqw",
                      "_$type": "Text",
                      "name": "Text",
                      "width": 211,
                      "height": 71,
                      "text": "残忍拒绝",
                      "fontSize": 35,
                      "color": "#FFFFFF",
                      "bold": true,
                      "align": "center",
                      "valign": "middle",
                      "leading": 2,
                      "stroke": 2
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