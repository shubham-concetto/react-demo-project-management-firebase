const initState = {
    projects: [
        {id: '1', title: 'Setup a new project', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error vel architecto, maxime, dolore officia cumque perferendis quas recusandae itaque illo sapiente est modi non reiciendis beatae harum. Labore, neque.'},
        {id: '2', title: 'Meeting with client', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error vel architecto, maxime, dolore officia cumque perferendis quas recusandae itaque illo sapiente est modi non reiciendis beatae harum. Labore, neque.'},
        {id: '3', title: 'Team discussion for project', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error vel architecto, maxime, dolore officia cumque perferendis quas recusandae itaque illo sapiente est modi non reiciendis beatae harum. Labore, neque.'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Error: ', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;