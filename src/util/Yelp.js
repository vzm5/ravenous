const apiKey = "VrChWWhFAHopUN-kzErIrh7OjA17OKECLGGQb_Bf7SIjuxzCPQ_OWAhuKA8GUPU_t5KfXI-q24idDOy8FOuR16fOykook8gmODFexUPIxh5VqEBGtV1gLLJ28WQXYHYx";

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {headers: 
                {Authorization: `Bearer ${apiKey}`}
            }).then(response => {
                return response.json(); //convert to Json for formatting purposes
            }).then(jsonResponse => {
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map(business =>({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));  
                }
            });
    }
};

export default Yelp;
