import { StaticImageData } from 'next/image';
import soccerwiz from '@/assets/images/soccerwiz.png';
import covid from '@/assets/images/covid.png';
import yab from '@/assets/images/yabacon.png';

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
        description: "Yabacon",
        name: 'Yabacon',
        link: 'https://sandbox-yabacon-pl24l.ondigitalocean.app/',
        url: yab,
        metadata: ["Javascript", "CSS3", "NextJS", "TailwindCSS", "ReactJS", "Typescript"]
    },
        {
            id: 2, description: "A trivia app that enables football enthusiasts and sports lovers to be rewarded for their passion and knowledge about the sport.",
            name: 'Soccerwiz',
            link: 'https://soccerwiz-frontend.vercel.app/',
            url: soccerwiz,
            metadata: ["Javascript", "CSS3", "NodeJS", "Typescript", "TailwindCSS"]
        },
        {
            id: 3,
            description: "cov19Strain tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.",
            name: 'Cov9teen',
            link: 'https://cov9teen.netlify.app/',
            url: covid,
            metadata: ["Javascript", "CSS3", "NodeJS", "Typescript"]
        },
    ];