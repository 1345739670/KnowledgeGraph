module.exports = {
  title: 'My Knowledge Graph',
  description: 'My Knowledge Graph',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    sidebarDepth: 2,
    repo: '1345739670/KnowledgeGraph',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        link: '/frontend/'
      },
      { text: '计算机知识', link: '/cs/' },
      { text: '面试', link: '/interview/' },
    ],
    sidebar: { 
      '/frontend/javascript/bom/': [
        {
          title: 'BOM',
          collapsable: false,
          children: [
            'xmlhttprequest',
            'same-origin',
          ]
        }
      ],
      '/frontend/javascript/events/': [
        {
          title: '事件',
          collapsable: false,
          children: [
            'eventtarget',
            'model'
          ]
        }
      ],
      '/frontend/javascript/dom/': [
        {
          title: 'DOM',
          collapsable: false,
          children: [
            'document'
          ]
        }
      ],
      '/frontend/javascript/stdlib/': [
        {
          title: '标准库',
          collapsable: false,
          children: [
            'array',
            'date',
            'math'
          ]
        }
      ],
      '/frontend/javascript/basic/': [
        {
          title: '基础概念',
          collapsable: false,
          children: [
            'types',
            'operator',
            'statement'
          ]
        }
      ],
      '/frontend/': [
        {
          title: 'JavaScript',
          children: [
            './javascript/basic/',
            './javascript/stdlib/',
            './javascript/features/',
            './javascript/async/',
            './javascript/dom/',
            './javascript/events/',
            './javascript/bom/'
          ]
        },
        {
          title: 'CSS',
          children: [
            './css/',
          ]
        },
        {
          title: 'HTML',
          children: [
            './html/',
          ]
        },
      ],
      
      '/': [
        ''
      ]
    }
    // sidebar: { 
    //   '/frontend/': [
    //     {
    //       title: '前端',
    //       collapsable: false,
    //       children: [
    //         '',
    //         './javascript/',
    //         './css/',
    //         './html/'
    //       ]
    //     }
    //   ]
    // }

    // sidebar: {
    //   '/frontend/README.md': [
    //       '',
    //       './javascript/',
    //       './css/',
    //       './html/'
    //     ],
    //   '/frontend/javascript/': [
    //       '',
    //       './stdlib/',
    //       './types/'
    //   ]
    // }
      

    

  }
}