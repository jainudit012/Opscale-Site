const siteNavOverlay = document.getElementById('site__nav__overlay')
const sideNavToggleInput = document.getElementById('sidenav__toggle')

const siteHeader = document.getElementById('site__header')

try{
    if(siteNavOverlay && sideNavToggleInput){
        siteNavOverlay.addEventListener('click', ()=>{
            sideNavToggleInput.checked = false
        })
    }

    if(siteHeader){
        let prevScrollpos = window.pageYOffset;
    
        window.addEventListener('scroll', () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                siteHeader.style.top = "0";
            } else {
                siteHeader.style.top = "-300px";
            }
            prevScrollpos = currentScrollPos;
        })
    }

}catch(ex){
    console.log(ex)
}