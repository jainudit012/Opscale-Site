const projectSectionWrapper = document.getElementById('projects__wrapper')

const projectCardSection = document.getElementById('project__cards__wrapper')
let gridColumnGap = 120 // will have to make it responsive

try{
    const projectDetailData = loadElementsToArray('project-', projectSectionWrapper)

    const projectCardData = loadElementsToArray('project__card-', projectCardSection)

    projectCardSection.style.gridColumnGap = `${gridColumnGap}px`

    function loadQueriedProjectDetail(){
        const projectQuery = loadFromQuery()

        if(projectDetailData.valid){
            toggleClassOnDataSelect(projectDetailData.items, 'projectnumber', projectQuery['projNo'], 'block')
        }
    }
    
    loadQueriedProjectDetail()

    let totalVisibleWidth = projectCardSection.clientWidth

    if(projectCardData.valid){
        projectCardData.items.forEach(card => {
            if(card.children[0] && card.children[0].nodeName.toLowerCase() === 'img') {
                card.children[0].style.width = `${(totalVisibleWidth / 3) - ((2/3)*gridColumnGap)}px` //  this will change on adding media query
            }
        })
    }
}catch(ex){
    console.log(ex)
}


