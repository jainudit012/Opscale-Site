const wrapper = document.getElementById('ss__flipper')
const flipperData = loadElementsToArray('ss__panel-', wrapper)

const ssPanelFwdBtn = document.getElementById('ss__panel-fwd')
const ssPanelBckBtn = document.getElementById('ss__panel-bck')

const ssPanelMobileFwdBtn = null
const ssPanelMobileBckBtn = null

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
}catch(ex){
    console.log(ex)
}

