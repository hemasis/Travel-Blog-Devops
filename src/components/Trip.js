import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/Mumbai marine.jpg"
import Trip3 from "../assets/Sydney Harbour.jpg"
import Trip2 from "../assets/London tower bridge.jpg"
import Trip4 from "../assets/California.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip to India"
                text="India, a land of diversity and timeless heritage, offers a mesmerizing blend of history, culture, and natural beauty. From the majestic Taj Mahal in Agra to the serene backwaters of Kerala, every region has its own unique charm. Experience the spiritual aura of Varanasi, the vibrant festivals of Rajasthan, and the bustling streets of Mumbai and Delhi. Savor the rich flavors of Indian cuisine, from spicy street food to royal delicacies. With its ancient traditions, breathtaking landscapes, and warm hospitality, India is a destination that captivates every traveler’s heart."
                />
                <TripData
                image={Trip2}
                heading = "Trip to London"
                text="London, the dynamic capital of the United Kingdom, is a city steeped in history and modern charm. Home to iconic landmarks like Buckingham Palace, the Tower of London, and Big Ben, it offers a perfect blend of tradition and innovation. The city's rich cultural scene thrives with world-class museums, West End theatres, and lively street markets. From the elegance of afternoon tea to the global flavors of its diverse culinary scene, London is a paradise for food lovers. A melting pot of history, culture, and modernity, this vibrant metropolis truly has something for everyone."
                />
                <TripData
                image={Trip3}
                heading = "Trip to Australia"
                text="Australia, a land of stunning landscapes and vibrant cities, offers an unforgettable travel experience. From the iconic Sydney Opera House and the Great Barrier Reef to the vast Outback and lush rainforests, the country is a paradise for nature lovers and adventure seekers. Explore Melbourne’s thriving arts scene, relax on the golden beaches of the Gold Coast, or discover the unique wildlife, including kangaroos and koalas. With its rich Indigenous culture, world-class cuisine, and laid-back lifestyle, Australia is a destination that blends natural beauty with modern charm."
                />
                <TripData
                image={Trip4}
                heading = "Trip to California"
                text="California, the Golden State, is a land of breathtaking landscapes, vibrant cities, and endless adventure. From the iconic Golden Gate Bridge in San Francisco to the glitz and glamour of Hollywood in Los Angeles, every corner of the state has something unique to offer. Explore the stunning beaches of Malibu, the majestic redwoods of Northern California, or the awe-inspiring Yosemite National Park. Take a scenic drive along the Pacific Coast Highway or enjoy world-class wine in Napa Valley. With its perfect blend of nature, culture, and innovation, California is a dream destination for every traveler."
                />
            </div>
        </div>
    )
}
export default Trip;