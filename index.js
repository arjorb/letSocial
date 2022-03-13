// SIDEBAR

const menuItems = document.querySelectorAll('.menu-item')
//MESSAGE 

const messageNotification = document.getElementById('message-notification');
const messages = document.querySelector('.messages');

const message = document.querySelectorAll('.message');
const messageSearchbox = document.querySelector('#message-search')
//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span')
let root = document.querySelector(':root')


//remove class function

const changeActive = () =>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

//search message function

const searchMessage = () =>{
    const val = messageSearchbox.value.toLowerCase();
    console.log(val);
    message.forEach(chat =>{
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', ()=>{
        changeActive();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0  1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
    document.querySelector('#message-notification .notification-count').style.display = 'none';
})

messageSearchbox.addEventListener('keyup',searchMessage)


const openModal = () =>{
    themeModal.style.display = 'grid'
}

const closeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    changeActive();
    }

}

themeModal.addEventListener('click',closeModal)
theme.addEventListener('click',openModal)

// ======================= FONTS ===========================

const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}


fontSizes.forEach(size =>{
    size.addEventListener('click', ()=>{
    let fontSize;
    removeSizeSelector();
    size.classList.add('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
         //Change the fontSize
    document.querySelector('html').style.fontSize = fontSize;
    })
})