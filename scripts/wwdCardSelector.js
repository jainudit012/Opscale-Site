const wwdWrapper = document.getElementById('wwd__card__box')
try {
    const allCardData = loadElementsToArray('wwd__card-', wwdWrapper)

    const classConfig = {
        frontClass: 'card__selected',
        backClass: '',
        nextClass: '',
        disabledPaginationClass: 'mobile-paginator-disabled',
        nextBtnId: 'wwd__paginator-2',
        backBtnId: 'wwd__paginator-1',
        slideAnimationClass: 'slideOut'
    }

    if(allCardData.valid){
        addSelectItemListener(allCardData.items, 'card__selected', false)

        otherPaginate(allCardData.items, classConfig, null)
    }
}catch(err){
    console.log(err)
}
