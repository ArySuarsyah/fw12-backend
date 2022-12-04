const filter = (data, shortKey, countModel, res, call) => {

  data.page = parseInt(data.page) || 1
  data.limit = parseInt(data.limit) || 5
  data.search = data.search || ''
  data.shortBy = (shortKey.includes(data.shortBy) && data.shortBy) || 'createdAt'
  data.short = data.short || 'ASC'

  const params = {
    limit: data.limit,
    offset: (parseInt(data.page) - 1) * data.limit,
    search: data.search,
    shortBy: data.shortBy,
    short: data.short
  }


  const pageInfo = {
    page: data.page,
  }


  countModel(params, (err, results) => {
    if (err) {
      errorHandler(err, res)
    }
    pageInfo.totalMovies = parseInt(results.rows[0].totalMovies)
    pageInfo.totalPage = Math.ceil(pageInfo.totalMovies / data.limit)
    pageInfo.nextPage = data.page < pageInfo.totalPage ? data.page + 1 : null
    pageInfo.prevPage = data.page > 1 ? data.page - 1 : null
    call(params, pageInfo)
    })




};


module.exports = filter