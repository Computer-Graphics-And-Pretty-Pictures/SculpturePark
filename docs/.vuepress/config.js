module.exports = {
  title: 'Shader Park',
  description: 'References & Examples',
  themeConfig: {
    nav: [
      {text: 'About', link: '/'},
      {text: 'Home', link: 'http://localhost:3000/'}
    ],
    // sidebar: 'auto'
    sidebar: [
      {
        title: 'Geometries',
        collapsable: false,
        children: [
          '/references/geometries/sphere', '/references/geometries/box',
          '/references/geometries/torus', '/references/geometries/line',
          '/references/geometries/cappedCylinder'
        ]
      },
      {
        title: 'Operations',
        collapsable: false,
        children: [
          '/references/operations/add',
          '/references/operations/subtract',
          '/references/operations/intersect',
          '/references/operations/smoothAdd',
          '/references/operations/mix',
        ]
      },
      {
        title: 'Lighting',
        collapsable: false,
        children: [
          '/references/lighting/simpleLighting',
          '/references/lighting/occlusion',
        ]
      },
      {
        title: 'Noise',
        collapsable: false,
        children: [
          '/references/noise/noise',
          '/references/noise/fractalNoise',
        ]
      },
      {
        title: 'Mouse Interactions',
        collapsable: false,
        children: [
          '/references/mouse-interactions/mouse',
          '/references/mouse-interactions/mouseIntersection',
        ]
      }
    ],
    repo: 'Computer-Graphics-And-Pretty-Pictures/SculpturePark',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Edit this page!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'dev',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
  }
}