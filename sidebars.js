module.exports = {
  sidebar: [
    {
      '@social-embed': [
        'home',
        {
          type: 'category',
          label: '▶️ @social-embed/wc',
          collapsed: false,
          items: [
            'wc/index',
            'wc/installation',
            {
              type: 'category',
              label: 'Providers',
              collapsed: false,
              items: [
                'wc/providers/generic',
                'wc/providers/youtube',
                'wc/providers/dailymotion',
                'wc/providers/spotify',
                'wc/providers/vimeo',
                'wc/providers/wistia',
                'wc/providers/loom',
                'wc/providers/edpuzzle',
              ],
            },
            {
              type: 'category',
              label: 'Configuration',
              collapsed: false,
              items: [
                'wc/configuration/dimensions',
                'wc/configuration/allowfullscreen',
                'wc/configuration/url',
              ],
            },
          ],
        },
      ],
    },
  ],
};
