function getTimeToRead(content) {
    content = content ? content : '';
    const words = content.split(' ').length;
    const time = Math.round(words / 200);
    return `${time} min read`
}

module.exports = {
    mongoURL: 'mongodb://admin:root@ds119736.mlab.com:19736/ng-medium',
    PORT: process.env.PORT || 3000,
    INTERNAL_SERVER_ERROR: 500,
    STATUS_ERROR: 0,
    STATUS_SUCCESS: 1,
    getTimeToRead: getTimeToRead
};
