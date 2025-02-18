import { Router } from "express";

const router = Router();

router.get("/data",(req,res)=>{

    const data=[
        {
          "id": 1,
          "place": "Taj Mahal",
          "district": "Agra",
          "area": "Agra, Uttar Pradesh",
          "image": "https://imgs.search.brave.com/gx9VvULfEZWEwcpa-mJj4E2Pqj00WMoDcebZrm_HQps/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3Rhai1tYWhh/bC1wbmctLTIwMjAu/cG5n",
          "openingTime": "6:00 AM - 7:00 PM",
          "bestTimeToVisit": "October to March",
          "description": "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
        },
        {
          "id": 2,
          "place": "Jaipur City Palace",
          "district": "Jaipur",
          "area": "Jaipur, Rajasthan",
          "image": "https://imgs.search.brave.com/kQo-KJxASbaf_9Ntwlbi6U8zhFt0ubcnimxQMfNHyO0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg2LzAzLzkx/LzM2MF9GXzE4NjAz/OTEzMV9EdHpGbHVr/ZmFEeTBGZHNncTZI/ekp3R0dKMUlJNUxz/OS5qcGc",
          "openingTime": "9:30 AM - 5:00 PM",
          "bestTimeToVisit": "November to February",
          "description": "The City Palace, Jaipur, is a palace complex in Jaipur, the capital of the Rajasthan state, India. It includes the Chandra Mahal and Mubarak Mahal palaces and other buildings."
        },
        {
          "id": 3,
          "place": "Golden Temple",
          "district": "Amritsar",
          "area": "Amritsar, Punjab",
          "image": "https://imgs.search.brave.com/BtxiAlDUvIZFjEi1pP25IDiAlgS8Cvzv3QmmE7aFlq8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzc4LzUxLzIy/LzM2MF9GXzc4NTEy/MjU4X2FFOE50ZTR2/Tkp3Z29rT2F5c0lP/em8xelVpdWk0SlRW/LmpwZw",
          "openingTime": "Open 24 hours",
          "bestTimeToVisit": "November to March",
          "description": "The Golden Temple, also known as Sri Harmandir Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism."
        },
        {
          "id": 4,
          "place": "Red Fort",
          "district": "Delhi",
          "area": "Old Delhi, Delhi",
          "image": "https://imgs.search.brave.com/tk-Ehk4ZEcnprwaDARshyn5SBcd6oJLlk5utNOMciDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yZWQtZm9ydC1k/ZWxoaS1pbmRpYV8y/OTcxODQtNzUuanBn/P3NlbXQ9YWlzX2h5/YnJpZA",
          "openingTime": "9:30 AM - 4:30 PM",
          "bestTimeToVisit": "October to March",
          "description": "The Red Fort is a historic fort in the city of Delhi in India. It was the main residence of the emperors of the Mughal dynasty for nearly 200 years, until 1857."
        },
        {
          "id": 5,
          "place": "Gateway of India",
          "district": "Mumbai",
          "area": "Mumbai, Maharashtra",
          "image": "https://imgs.search.brave.com/PA6Qgd9CaDgUYhEtGET1cwIX0mcGC4M577CQh7YzqGY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/MjQxNTA2L3Bob3Rv/L3RoZS1nYXRld2F5/LW9mLWluZGlhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz0w/NXFBWUwzTDdMMC1m/Z0hGZk1PTUxVeDBs/MnVSNW8tdEx6dk9R/T05tWGVjPQ",
          "openingTime": "Open 24 hours",
          "bestTimeToVisit": "November to February",
          "description": "The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India. It was erected to commemorate the landing of King-Emperor George V and Queen-Empress Mary at Apollo Bunder."
        },
        {
          "id": 6,
          "place": "Mysore Palace",
          "district": "Mysore",
          "area": "Mysore, Karnataka",
          "image": "https://imgs.search.brave.com/jIoLiFajYPHgakF9eivHO92oBRyxViQ88NC4ISnHz-0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU1/OTk4OTg3L3Bob3Rv/L3BhbGFjZS1vZi1t/eXNvcmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXJoRVBH/OG9CVmI2OV9XLVo5/M3NZeUJvSlhrdFo5/NVlwRTN0dTEweE1Z/ZTg9",
          "openingTime": "10:00 AM - 5:30 PM",
          "bestTimeToVisit": "July to March",
          "description": "The Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence at Mysore in the Indian state of Karnataka."
        },
        {
          "id": 7,
          "place": "Hawa Mahal",
          "district": "Jaipur",
          "area": "Jaipur, Rajasthan",
          "image": "https://imgs.search.brave.com/SKsRY1zV6Xrfkiub_H6Ad1fMv8r1MiIsKiXgb961X3c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM2/MTc3MjAyL3Bob3Rv/L2hhd2EtbWFoYWwt/amFpcHVyLWluZGlh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1CVUl0d29DNWty/enR5S2xveF9fYlli/dDRVWVZpUE5RTjNu/aFdpZThVbHJ3PQ",
          "openingTime": "9:00 AM - 4:30 PM",
          "bestTimeToVisit": "October to March",
          "description": "The Hawa Mahal is a palace in Jaipur, India. Made with red and pink sandstone, the palace sits on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers."
        },
        {
          "id": 8,
          "place": "Qutub Minar",
          "district": "Delhi",
          "area": "Mehrauli, Delhi",
          "image": "https://imgs.search.brave.com/Ovlr-HAKxlj6A8G5pdOhCakGVxTVIyif9bi0Lg5Hcog/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY1/MjA0NTkyL3Bob3Rv/L3F1dHViLW1pbmFy/LWRlbGhpLWluZGlh/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZdkZMUG1RbWxn/Q3lYN1JHWkExVnBL/Y3RkQzZRc0NoSU56/TFNNRFBOSTlrPQ",
          "openingTime": "7:00 AM - 5:00 PM",
          "bestTimeToVisit": "October to March",
          "description": "The Qutub Minar is a minaret and victory tower that forms part of the Qutb complex, a UNESCO World Heritage Site in the Mehrauli area of Delhi, India."
        },
        {
          "id": 9,
          "place": "Ajanta and Ellora Caves",
          "district": "Aurangabad",
          "area": "Aurangabad, Maharashtra",
          "image": "https://imgs.search.brave.com/OTyaQTkglTnAufLARh69N3IZ1PXLP8M_Q_WQBICjcSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hcGku/dGhlaW5kaWEuY28u/aW4vc3RvcmFnZS9p/bWFnZS9wbGFjZXMv/YXJjaGl0ZWN0dXJl/LW9mLUVsbG9yYV8x/Mi5qcGc",
          "openingTime": "9:00 AM - 5:30 PM",
          "bestTimeToVisit": "June to March",
          "description": "The Ajanta and Ellora Caves are UNESCO World Heritage Sites located in Aurangabad, Maharashtra. They are famous for their ancient rock-cut caves and stunning sculptures."
        },
        {
          "id": 10,
          "place": "Meenakshi Temple",
          "district": "Madurai",
          "area": "Madurai, Tamil Nadu",
          "image": "https://imgs.search.brave.com/-1s8KS753wSu8d5M83g9jft9GrzZ9xAzIvziJx80X-U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFtaWxuYWR1dG91/cmlzbS50bi5nb3Yu/aW4vaW1nL3BhZ2Vz/L2xhcmdlLWRlc2t0/b3AvbWVlbmFrc2hp/LWFtbWFuLXRlbXBs/ZS0xNjU2MTcwNDY3/X2NmZWJlNzhkNjlm/MDY5Zjg4MWFhLndl/YnA",
          "openingTime": "5:00 AM - 12:30 PM, 4:00 PM - 9:30 PM",
          "bestTimeToVisit": "October to March",
          "description": "The Meenakshi Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai, Tamil Nadu. It is dedicated to Goddess Meenakshi and Lord Sundareswarar."
        },
        {
          "id": 11,
          "place": "Khajuraho Temples",
          "district": "Chhatarpur",
          "area": "Khajuraho, Madhya Pradesh",
          "image": "https://imgs.search.brave.com/gA30MybFutE4Y6OTx7CYLL58QDwhv49HayUNOp69h4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzQwLzkyLzk4/LzM2MF9GXzQ0MDky/OTg3Ml9KOXhGR2tl/c1k5ckZsOGgwbjcy/Q2htRFdldnpXdFpY/Qi5qcGc",
          "openingTime": "6:00 AM - 6:00 PM",
          "bestTimeToVisit": "October to March",
          "description": "The Khajuraho Group of Monuments is a group of Hindu and Jain temples in Chhatarpur district, Madhya Pradesh. They are famous for their nagara-style architectural symbolism and erotic sculptures."
        },
        {
          "id": 12,
          "place": "Ranthambore National Park",
          "district": "Sawai Madhopur",
          "area": "Sawai Madhopur, Rajasthan",
          "image": "https://imgs.search.brave.com/mLtMKbR8x5bAUzsCeKf8vk59WZrAw8TkX3Hp9SjT9pk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MTY5NTE3L3Bob3Rv/L3JhbnRoYW1ib3Jl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1ZbkR4R25sQ0Uy/WmFnZ1BGTGhkUjho/UVZYV2cyWWVNNHRT/NlRRUE9XVWRVPQ",
          "openingTime": "6:30 AM - 10:00 AM, 2:30 PM - 6:00 PM",
          "bestTimeToVisit": "October to April",
          "description": "Ranthambore National Park is a vast wildlife reserve near the town of Sawai Madhopur in Rajasthan. It is known for its tiger population and historic Ranthambore Fort."
        },
        {
          "id": 13,
          "place": "Varanasi Ghats",
          "district": "Varanasi",
          "area": "Varanasi, Uttar Pradesh",
          "image": "https://imgs.search.brave.com/25rHvCvXBN5s4cE_dDj1dEVqCuynHC-gNMfawvEsNT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ob2x5/dm95YWdlcy5jb20v/aW1hZ2VzL3ZhcmFu/YXNpLmpwZw",
          "openingTime": "Open 24 hours",
          "bestTimeToVisit": "October to March",
          "description": "The Varanasi Ghats are a series of steps leading down to the Ganges River in Varanasi. They are used for religious rituals, bathing, and cremation ceremonies."
        },
        {
          "id": 14,
          "place": "Amber Fort",
          "district": "Jaipur",
          "area": "Jaipur, Rajasthan",
          "image": "https://imgs.search.brave.com/ZhfQZ3LprBU0YAfjcdl_YEmjqVACWLU0pb1nACiKh44/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvamFp/cHVyL21tdC9hY3Rp/dml0aWVzL21fYWN0/aXZpdGllc19hbWJl/cl9mb3J0XzJfbF80/MzZfNTczLmpwZw",
          "openingTime": "8:00 AM - 5:30 PM",
          "bestTimeToVisit": "October to March",
          "description": "Amber Fort is a fort located in Amer, Rajasthan. The fort is known for its artistic style, blending both Hindu and Mughal elements."
        },
        {
          "id": 15,
          "place": "Kerala Backwaters",
          "district": "Alappuzha",
          "area": "Alappuzha, Kerala",
          "image": "https://imgs.search.brave.com/8x2J7Iy9oQj76XSK6jQOy61TuowrGQlahgD90AyZGgw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YXVkbGV5dHJhdmVs/LmNvbS83MDAvNTAw/Lzc5LzEzMzU4NTQt/a2VyYWxhLWJhY2t3/YXRlcnMuanBn",
          "openingTime": "Open 24 hours",
          "bestTimeToVisit": "November to February",
          "description": "The Kerala Backwaters are a network of brackish lagoons and lakes lying parallel to the Arabian Sea coast in Kerala. They are a popular tourist destination for houseboat cruises."
        },
        {
          "id": 16,
          "place": "Konark Sun Temple",
          "district": "Puri",
          "area": "Konark, Odisha",
          "image": "https://imgs.search.brave.com/QTPfkqyBuB1nGNwIlTI_zaLT2CNClNUabFJRF68fdGg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ4/NDE1MjIyMS9waG90/by9rb25hcmstc3Vu/LXRlbXBsZS1vbi1h/LWNsZWFyLXdpbnRl/ci1kYXktd2l0aC1i/bHVlLXNraWVzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1k/d0tqUTNmZk1acDhY/SjhEamZuQlRLQkFH/b2UtS1hlelpPc2VQ/VFhrSWhzPQ",
          "openingTime": "6:00 AM - 8:00 PM",
          "bestTimeToVisit": "October to March",
          "description": "The Konark Sun Temple is a 13th-century CE Sun temple at Konark in Odisha. The temple is shaped like a giant chariot with elaborately carved stone wheels, pillars, and walls."
        },
        {
          "id": 17,
          "place": "Leh-Ladakh",
          "district": "Leh",
          "area": "Leh, Ladakh",
          "image": "https://imgs.search.brave.com/9_CUN768SdkdExMO7VWcIbdXWEzCzu1xjA3pMkpftNk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGlzY292/ZXJsZWhsYWRha2gu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDMvTGVoLVBh/bGFjZS1MYWRha2gt/aW4td2ludGVycy5q/cGc_cmVzaXplPTcy/MCw0MDAmc3NsPTE",
          "openingTime": "Open 24 hours",
          "bestTimeToVisit": "May to September",
          "description": "Leh-Ladakh is a region in the northernmost part of India, known for its stunning landscapes, Buddhist monasteries, and adventure activities like trekking and biking."
        },
        {
          "id": 18,
          "place": "Hampi",
          "district": "Vijayanagara",
          "area": "Hampi, Karnataka",
          "image": "https://imgs.search.brave.com/B_P8uLRHEUIkoN2SQqwT5QBp4b861BEvwjSKmItPks0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oYW1waS1oYW1w/ZS1hbHNvLXJlZmVy/cmVkLWFzLWdyb3Vw/LW1vbnVtZW50cy1o/YW1waV81NTg0Njkt/OTg3LmpwZz9zZW10/PWFpc19oeWJyaWQ",
          "openingTime": "6:00 AM - 6:00 PM",
          "bestTimeToVisit": "October to February",
          "description": "Hampi is an ancient village in Karnataka, known for its ruins belonging to the Vijayanagara Empire. It is a UNESCO World Heritage Site."
        },
        {
          "id": 19,
          "place": "Darjeeling",
          "district": "Darjeeling",
          "area": "Darjeeling, West Bengal",
          "image": "https://imgs.search.brave.com/cnsAHIjSoeX1PX5rmx9zSSvVh7aprLQCL-ccaxGSdvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2lvbW9pLmNvbS9f/bmV4dC9pbWFnZT91/cmw9aHR0cHM6Ly9y/ZXMuY2xvdWRpbmFy/eS5jb20va21hZG1p/bi9pbWFnZS91cGxv/YWQvdjE1NTEwOTY3/NzMva2lvbW9pL0Rh/cmplZWxpbmcvRGFy/amVlbGluZy1UZWEt/ZXN0YXRlLndlYnAm/dz0zODQwJnE9NzU",
          "openingTime": "Open 24 hours",
          "bestTimeToVisit": "March to May, October to November",
          "description": "Darjeeling is a town in West Bengal, famous for its tea plantations, Himalayan Railway, and stunning views of the Kanchenjunga mountain range."
        },
        {
          "id": 20,
          "place": "Goa Beaches",
          "district": "North Goa, South Goa",
          "area": "Goa",
          "image": "https://imgs.search.brave.com/HMiwAQ_5gM5oIquABgyqyAqlP7lahQPasSh_etz_7-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/ODUyMTUyL3Bob3Rv/L2FyYW1ib2wtYmVh/Y2gtZ29hLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1QSzdu/Q2xPbU92S2k0SnhE/dW1MNS1ZSThsa1g1/M2I5dkhGNzVudkV4/RFg0PQ",
          "openingTime": "Open 24 hours",
          "bestTimeToVisit": "November to February",
          "description": "Goa is known for its beautiful beaches, vibrant nightlife, and Portuguese heritage. Popular beaches include Calangute, Baga, and Anjuna."
        }
      ];


      //query base we show data
    if (req.query.search) {
        const filterData = data.filter((item) =>
            item.place.toLowerCase().includes(req.query.search.toLowerCase())
        );
        res.send(filterData);
        return;
    } else {
        res.send(data); // Send all data if no search query is provided
        return;
    }
})


export const data = router;

