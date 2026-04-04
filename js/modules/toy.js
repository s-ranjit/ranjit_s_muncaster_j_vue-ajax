export function ToyJs () {
    const app = Vue.createApp({
    data() {
        return {
            toysData: [],
            error: null,
            selectedToys: null,
            loadingToys: true,
            loadingToyDetails: false
        }
    },
    created() {
        this.getToys()
    },
    methods: {
        getToys() {
            // will be local host/point to laravel api
            fetch("http://127.0.0.1:8000/api/toys")
            .then(res => {
                if(!res.ok) {
                    throw new Error("Oops! Toy List couldn't be fetched, please try again later!");
                }
                return res.json()
            })
            .then(toys => {
                this.toysData = toys;
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingToys = false;
                this.$nextTick(()=> {
                    gsap.from("#toy-list li",{
                        opacity: 0,
                        y: 30,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                             trigger: "#toy-list li",
                             toggleActions: "play none none none",
                             start: "top 85%",
                              end: "bottom top"
                         }
                    })
                })

            })
        },

        getToy(id) {
            this.loadingToyDetails = true;
            this.error = null;
            this.selectedToys = null;

            fetch(`http://127.0.0.1:8000/api/toys/${id}`)
            .then(res => {
                if(!res.ok){
                    throw new Error("Sorry! Toy details cannot be fetched, please try again later!")
                }
                return res.json();
            })
            .then(toy => {
                if(!toy) {
                    throw new Error("Sorry we are unable to find the toy you requested.")
                }

                const toyData = toy.data

                this.selectedToys = {
                    brand_name : toy.brand_name || "Not available",
                    toy_name : toy.toy_name || "Not available",
                    toy_description: toy.toy_description || "Not available",
                    toy_price: toy.toy_price || "Not available",
                    m_image_url: toy.m_image_url || ""
                }

                this.$nextTick(()=> {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });

                    gsap.from(this.$refs.toyInfoCon, {
                        opacity: 0,
                        y: 20,
                        duration: 1,
                        ease: "power2.out"
                    })
                })
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingToyDetails = false;
            });
        }
    }
})
.mount("#app");
}
