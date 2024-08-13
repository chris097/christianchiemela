import { StaticImageData } from 'next/image';
import soccerwiz from '@/assets/images/soccerwiz.png';
import covid from '@/assets/images/covid.png';
import bleeprs from '@/assets/images/bleeprs.png';
import signature_banking from '@/assets/images/signature_banking.png';
import codessy from '@/assets/images/codessy.png';
import bleeprs_admin from '@/assets/images/bleeprs_admin.png';

export const projects: {
    id: number,
    name: string,
    link: string,
    description: string
    url: StaticImageData
    metadata: string[]
}[] = [
    {
        id: 1,
        description: "Build business messaging solutions for customer care, conversational commerce, and transactional messaging",
        name: 'Bleeprs Website',
        link: 'https://bleeprs.com/',
        url: bleeprs,
        metadata: ["Vite", "CSS3", "Javascript"]
    },
    {
        id: 2,
        description: "Signature Bank, launched in 2022, combines traditional banking values with cutting-edge digital solutions to deliver personalized financial products and exceptional customer service, empowering both individuals and businesses to achieve their goals.",
        name: 'Signature Banking',
        link: 'https://www.signaturebankng.com/',
        url: signature_banking,
        metadata: ["Javascript", "CSS3", "Next.JS", "TailwindCSS", "Typescript"]
    },
        {
            id: 3, description: "As a dedicated group, we are fuelled by a passion for driving digital transformation and technological progress. Through a continuous stream of innovative developments, we actively contribute to shaping a technologically empowered future for Africa.",
            name: 'Codessy',
            link: 'https://codessy.io/',
            url: codessy,
            metadata: ["Javascript", "CSS3", "Next.JS", "Typescript", "TailwindCSS"]
        },
        {
            id: 4,
            description: "Build business messaging solutions for customer care, conversational commerce, and transactional messaging",
            name: 'Bleeprs User Admin',
            link: 'https://app.bleeprs.com/',
            url: bleeprs_admin,
            metadata: ["Next.JS", "TailwindCSS", "NextJS", "TailwindCSS", "Typescript", "Goland"]
        },
        {
            id: 5,
            description: "A trivia app that enables football enthusiasts and sports lovers to be rewarded for their passion and knowledge about the sport.",
            name: 'Soccerwiz',
            link: 'https://soccerwiz-frontend.vercel.app/',
            url: soccerwiz,
            metadata: ["Javascript", "CSS3", "ReactJS", "ChakraUI"]
        },
        // {
        //     id: 6,
        //     description: "A web application where users can search for dogs of different breed.",
        //     name: 'Yabacon',
        //     link: 'https://sandbox-yabacon-pl24l.ondigitalocean.app/',
        //     url: soccerwiz,
        //     metadata: ["Javascript", "CSS3", "NodeJS", "Typescript"]
        // },
    
    ];