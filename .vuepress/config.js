module.exports = {
  title: 'My Knowledge Graph',
  description: 'My Knowledge Graph',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    sidebarDepth: 2,
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
      '/frontend/javascript/stdlib/': [
        {
          title: '标准库',
          collapsable: false,
          children: [
            'array'
          ]
        }
      ],
      '/frontend/javascript/basic/': [
        {
          title: '基础概念',
          collapsable: false,
          children: [
            'types',
            'operator'
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
            './javascript/async/'
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