// images
import blogImg1 from "../images/blog/img-4.jpg";
import blogImg2 from "../images/blog/img-5.jpg";
import blogImg3 from "../images/blog/img-6.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";



const blogs = [
    {
        id: '1',
        title: 'Best Architecture Design',
        thumb:'Architecture',
        screens: blogImg1,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Cad Station',
        authorTitle:'Cad Station',
        create_at: '14 AUG,21',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '2',
        title: 'Modern Bedrooms Tips',
        thumb:'Interior',
        screens: blogImg2,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Biodun Finland',
        authorTitle:'Creative Director',
        create_at: '16 AUG,21',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '3',
        title: 'Decoration Apartment',
        thumb:'Architecture',
        screens: blogImg3,
        description: 'Consectetur adipiscing elit. Purusout phasellus malesuada lectus.',
        author: 'Akeem Odunmbake',
        authorTitle:'Art Director',
        create_at: '18 AUG,21',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;