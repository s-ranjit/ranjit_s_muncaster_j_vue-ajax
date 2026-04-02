export function VueJs () {
    const app = Vue.createApp({
    data() {
        return {
            ToysData: [],
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
                    throw new Error("Failed to fetch the toys");
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
            })
        },

        getToy(id) {
            this.loadingToyDetails = true;
            this.error = null;
            this.selectedToys = null;

            fetch(`http://127.0.0.1:8000/api/toys/${id}`)
            .then(res => {
                if(!res.ok){
                    throw new Error("Failed to fetch toy details")
                }
                return res.json();
            })
            .then(toy => {
                if(!toy) {
                    throw new Error("Sorry we are unable to find the toy you requested.")
                }

                const toyData = toy.data

                this.selectedToys = {
                    toy_name : toyData.toy.toy_name || "Not available",
                    toy_brand : toyData.toy.toy_brand || "Not available",
                    toy_description: toyData.toy_description || "Not available",
                    toy_price: toyData.toy_price || "Not available",
                    image_url: toyData.image_url || ""
                }

                this.$nextTick(()=> {
                    window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth'
                    });

                    gsap.from(this.$refs.toyInfoCon, {
                        opacity: 0,
                        y: 20,
                        duration: 2,
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