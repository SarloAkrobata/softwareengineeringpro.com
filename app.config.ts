export default defineAppConfig({
  docus: {
    title: 'Software Engineering Pro',
    description: 'The best place improve your software architecture and system design skills.',
    image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      // twitter: 'nuxt_js',
      github: 'softwareengineering',
      linkedin: {
        label: 'Linkedin',
        icon: 'simple-icons:linkedin',
        href: 'https://www.linkedin.com/company/softwareengineeringpro/'
      }
    },
    // github: {
    //   dir: '.corecms',
    //   branch: 'master',
    //   repo: 'corecms',
    //   owner: 'sarloakrobata',
    //   edit: true
    // },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
