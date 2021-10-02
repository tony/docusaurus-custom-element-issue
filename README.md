## Debugging docusaurus custom element issue

Component: Potentially
[`docusaurus-theme-live-codeblock`](https://github.com/facebook/docusaurus/tree/v2.0.0-beta.6/packages/docusaurus-theme-live-codeblock), possibly something else in the build system.

Ongoing discussion thread: https://github.com/facebook/docusaurus/discussions/5614

## Source and demo sites

- :white_check_mark: docusaurus 2.0.0-beta.0:
  [`2.0.0-beta.0`](https://github.com/tony/docusaurus-custom-element-issue/tree/2.0.0-beta.0)
  https://2-0-0-beta-0.dlpncn4sz6ns6.amplifyapp.com/
- :white_check_mark: docusaurus 2.0.0-beta.0 with minification:
  [`2.0.0-beta.0-with-minify`](https://github.com/tony/docusaurus-custom-element-issue/tree/2.0.0-beta.0-with-minify)
  https://2-0-0-beta-0-with-minify.dlpncn4sz6ns6.amplifyapp.com/
- 🚫 docusaurus 2.0.0-beta.1:
  [`2.0.0-beta.1`](https://github.com/tony/docusaurus-custom-element-issue/tree/2.0.0-beta.1)
  https://2-0-0-beta-1.dlpncn4sz6ns6.amplifyapp.com/
- 🚫 docusaurus 2.0.0-beta.1 with minification:
  [`2.0.0-beta.1-with-minify`](https://github.com/tony/docusaurus-custom-element-issue/tree/2.0.0-beta.1-with-minify)
  https://2-0-0-beta-1-with-minify.dlpncn4sz6ns6.amplifyapp.com/
- 🚫 docusaurus 2.0.0-beta.6:
  [`2.0.0-beta.6`](https://github.com/tony/docusaurus-custom-element-issue/tree/2.0.0-beta.6)
  https://2-0-0-beta-6.dlpncn4sz6ns6.amplifyapp.com/
- 🚫 docusaurus 2.0.0-beta.6 with minifications:
  [`2.0.0-beta.6-with-minify`](https://github.com/tony/docusaurus-custom-element-issue/tree/2.0.0-beta.6-with-minify)
  https://2-0-0-beta-6-with-minify.dlpncn4sz6ns6.amplifyapp.com/
- 🚫 docusaurus canary
  [`canary`](https://github.com/tony/docusaurus-custom-element-issue/tree/canary):
  https://canary.dlpncn4sz6ns6.amplifyapp.com/
- 🚫 docusaurus canary with minification:
  [`canaary-with-minify`](https://github.com/tony/docusaurus-custom-element-issue/tree/canary)
  https://canary-with-minify.dlpncn4sz6ns6.amplifyapp.com/

## What

`<o-embed>`, a [custom
element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) written in [lit element](https://lit.dev/)

## Where

[`static/js/o-embed.bundled.js`](static/js/o-embed.bundled.js): rollup UMD output of
[@social-embed/wc](https://github.com/social-embed/social-embed/tree/%40social-embed/wc%400.0.4-next.0/packages/wc)

Loaded via [`docusaurus.config.js`](docusaurus.config.js):

```javascript
  scripts: ['/js/o-embed.bundled.js'],
```

[`index.js`](src/pages/index.js)
```jsx
<Playground className="language-html">{`<o-embed\n  url="https://youtu.be/FTQbiNvZqaY"\n  width="100%"\n></o-embed>`}</Playground>
```

## What breaks

Live component on the front page in 2.0.0-beta 1 and up (front page)

## What still works

Manual / normal JSX / MDX of `<o-embed>` in all versions
