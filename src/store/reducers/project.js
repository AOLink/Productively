const initState = {
    projects: [
            {id: '1', title: 'Complete Solo Project', content: 'ipsum ipsum ipsum ipsum'},
            {id: '2', title: 'Complete Chat App Project', content: 'ipsum ipsum ipsum ipsum'},
            {id: '3', title: 'Complete YG App Project', content: 'ipsum ipsum ipsum ipsum'} 
    ]
 }

const projectReducer = (state = initState, action) => {
        switch (action.type) {
                case 'CREATE_PROJECT':
                  console.log('CREATED PROJECT', action.project)
                  return state;
                case 'CREATE_PROJECT_ERROR':
                  console.log('error when creating project', action.err)
                  return state;
                default: 
                  return state;
        }
           
}

export default projectReducer