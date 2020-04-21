function paginate(dataArray, numItemsToShow, classConfig) {
    try{
        const nextButton = document.getElementById(classConfig.nextBtnId)
        const backButton = document.getElementById(classConfig.backBtnId)

        let counter = 0
    
        nextButton.addEventListener('click', ()=>{
            counter++
    
            const currListToDisplay = dataArray.slice(numItemsToShow*counter, numItemsToShow*(counter + 1))
            const prevListToHide = dataArray.slice(numItemsToShow*(counter - 1), numItemsToShow*counter)
    
            addClassToMultiple(prevListToHide, classConfig.toggleItemClassBack)
            removeClassFromMultiple(currListToDisplay, classConfig.toggleItemClassForward)
            removeClassFromSvg(backButton, classConfig.disabledPaginationClass)
            if(currListToDisplay.length < numItemsToShow || (currListToDisplay.length*(counter+1) === dataArray.length)) addClassToSvg(nextButton, classConfig.disabledPaginationClass)
        })
    
        backButton.addEventListener('click', ()=>{
            counter--
    
            const currListToDisplay = dataArray.slice(numItemsToShow*counter, numItemsToShow*(counter + 1))
            const prevListToHide = dataArray.slice(numItemsToShow*(counter + 1), numItemsToShow*(counter + 2))
    
            addClassToMultiple(prevListToHide, classConfig.toggleItemClassForward)
            removeClassFromMultiple(currListToDisplay, classConfig.toggleItemClassBack)
            removeClassFromSvg(nextButton, classConfig.disabledPaginationClass)
            if(currListToDisplay[0].id === dataArray[0].id) addClassToSvg(backButton, classConfig.disabledPaginationClass)
        })
    }catch(ex){
        console.log(ex)
    }
}

function otherPaginate(dataArray, classConfig, wrapper) {
    try{
        let counter = 0

        addClass(classConfig.backBtn, classConfig.disabledPaginationClass)
        addClass(classConfig.mobileBackBtn, classConfig.mobileDisabledPaginationClass)
        if(dataArray.length > 1){
            removeClassFromMultiple([classConfig.nextBtn, classConfig.mobileNextBtn], 'hidden')
            removeClass(classConfig.nextBtn, classConfig.disabledPaginationClass)
            removeClass(classConfig.mobileNextBtn, classConfig.mobileDisabledPaginationClass)
        }

        if(wrapper){
            wrapper.addEventListener('filteredDataChanged', e => {
                counter = 0
                dataArray = e.detail.data
                addClass(classConfig.backBtn, classConfig.disabledPaginationClass)
                addClass(classConfig.mobileBackBtn, classConfig.mobileDisabledPaginationClass)
                if(dataArray.length > 1){
                    removeClassFromMultiple([classConfig.nextBtn, classConfig.mobileNextBtn], 'hidden')
                    removeClass(classConfig.nextBtn, classConfig.disabledPaginationClass)
                    removeClass(classConfig.mobileNextBtn, classConfig.mobileDisabledPaginationClass)
                }else if(dataArray.length === 1){
                    addClass(classConfig.nextBtn, classConfig.disabledPaginationClass)
                    addClass(classConfig.mobileNextBtn, classConfig.mobileDisabledPaginationClass)
                }else {
                    addClass(classConfig.nextBtn, classConfig.disabledPaginationClass)
                    addClass(classConfig.backBtn, classConfig.disabledPaginationClass)
                    addClass(classConfig.mobileNextBtn, classConfig.mobileDisabledPaginationClass)
                    addClass(classConfig.mobileBackBtn, classConfig.mobileDisabledPaginationClass)
                }
            }, true)
        }
        
        classConfig.nextBtn.addEventListener('click', ()=>{
            counter++

            const currListToDisplay = dataArray.slice(counter, (counter + 1))[0]
            const prevListToHide = dataArray.slice((counter - 1), counter)[0]
            const nextSlide = dataArray.slice((counter+1), (counter + 2))[0]
    
            addClass(prevListToHide, classConfig.slideAnimationClass)
            removeClass(prevListToHide, classConfig.frontClass)
            removeClass(currListToDisplay, classConfig.backClass)
            removeClass(currListToDisplay, classConfig.nextClass)
            addClass(currListToDisplay, classConfig.frontClass)
            removeClass(classConfig.backBtn, classConfig.disabledPaginationClass)
            removeClass(classConfig.mobileBackBtn, classConfig.mobileDisabledPaginationClass)
            if(nextSlide && nextSlide.className.indexOf(classConfig.slideAnimationClass) === -1) {
                addClass(nextSlide, classConfig.nextClass)
                removeClass(nextSlide, classConfig.backClass)
            }
            if(!nextSlide) {
                addClass(classConfig.nextBtn, classConfig.disabledPaginationClass)
                addClass(classConfig.mobileNextBtn, classConfig.mobileDisabledPaginationClass)
                addClassToMultiple([classConfig.nextBtn, classConfig.mobileNextBtn], 'hidden')
            }
        })
    
        classConfig.backBtn.addEventListener('click', ()=>{
            counter--

            const currListToDisplay = dataArray.slice(counter, (counter + 1))[0]
            const nextSlide = dataArray.slice((counter + 1), (counter +2))[0]
            const prevListToHide = dataArray.slice((counter+2), (counter + 3))[0]

            removeClass(currListToDisplay, classConfig.slideAnimationClass)
            addClass(currListToDisplay, classConfig.frontClass)
            removeClass(nextSlide, classConfig.frontClass)
            addClass(nextSlide, classConfig.nextClass)
            removeClass(prevListToHide, classConfig.nextClass)
            addClass(prevListToHide, classConfig.backClass)
            removeClass(classConfig.nextBtn, classConfig.disabledPaginationClass)
            removeClass(classConfig.mobileNextBtn, classConfig.mobileDisabledPaginationClass)
            removeClassFromMultiple([classConfig.nextBtn, classConfig.mobileNextBtn], 'hidden')
            if(currListToDisplay.id === dataArray[0].id){
                addClass(classConfig.backBtn, classConfig.disabledPaginationClass)
                addClass(classConfig.mobileBackBtn, classConfig.mobileDisabledPaginationClass)
            }
        })
    }catch(ex){
        console.log(ex)
    }
}
