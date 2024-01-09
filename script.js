const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');
const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww"  alt=" "/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, corrupti.'
    profileImg.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Profile picture">'
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Feb 08, 2023'

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgText.forEach(bg => bg.classList.remove('animated-bg-text'));

}