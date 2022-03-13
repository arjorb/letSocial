// SIDEBAR

const menuItems = document.querySelectorAll('.menu-item')
//MESSAGE 

const messageNotification = document.getElementById('message-notification');
const messages = document.querySelector('.messages');

const message = document.querySelectorAll('.message');
const messageSearchbox = document.querySelector('#message-search')

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