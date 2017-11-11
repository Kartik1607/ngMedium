function getTimeToRead(content) {
    content = content ? content : '';
    const words = content.split(' ').length;
    const time = Math.round(words / 200);
    return `${time} min read`
}

module.exports = {
    mongoURL: 'mongodb://localhost:27017',
    PORT: 3000,
    INTERNAL_SERVER_ERROR: 500,
    STATUS_ERROR: 0,
    STATUS_SUCCESS: 1,
    getTimeToRead: getTimeToRead
};
