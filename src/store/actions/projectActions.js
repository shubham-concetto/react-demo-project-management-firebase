export const createProject = (project) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // Make async call
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('notifications').add({
            content: " has added the project",
            user: profile.firstName + profile.lastName,
            time: new Date()
        });
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR'}, err);
        });
    }
}