export function BrandJs () {
    const brandapp = Vue.createApp({
    data() {
        return {
            brandsData: [],
            error: null,
            selectedBrands: null,
            loadingBrands: true,
            loadingBrandDetails: false
        }
    },
    created() {
        this.getBrands()
    },
    methods: {
        getBrands() {
            // will be local host/point to laravel api
            fetch("http://127.0.0.1:8000/api/brands")
            .then(res => {
                if(!res.ok) {
                    throw new Error("Oops! Brand list couldn't be fetched, please try again later!");
                }
                return res.json()
            })
            .then(brands => {
                this.brandsData = brands;
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingBrands = false;
            })
        },
        closeLightbox() {
                this.selectedBrands = null;
            },

    

        getBrand(id) {
            this.loadingBrandDetails = true;
            this.error = null;
            this.selectedBrands = null;

            fetch(`http://127.0.0.1:8000/api/brands/${id}`)
            .then(res => {
                if(!res.ok){
                    throw new Error("Sorry! Brand details cannot be fetched, please try again later!")
                }
                return res.json();
            })
            .then(brand => {
                if(!brand) {
                    throw new Error("Sorry we are unable to find the brand you requested.")
                }

                const brandData = brand.data

                this.selectedBrands = {
                    brand_name : brand.brand_name || "Not available",
                    brand_description: brand.brand_description || "Not available",
                    brand_country: brand.brand_country || "Not available",
                    brand_image_url: brand.brand_image_url || ""
                }

                // this.$nextTick(()=> {
                //     window.scrollTo({
                //         top: document.body.scrollHeight,
                //         behavior: 'smooth'
                //     });

                //     gsap.from(this.$refs.brandInfoCon, {
                //         opacity: 0,
                //         y: 20,
                //         duration: 1,
                //         ease: "power2.out"
                //     })
                // })
            })
            .catch(err => {
                this.error = err.message;
            })
            .finally(()=>{
                this.loadingBrandDetails = false;
            });
        }
    }
})
.mount("#brandapp");
}
