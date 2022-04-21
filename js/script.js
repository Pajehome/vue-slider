

const app = new Vue({
    el:'#app',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ],currentIndex: 0,
        auto: null,
        click: false,
       
    },
    methods: {
          nextSlide(){
           if(this.currentIndex === 4){
               this.currentIndex = 0
               
           }else{
            this.currentIndex++
           }
          },    
          prevSlide(){
            if(this.currentIndex === 0){
                this.currentIndex = 4
                
            }else{
             this.currentIndex--
            }
          },
          autoScroll(){
            this.auto = setInterval(() => {
                this.nextSlide()
               },2000)
          },
          stopOver(){
              clearInterval(this.auto)
          },
        thumbClick(){
         if(!this.click){
            this.setAttribute("class", "active");
         }else{
            this.click = false 
         }
        },

    },
    mounted(){
      this.autoScroll()
    }
})