import img1 from './images/g-img1.png';
import img5 from './images/g-img5.png';
import img4 from './images/g-img4.png';

const PROJECTS = [
    {
        id: 1,
        image: img1,
        title: 'FISTON ELECTRICAL SA',
        tech: 'Html | Css | Javascript | MySQL | Wordpress',
        link: "https://fistonelectricalsa.co.za",
        description: 'Electricity company',
        about: [
            'This is an business type website, Fiston electrical Sa, is an electricity company providing different services, The client idea was to have an online reference, where clients and potential customers can go and find valuable informations about the company and services.',
            'It was important to implement something with a CMS to solve the client issue',
        ],
        development: ['This website is developped with Wordpress, and a lot of customization on the level of cascading style and a bit of Javacript', 'As a simple business webite, we have not encountered any blocker during the development process', 'click the button bellow to visit the live website']

    },
    {
        id: 2,
        image: img5,
        title: 'INTERACTION TELECOMS',
        tech: 'Html | Css | Javascript | Bootstrap | Php | Laravel | Linux Environment',
        link: "https://interactiontelecoms.co.za/",
        link2: "https://youtu.be/shw_2yEyUuw",
        description: 'Hello this is the description',
        about: ['This portal allows system administrators and users to perform various functions such as planning, acquiring and delivering of mobile products and services, viewing reports and usage engagement. For more access please login with your credentials or contact Interaction Telecom administrator. Technology Empowering Efficiency in Peoples Daily Work Life',
            'As the live project requires a registered password and email to login, I will walk you through the project, click the link below to see the demo'],
        development: ['Interaction Telecoms, is a web portal allowing Admin, Clients, users to purchase and sale MTN data, airtime bundles, This project is developed with PHP, based on laravel, the front end is built with vanilla javascript, Html, cass, Sass, Bootstrap and the backen with Mysql, and Php',
            'The project includes different features such as : Login, logout, sign up, forgot password, login with different roles, different views, reset password, Email confirmation in case of any purchase, email Approval by the other admin, upload spreadsheet and the application will extract data(cellphone number) and distribute airtime or data based on the amount and much more...']
    },
    {
        id: 3,
        image: img4,
        title: 'G - REAL STATE',
        tech: 'Html | Sass | Bootstrap - react | React | Netlify',
        link: "",
        description: 'Hello this is the description',
        about: ['', ''],
        development: ['', '']
    }
];

export default PROJECTS