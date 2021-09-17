export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61447ad61f85602762190300',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5vwjs5gi',
                  apiId: 'fae9db5f-b3dd-44dc-bf1a-897dbe4c62a0'
                },
                {
                  buildHookId: '61447ad61f856029e418fff5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-njenpyz8',
                  apiId: '929f9de1-1938-4f09-a58e-9c22098343dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielcampagne/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-njenpyz8.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
