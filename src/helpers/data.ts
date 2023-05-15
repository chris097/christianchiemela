import { StaticImageData } from 'next/image';
import soccerwiz from '@/assets/images/soccerwiz.png';
import covid from '@/assets/images/covid.png';
import chatgpt from '@/assets/images/chatgpt.png';

export const projects:{id: number, name: string, link: string, url: StaticImageData}[] = [
    { id: 1, name: 'Soccerwiz', link: 'https://soccerwiz-frontend.vercel.app/', url: soccerwiz },
    {id: 2, name: '', link: 'https://chatgpt-messenger-ai.vercel.app/', url: chatgpt}
]