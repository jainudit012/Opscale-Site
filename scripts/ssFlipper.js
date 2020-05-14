const wrapper = document.getElementById('ss__flipper')
const flipperData = loadElementsToArray('ss__panel-', wrapper)

const ssPanelFwdBtn = document.getElementById('ss__panel-fwd')
const ssPanelBckBtn = document.getElementById('ss__panel-bck')

const ssPanelMobileFwdBtn = document.getElementById('ss__mpaginator-fwd')
const ssPanelMobileBckBtn = document.getElementById('ss__mpaginator-bck')

const classConfig = {
    frontClass: 'ss__flipper__front',
    backClass: '',
    nextClass: '',
    disabledPaginationClass: 'ss__disabled-paginator',
    mobileDisabledPaginationClass: 'mobile-paginator-disabled',
    nextBtn: ssPanelFwdBtn,
    backBtn: ssPanelBckBtn,
    mobileNextBtn: ssPanelMobileFwdBtn,
    mobileBackBtn: ssPanelMobileBckBtn,
    nextBtnId: 'ss__panel-fwd',
    backBtnId: 'ss__panel-bck',
    slideAnimationClass: 'slideOut'
}

try{
    otherPaginate(flipperData.items, classConfig, null)

    addSwipeEvents(flipperData.items, 
        target => {
            if(target.id.indexOf('1') !== -1 || isButtonDisabled(ssPanelBckBtn, classConfig.disabledPaginationClass)) return;
            ssPanelBckBtn.click() },
        target => {
            if(target.id.indexOf(flipperData.items.length) !== -1 || isButtonDisabled(ssPanelFwdBtn, classConfig.disabledPaginationClass)) return;
            ssPanelFwdBtn.click() })

    ssPanelMobileFwdBtn.addEventListener('click', ()=>{
        ssPanelFwdBtn.click()
    })

    ssPanelMobileBckBtn.addEventListener('click', ()=>{
        ssPanelBckBtn.click()
    })
}catch(ex){
    console.log(ex)
}
