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
            },
            {
              "_$id": "0jcp5bp9",
              "_$type": "Sprite",
              "name": "card(8)",
              "x": 130,
              "y": 460,
              "width": 60,
              "height": 66,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "ksjw5nno",
              "_$type": "Sprite",
              "name": "card(9)",
              "x": 200,
              "y": 460,
              "width": 60,
              "height": 66,
              "texture": {
                "_$uuid": "56896809-662a-488d-9e83-ba42427083d5",
                "_$type": "Texture"
              }
            },
            {
              "_$id": "ksn06r5m",
              "_$type": "Sprite",
              "name": "card(10)",
              "x": 270,
              "y": 460,
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
            },
            {
              "_$id": "smuwxjxj",
              "_$type": "Image",
              "name": "Push",
              "x": 65,
              "y": -3,
              "width": 85,
              "height": 74,
              "skin": "res://1e414e55-be9c-4e05-8b98-307947bde062",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "ahpunc1r",
                  "_$type": "Sprite",
                  "name": "Icon",
                  "x": 15,
                  "y": 5,
                  "width": 51.5,
                  "height": 51.5,
                  "texture": {
                    "_$uuid": "19ec0667-4051-4226-85d7-ce12299d9a1c",
                    "_$type": "Texture"
                  }
                },
                {
                  "_$id": "nuey7k3v",
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
                      "_$id": "9n9tbx81",
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
        },
        {
          "_$id": "k0e7w280",
          "_$type": "Box",
          "name": "GameWin",
          "width": 460,
          "height": 800,
          "visible": false,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "_$comp": [
            {
              "_$type": "a1237517-506a-4cbc-b262-18b99d02f411",
              "scriptPath": "../src/GameMain/GameWinManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "x2qa9p25",
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
              "_$id": "1yxxh1b6",
              "_$type": "Image",
              "name": "MianInfoBackground",
              "x": 117,
              "y": 132,
              "width": 225.0030246179651,
              "height": 119.75212952640133,
              "skin": "res://457286ea-b9b0-4357-b985-6441bca428c3",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "jk3xxyng",
                  "_$type": "Text",
                  "name": "Title",
                  "width": 219,
                  "height": 44,
                  "text": "恭喜你",
                  "fontSize": 30,
                  "color": "rgba(252, 205, 49, 1)",
                  "bold": true,
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                },
                {
                  "_$id": "9g652cu8",
                  "_$type": "Text",
                  "name": "SubTitle",
                  "y": 42,
                  "width": 219,
                  "height": 59,
                  "text": "加入鸡群",
                  "fontSize": 43,
                  "color": "rgba(254, 235, 235, 1)",
                  "bold": true,
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                },
                {
                  "_$id": "od6klk5n",
                  "_$type": "Text",
                  "name": "LittleTitle",
                  "x": 42,
                  "y": 98,
                  "width": 138,
                  "height": 19,
                  "text": "通关用时15分43秒",
                  "fontSize": 15,
                  "color": "rgba(252, 205, 49, 1)",
                  "align": "center",
                  "valign": "middle",
                  "leading": 2
                }
              ]
            },
            {
              "_$id": "lpddq5sq",
              "_$type": "Image",
              "name": "BackHome",
              "x": 152,
              "y": 629,
              "width": 156.31293179805124,
              "height": 51.07254207263068,
              "bottom": 120,
              "centerX": 0,
              "skin": "res://80e33d42-8dba-4674-922b-e8d6d3378f2d",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "ioyj0klo",
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
            },
            {
              "_$id": "tn8a96hx",
              "_$type": "Image",
              "name": "Sunshine",
              "x": 96,
              "y": 357,
              "width": 267.7121256041413,
              "height": 271.50212995632336,
              "centerX": 0,
              "centerY": 93,
              "skin": "res://7d877b64-549c-4f9f-9309-cde528dc90cd",
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "3ad6318j",
                  "_$type": "Image",
                  "name": "newImage",
                  "x": 84.99999999999994,
                  "y": 73.80079769554614,
                  "width": 106.92421892311103,
                  "height": 109.19920230445385,
                  "skin": "res://aa702d08-1166-4cfa-bc0c-0ea5140bce2c",
                  "color": "#ffffff"
                },
                {
                  "_$id": "ps80wf5p",
                  "_$type": "Sprite",
                  "name": "BlackBackground",
                  "x": 54,
                  "y": 174,
                  "width": 166,
                  "height": 24,
                  "_gcmds": [
                    {
                      "_$type": "DrawRectCmd",
                      "x": 0,
                      "y": 0,
                      "width": 1,
                      "height": 1,
                      "percent": true,
                      "lineWidth": 1,
                      "fillColor": "rgba(7, 6, 6, 1)"
                    }
                  ],
                  "_$child": [
                    {
                      "_$id": "8ukxp0p9",
                      "_$type": "Text",
                      "name": "Info",
                      "width": 169,
                      "height": 27,
                      "text": "您所在的地区为第  名",
                      "fontSize": 15,
                      "color": "#FFFFFF",
                      "align": "center",
                      "valign": "middle",
                      "leading": 2,
                      "_$child": [
                        {
                          "_$id": "h8plise8",
                          "_$type": "Text",
                          "name": "number",
                          "x": 114,
                          "width": 47,
                          "height": 25,
                          "text": "1",
                          "fontSize": 18,
                          "color": "rgba(225, 199, 45, 1)",
                          "bold": true,
                          "align": "center",
                          "valign": "middle",
                          "leading": 2
                        }
                      ]
                    }
                  ]
                },
                {
                  "_$id": "ti6rqq9c",
                  "_$type": "Image",
                  "name": "chicken1",
                  "x": 272.99999999999994,
                  "y": -60,
                  "width": 106.92421892311103,
                  "height": 109.19920230445385,
                  "skin": "res://0081e9ae-de4b-468a-a9ce-33825f10afcc",
                  "color": "#ffffff"
                },
                {
                  "_$id": "licsa72p",
                  "_$type": "Image",
                  "name": "chicken2",
                  "x": 208,
                  "y": -60.19920230445386,
                  "width": 106.92421892311103,
                  "height": 109.19920230445385,
                  "skin": "res://4529f562-ad5f-4bad-ae97-8d4b0e454fc0",
                  "color": "#ffffff"
                },
                {
                  "_$id": "tgb0t3ii",
                  "_$type": "Image",
                  "name": "chicken3",
                  "x": 138.99999999999994,
                  "y": -60,
                  "width": 106.92421892311103,
                  "height": 109.19920230445385,
                  "skin": "res://8be64959-97c5-4abb-a597-0ab723f90cf9",
                  "color": "#ffffff"
                },
                {
                  "_$id": "kxle7ysv",
                  "_$type": "Image",
                  "name": "chicken4",
                  "x": 72.99999999999994,
                  "y": -60.19920230445386,
                  "width": 106.92421892311103,
                  "height": 109.19920230445385,
                  "skin": "res://17b8953f-1d41-42f0-9848-87ea8c2e2dc9",
                  "color": "#ffffff"
                }
              ]
            }
          ]
        },
        {
          "_$id": "sc4fyap0",
          "_$type": "Box",
          "name": "VideoScene",
          "width": 460,
          "height": 800,
          "visible": false,
          "left": 0,
          "right": 0,
          "top": 0,
          "bottom": 0,
          "_$comp": [
            {
              "_$type": "161326cd-a581-4ee4-ad97-c72aa7589689",
              "scriptPath": "../src/VideoScene/VideoSceneManager.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "5vupoo4c",
              "_$type": "VideoNode",
              "name": "Video",
              "width": 460,
              "height": 800,
              "source": "res://2df7b7c5-a48d-4677-9f9a-dc12b924f2f9"
            },
            {
              "_$id": "urdcir8q",
              "_$type": "Image",
              "name": "TopLeft",
              "x": 40,
              "y": 80,
              "width": 204,
              "height": 38,
              "left": 40,
              "top": 80,
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "hz7e542n",
                  "_$type": "Sprite",
                  "name": "Rect",
                  "width": 204,
                  "height": 38,
                  "_gcmds": [
                    {
                      "_$type": "DrawRectCmd",
                      "x": 0,
                      "y": 0,
                      "width": 1,
                      "height": 1,
                      "percent": true,
                      "lineWidth": 3,
                      "lineColor": "rgba(143, 143, 143, 1)"
                    }
                  ],
                  "_$child": [
                    {
                      "_$id": "pr67ybek",
                      "_$type": "Text",
                      "name": "Title",
                      "width": 77,
                      "height": 39,
                      "text": "广告",
                      "fontSize": 22,
                      "color": "#FFFFFF",
                      "align": "center",
                      "valign": "middle",
                      "leading": 2
                    },
                    {
                      "_$id": "qari4pif",
                      "_$type": "Text",
                      "name": "info",
                      "x": 78,
                      "width": 123,
                      "height": 39,
                      "text": "倒计时60s",
                      "fontSize": 20,
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
              "_$id": "3si5cw1o",
              "_$type": "Image",
              "name": "RightLeft",
              "x": 354,
              "y": 80,
              "width": 66,
              "height": 38,
              "right": 40,
              "top": 80,
              "color": "#ffffff",
              "_$child": [
                {
                  "_$id": "hohp7kab",
                  "_$type": "Sprite",
                  "name": "Rect",
                  "width": 65,
                  "height": 38,
                  "_gcmds": [
                    {
                      "_$type": "DrawRectCmd",
                      "x": 0,
                      "y": 0,
                      "width": 1,
                      "height": 1,
                      "percent": true,
                      "lineWidth": 3,
                      "lineColor": "rgba(143, 143, 143, 1)"
                    }
                  ],
                  "_$child": [
                    {
                      "_$id": "yh6u4zbd",
                      "_$type": "Text",
                      "name": "Title",
                      "width": 65,
                      "height": 39,
                      "text": "关闭",
                      "fontSize": 22,
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