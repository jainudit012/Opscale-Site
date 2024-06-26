const siteNavOverlay = document.getElementById('site__nav__overlay')
const sideNavToggleInput = document.getElementById('sidenav__toggle')

const siteHeader = document.getElementById('site__header')

try{
    if(siteNavOverlay && sideNavToggleInput){
        siteNavOverlay.addEventListener('click', ()=>{
            sideNavToggleInput.checked = false
        })

        addSwipeEvents([siteNavOverlay, window], 
            () => {
                sideNavToggleInput.checked = true
                },
            () => {
                sideNavToggleInput.checked = false})
    }

    if(siteHeader){
        let prevScrollpos = window.pageYOffset;
    
        window.addEventListener('scroll', () => {
            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos === 0 ||  prevScrollpos > currentScrollPos) {
                setTimeout(()=> siteHeader.style.top = "0", 300)
            } else {
                setTimeout(()=> siteHeader.style.top = "-300px", 300)
            }
            prevScrollpos = currentScrollPos < 0 ? 0 : currentScrollPos;
        })
    }

}catch(ex){
    console.log(ex)
}
