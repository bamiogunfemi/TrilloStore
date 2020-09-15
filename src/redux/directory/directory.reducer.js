const INITIAL_STATE ={
  sections: [
    {
        title: 'caps & hats',
        imageUrl: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'coats & jackets',
        imageUrl: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers & shoes',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
  
  ]
}
const directoryReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    default:
      return state;
  }

}
export default directoryReducer

