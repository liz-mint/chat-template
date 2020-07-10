const InitialState = {
  current: '101', // id
  list: [
    {
      id: '100',
      name: 'Doctor Who',
      image: 'https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg',
      hashtag: '#Doctor'
    },
    {
      id: '101',
      name: 'Dart Wader',
      image: 'https://pbs.twimg.com/profile_images/887661330832003072/Zp6rA_e2_400x400.jpg',
      hashtag: '#Wader'
    }
  ]
}

export default (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
