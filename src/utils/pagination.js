module.exports = (page, limit, count) => ({
    page:       +page, // + to ensure positivity
    limit:      +limit,
    totalCount: count,
    totalPages: Math.ceil(count / limit),
});