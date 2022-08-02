import {COMMENTS} from '../../app/shared/COMMENTS';

export const selectCommentByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId))
};
