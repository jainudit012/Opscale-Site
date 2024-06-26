const blogSection = document.getElementById('blogs__section')

function loadBlog(query, blogs, blogArticles){
    observer.observe(observerTarget)

    removeClassFromMultiple(blogs, 'hidden')

    removeClass(floatingIcon , 'invisible')

    addClass(blogs.filter(card => card.id.indexOf(query.selected) !== -1)[0], 'hidden')

    if(query.tab === 'all'){
        addClassToMultiple(blogs.filter(card => card.id.indexOf(query.selected) === -1).slice(3), 'hidden')
    }else {
        addClassToMultiple(blogs.filter(card => ((card.id.indexOf(query.selected) === -1) && (card.dataset.filtertag !== query.tab))), 'hidden')
    }

    removeClass(blogArticlesWrapper, 'hidden')
    addClass(blogArticlesWrapper, 'block')

    toggleClassOnDataSelect(blogFilterTabData, 'filtertag', query.tab, 'blogs__nav__item--selected')

    blogArticles.forEach(article => {
        if(article.id.indexOf(query.selected) !== -1){
            removeClass(article, 'hidden')
        }else addClass(article, 'hidden')
    })
}

function loadBlogsFromQuery(blogs, noContentBlog, blogArticles){
    const blogQuery = loadFromQuery()

    if(blogQuery['tab']) {
        loadBlog(blogQuery, blogs, blogArticles)
    }else {
        removeClass(blogArticlesWrapper, 'block')
        addClass(blogArticlesWrapper, 'hidden')
        if(blogQuery['type']){
            filterBlogs(blogQuery['type'], blogs, 'filtertag', noContentBlog)
            toggleClassOnDataSelect(blogFilterTabData, 'filtertag', blogQuery['type'], 'blogs__nav__item--selected')
        }else {
            filterBlogs('all', blogs, 'filtertag', noBlogElement, noContentBlog)
            toggleClassOnDataSelect(blogFilterTabData, 'filtertag', 'all', 'blogs__nav__item--selected')
        }
    }
}

function loadBlogsFromHashChange(blogs, noContentBlog, blogArticles){
    changeHashToQuery('type', 'all')
    loadBlogsFromQuery(blogs, noContentBlog, blogArticles)
}

try{
    const allBlogData = loadElementsToArray('ii__card-', blogWrapper)

    const blogArticleData = loadElementsToArray('blog-', blogArticlesWrapper)

    if(blogArticleData.valid && allBlogData.valid){
        loadBlogsFromQuery(allBlogData.items, noBlogElement, blogArticleData.items)
        
        window.addEventListener('hashchange', () => loadBlogsFromHashChange(allBlogData.items, noBlogElement, blogArticleData.items))
    }

    const searchInputLabel = document.getElementById('blogs__nav__search-label')

    let toggleSearchInput = true

    if(toggleSearchInput){
        searchInputLabel.children[0].addEventListener('click', ()=>{
            if(window.outerWidth > 1200 || window.innerWidth > 1200){
                addClassToSvg(searchInputLabel.children[0], 'hide')
                removeClass(searchInputLabel.children[1], 'hideabs')
            }
        })
        toggleSearchInput = false
    }

    searchInputLabel.children[1].addEventListener('keyup', e => {
        toggleSearchInput = true

        if (event.keyCode === 13 || event.keyCode === 27) {
            e.preventDefault()
            if (event.keyCode === 13) {
                toggleClassOnDataSelect(blogFilterTabData, 'filtertag', 'all', 'blogs__nav__item--selected')
                filterBlogs(searchInputLabel.children[1].value.toLowerCase(), allBlogData.items, 'searchtag', noBlogElement) // tags are all in lower case
                if(blogArticleData.valid) addClassToMultiple(blogArticleData.items, 'hidden')
            }
            searchInputLabel.children[1].value = '' 
            addClass(searchInputLabel.children[1], 'hideabs')
            removeClassFromSvg(searchInputLabel.children[0], 'hide')
        }
    })
}catch(ex){
    console.log(ex)
}
