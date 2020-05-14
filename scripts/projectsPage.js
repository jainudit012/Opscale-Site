const projectSectionWrapper = document.getElementById('projects__wrapper')

const projectStoriesArray = []

const projectCardSection = document.getElementById('project__cards__wrapper')

const project404Section = document.getElementById('project-404')

let gridColumnGap = 120

function setCarouselGridValues(cards, wrapperWidth){
    if(window.innerWidth <= 1400 || window.outerWidth <= 1400){
        gridColumnGap = Math.floor(window.innerWidth / 20)
    }else gridColumnGap = 120

    projectCardSection.style.gridColumnGap = `${gridColumnGap}px`

    cards.forEach(card => {
        card.style.width = `${(wrapperWidth / 3) - ((2/3)*gridColumnGap)}px` //  this will change on adding media query
    })
}


function loadQueriedProjectDetail(projects, projectsNotFound){
    const projectQuery = loadFromQuery()

    if(!projectQuery.projNo || parseInt(projectQuery.projNo) < 1 || parseInt(projectQuery.projNo) > projects.length){
        removeClass(projectsNotFound, 'hidden')
    }else addClass(projectsNotFound, 'hidden');

    toggleClassOnDataSelect(projects, 'projectnumber', projectQuery['projNo'], 'block')
}

function loadProjectsFromHashChange(projects, projectsNotFound){
    let projectPageHash = window.location.hash
    if(projectPageHash.indexOf('more') === -1){
        changeHashToQuery('projNo', '1')
        loadQueriedProjectDetail(projects, projectsNotFound)
    }
}

try{
    const projectDetailData = loadElementsToArray('project-', projectSectionWrapper)

    const projectCardData = loadElementsToArray('project__card-', projectCardSection)

    if(projectDetailData.valid){
        loadQueriedProjectDetail(projectDetailData.items, project404Section)

        for(let i=0;i<projectDetailData.items.length;i++){
            projectStoriesArray.push(document.getElementById(`stories-project-${i+1}`))
        }

        projectStoriesArray.forEach((storyWrapper, index) => {
            if(storyWrapper){
                const storiesData = loadElementsToArray(`project-${index+1}-story-`, storyWrapper)

                const projectNextBtn = document.getElementById(`stories-fwd-project-${index+1}`)
                const projectBackBtn = document.getElementById(`stories-bck-project-${index+1}`)

                const projectMobileNextBtn = null
                const projectMobileBackBtn = null

                if(storiesData.valid){
                    const classConfig = {
                        frontClass: 'project__technology__stories-info-front',
                        backClass: '',
                        nextClass: '',
                        disabledPaginationClass: 'projects-disabled-paginator',
                        mobileDisabledPaginationClass: 'mobile-paginator-disabled',
                        nextBtn: projectNextBtn,
                        backBtn: projectBackBtn,
                        mobileNextBtn: projectMobileNextBtn,
                        mobileBackBtn: projectMobileBackBtn,
                        nextBtnId: `stories-fwd-project-${index+1}`,
                        backBtnId: `stories-bck-project-${index+1}`,
                        slideAnimationClass: 'slideOut'
                    }

                    otherPaginate(storiesData.items, classConfig, null)

                    addSwipeEvents(storiesData.items,
                        target => {
                            console.log()
                            if(target.id.indexOf('story-1') !== -1 || isButtonDisabled(projectBackBtn, classConfig.disabledPaginationClass)) return;
                            projectBackBtn.click() },
                        target => {
                            if(target.id.indexOf(storiesData.items.length) !== -1 || isButtonDisabled(projectNextBtn, classConfig.disabledPaginationClass)) return;
                            projectNextBtn.click() })
                }
            }
        })

        window.addEventListener('hashchange', () => loadProjectsFromHashChange(projectDetailData.items, project404Section))
    }

    let totalVisibleWidth = projectCardSection.clientWidth

    if(projectCardData.valid){
        setCarouselGridValues(projectCardData.items, totalVisibleWidth)

        const classConfig = {
            frontClass: 'project__card--front',
            disabledPaginationClass: 'projects-disabled-paginator',
            nextBtnId: 'project-fwd',
            backBtnId: 'project-bck',
            slideAnimationClass: 'slideOut'
        }

        carousel(3, classConfig, projectCardData.items)

        window.addEventListener('resize', ()=>{
            setCarouselGridValues(projectCardData.items, projectCardSection.clientWidth)
        })
    }
}catch(ex){
    console.log(ex)
}
