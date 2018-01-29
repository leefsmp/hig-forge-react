export default {
  modules: [
    {
      id: '1',
      groupId: '1',
      icon: 'home',
      title: 'Home',
      link: '/'
    },
    {
      id: '2',
      groupId: '2',
      icon: 'visible',
      title: 'Models'
    },
    {
      id: '3',
      groupId: '3',
      icon: 'grid',
      title: 'Controls',
      link: '/controls'
    },
    {
      id: '4',
      groupId: '4',
      icon: 'help',
      title: 'About',
      link: '/about'
    }
  ],
  submodules: [
    {
      id: '2-1',
      moduleId: '2',
      title: 'X-Wing',
      link: `/viewer?path=${process.env.PUBLIC_URL}/models/X-Wing/star-wars-x-wing.obj.svf`
    },
    {
      id: '2-2',
      moduleId: '2',
      title: 'Tie Fighter',
      link: `/viewer?path=${process.env.PUBLIC_URL}/models/Tie Fighter/star-wars-vader-tie-fighter.obj.svf`
    }
  ]
}
