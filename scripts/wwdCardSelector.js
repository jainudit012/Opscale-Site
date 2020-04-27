const wwdWrapper = document.getElementById('wwd__card__box')

const wwdNextBtn = document.getElementById('wwd__paginator-fwd')
const wwdBackBtn = document.getElementById('wwd__paginator-bck')

try {
    const allCardData = loadElementsToArray('wwd__card-', wwdWrapper)

    const classConfig = {
        frontClass: 'card__selected',
        backClass: '',
        nextClass: '',
        disabledPaginationClass: 'mobile-paginator-disabled',
        mobileDisabledPaginationClass: 'mobile-paginator-disabled',
        nextBtn: wwdNextBtn,
        backBtn: wwdBackBtn,
        mobileNextBtn: null, // 'cause there is only mobile pagination by default
        mobileBackBtn: null, // 'cause there is only mobile pagination by default
        nextBtnId: 'wwd__paginator-fwd',
        backBtnId: 'wwd__paginator-bck',
        slideAnimationClass: 'slideOut'
    }

    if(allCardData.valid){
        addSelectItemListener(allCardData.items, 'card__selected', false)
        addSwipeEvents(allCardData.items, 
            target => {
                if(target.id.indexOf('1') !== -1) return;
                wwdBackBtn.click() },
            target => {
                if(target.id.indexOf(allCardData.items.length) !== -1) return;
                wwdNextBtn.click() }
            )
        otherPaginate(allCardData.items, classConfig, null)
    }
}catch(err){
    console.log(err)
}
