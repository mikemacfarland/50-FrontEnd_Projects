const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-img')
const userName = document.querySelector('.username')
const userRole = document.querySelector('.role')

const testimonials = [
        {'name' : 'Bradley Humo',
         'position' : 'Content Editor',
         'photo' : 'https://randomuser.me/api/portraits/men/32.jpg',
         'text' : 'I have worked with members of this company for years. They perform quickly while providing accurate and very efficient work product. Array is definitely my preferred e-discovery vendor.'
        },
        {'name' : 'John Jo-Johnson',
         'position' : 'Engineer',
         'photo' : 'https://randomuser.me/api/portraits/men/3.jpg',
         'text' : 'We hired this company to help us on document review for a bankruptcy matter. They jumped into action, immediately engaged our case team and got started on the review in record time.'
        },
        {'name' : 'Jamie Jameson',
         'position' : 'Marketing',
         'photo' : 'https://randomuser.me/api/portraits/women/20.jpg',
         'text' : 'Responsiveness and client service are what keep me coming back to this company. It is great to know that they have our back in times of crisis.'},
    ]
let idx = 0



function updateTestimonial(){
    const {name,position,photo,text} = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    userRole.innerHTML = position

    idx++
    if(idx > testimonials.length - 1){
        idx = 0
    }
}
updateTestimonial()
setInterval(updateTestimonial,10000)