const openMobileMenu = document.querySelector('.open-mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');
const mobileNav = document.querySelector('.mobile-nav');
const logo = document.querySelector('.logo');

openMobileMenu.addEventListener('click', () =>{
    mobileNav.classList.add("mobile-menu-open");
    logo.classList.add("nav-hidden");
    openMobileMenu.classList.add("nav-hidden");
})
closeMobileMenu.addEventListener('click', () =>{
    mobileNav.classList.remove("mobile-menu-open");
    logo.classList.remove("nav-hidden");
    openMobileMenu.classList.remove("nav-hidden");
})

//*features tabs

//switch active tab
const featuresTab = document.querySelectorAll('.tabs');
    for(let i = 0; i < featuresTab.length; i++) {
        featuresTab[i].addEventListener('click', () =>{
            for(let i = 0; i < featuresTab.length; i++){
                featuresTab[i].classList.remove("active-tab");
            }
            featuresTab[i].classList.add("active-tab");
        });
    }

const activeTab = document.querySelector('.feature-tabs-container');
featuresTab.forEach(tabs => {
    tabs.addEventListener('click', () =>{
        activeTab.style.transition = 'transform .3s ease-in-out';
        if(tabs.id == 'tab1'){
            activeTab.style.transform = 'translateX(' + (-100 * 0) +'%)';
        }
        else if(tabs.id == 'tab2'){
            activeTab.style.transform = 'translateX(' + (-108 * 1) + '%)';
        }
        else if(tabs.id == 'tab3'){
            activeTab.style.transform = 'translateX(' + (-108 * 2) + '%)';
        }
        // activeTab.style.transform = 'translateX(' + (-100 * 2) + '%)'
    });
});

//* FAQ drop down

const faqs = document.querySelectorAll('.faq');
const faqAnswers = document.querySelectorAll('.faq-answer');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('drop');
        faq.style.transition = 'all 4s ease-in-out;';
        // faqAnswers.forEach(answer => {
        //     // console.log(answer);
        //     answer.classList.toggle('drop');
        // })
    });
});





// const beast = 'chickadee';
// const dish = 'chocolateCake';

// function feast(beast, dish) {
//     if(beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(beast.length - 1)) return true;
//   //   else return false;
//   }