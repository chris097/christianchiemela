import { StaticImageData } from 'next/image';
import soccerwiz from '@/assets/images/soccerwiz.png';
import covid from '@/assets/images/covid.png';
import yab from '@/assets/images/yabacon.png';
import facoin from '@/assets/images/facoin.png';
import doghub from '@/assets/images/doghub.png';
import wordlen from '@/assets/images/wordlens.png';

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
        description: "The world fastest growing crypto web application.",
        name: 'Facoin',
        link: 'https://facoin.vercel.app/',
        url: facoin,
        metadata: ["Javascript", "CSS3", "NextJS", "TailwindCSS", "ReactJS", "Typescript", "NodeJS", "ExpressJS"]
    },
    {
        id: 2,
        description: "Yabacon is a diverse mix of professionals, innovative communities and trailblazing organizations shaking up the African technology ecosystem.",
        name: 'Yabacon',
        link: 'https://sandbox-yabacon-pl24l.ondigitalocean.app/',
        url: yab,
        metadata: ["Javascript", "CSS3", "NextJS", "TailwindCSS", "ReactJS", "Typescript"]
    },
        {
            id: 3, description: "A trivia app that enables football enthusiasts and sports lovers to be rewarded for their passion and knowledge about the sport.",
            name: 'Soccerwiz',
            link: 'https://soccerwiz-frontend.vercel.app/',
            url: soccerwiz,
            metadata: ["Javascript", "CSS3", "NodeJS", "Typescript", "TailwindCSS"]
        },
        {
            id: 4,
            description: "A mini-dictionary web application users are able to look for meaning to a particular word.",
            name: 'Wordlens',
            link: 'https://wordstore.netlify.app/',
            url: wordlen,
            metadata: ["Javascript", "CSS3", "ReactJS", "ChakraUI"]
        },
        {
            id: 5,
            description: "A web application where users can search for dogs of different breed.",
            name: 'DogHub',
            link: 'https://doghubbs.netlify.app/',
            url: doghub,
            metadata: ["Javascript", "CSS3", "NodeJS", "Typescript"]
        },
        {
            id: 6,
            description: "cov19Strain tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.",
            name: 'Cov9teen',
            link: 'https://cov9teen.netlify.app/',
            url: covid,
            metadata: ["Javascript", "CSS3", "TailwindCSS", "ReactJS"]
        },
    ];