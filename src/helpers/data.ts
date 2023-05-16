import { StaticImageData } from 'next/image';
import soccerwiz from '@/assets/images/soccerwiz.png';
import covid from '@/assets/images/covid.png';
import chatgpt from '@/assets/images/chatgpt.png';

export const projects: {
    id: number,
    name: string,
    link: string,
    description: string
    url: StaticImageData
    metadata: string[]
}[] = [
        {
            id: 1, description: "cov19Strain tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.",
            name: 'Soccerwiz',
            link: 'https://soccerwiz-frontend.vercel.app/',
            url: soccerwiz,
            metadata: ["Javascript", "CSS3", "NodeJS", "Typescript", "TailwindCSS"]
        },
        {
            id: 2,
            description: "cov19Strain tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.",
            name: 'Cov9teen',
            link: 'https://cov9teen.netlify.app/',
            url: covid,
            metadata: ["Javascript", "CSS3", "NodeJS", "Typescript"]
        },
        {
            id: 3,
            description: "cov19Strain tracker is an application that help you keep tracks of covid-19 situation locality and even beyond your locality. This application will teach/guide you to prevent yourself from been infected.",
            name: 'ChatGPT',
            link: 'https://chatgpt-messenger-ai.vercel.app/',
            url: chatgpt,
            metadata: ["Javascript", "CSS3", "NodeJS", "Typescript"]
        }
    ];