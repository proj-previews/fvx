export default {
  "title": "Fvx",
  "tagline": "⭐️  An automatic, convenience and flexible scaffold Tooling for React Development. ⭐️",
  "url": "https://github.com/researchlab/fvx",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "researchlab",
  "projectName": "fvx",
  "themeConfig": {
    "colorMode": {
      "disableSwitch": true,
      "defaultMode": "light",
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "Fvx",
      "logo": {
        "alt": "Fvx Logo",
        "src": "img/favicon.ico"
      },
      "items": [
        {
          "type": "doc",
          "docId": "usage",
          "position": "right",
          "label": "文档"
        },
        {
          "type": "doc",
          "docId": "dev",
          "position": "right",
          "label": "开发指南"
        },
        {
          "type": "doc",
          "docId": "plugin",
          "position": "right",
          "label": "插件开发指南"
        },
        {
          "to": "blog",
          "position": "right",
          "label": "更新记录"
        },
        {
          "href": "https://github.com/researchlab/fvx",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Get Started",
              "to": "/docs/usage"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "researchlab",
              "href": "https://researchlab.github.io/"
            },
            {
              "label": "GitHub Issues",
              "href": "https://github.com/researchlab/fvx/issues"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/researchlab/fvx"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Fvx."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/lihong/workbench/dev/src/github.com/proj-previews/fvx/sidebars.js",
          "editUrl": "https://github.com/proj-previews/fvx/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/proj-previews/fvx/edit/main/"
        },
        "theme": {
          "customCss": "/Users/lihong/workbench/dev/src/github.com/proj-previews/fvx/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};