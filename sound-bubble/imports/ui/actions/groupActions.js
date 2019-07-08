export const createGroup = (groupName, creatorId) => {
    return (dispatch, getState) => {
        Meteor.call('createGroup', [groupName, creatorId], (err, result) => {
            if (err) {
                console.log('Creating group failed: ', err);
            } else {
                dispatch(createGroupSuccess(result));
            }
        });
    };
};

const createGroupSuccess = result => {
    return {
        type: 'CREATE_GROUP',
        result: 'success'
    };
};


export const deleteGroup = (groupId) => {
    return (dispatch, getState) => {
        Meteor.call('deleteGroup', groupId, (err, result) => {
            if (err) {
                console.log('Deleting group failed: ', err);
            } else {
                dispatch(deleteGroupSuccess(result));
            }
        });
    };
};

const deleteGroupSuccess = result => {
    return {
        type: 'DELETE_GROUP',
        result: 'success'
    };
};
