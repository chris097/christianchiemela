import Header from '@/components/Header/Header'
import Head from 'next/head'
import ProjectCard from '@/components/Card/ProjectCard';
import BackgroundSvg from '@/assets/svg/BackgroundSvg';
import Footer from '@/components/Footer/Footer';
import me from "../assets/images/me.jpeg";
import Image from 'next/image';
import Link from 'next/link';
import Article from '@/components/Article/Article';
import { projects } from '@/helpers/data';
// import cv from "@/assets/images/c"

export default function Home() {
  return (
    <>
      <Head>
        <title>Christian Chiemela | Homepage</title>
        <meta name="description" content="Christian Chiemela portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/me.jpeg" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,301,701,300,501,401,400&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,300&display=swap" rel="stylesheet" />
      </Head>
      <main className='relative font-font-clash'>
        <Header />
        <span className="absolute bg-gray-500 -left-28 -top-28 rounded-full opacity-[20%] blur-3xl aspect-square h-[350px] -z-10 animate-pulse" />
        <div className='relative z-40 h-auto text-gray-100/90'>
          <BackgroundSvg />
          <div className='pt-36 pb-16 w-[80%] mx-auto h-full items-center lg:flex block justify-between gap-28 flex-wrap'>
            <div className='flex-1 relative'>
              <div className='mb-4'><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16.7401C3.584 16.7401 0 12.9941 0 8.37855C0 3.76296 3.584 0.0169678 8 0.0169678C12.416 0.0169678 16 3.76296 16 8.37855C16 12.9941 12.416 16.7401 8 16.7401ZM8 2.79301C5.056 2.79301 2.656 5.30149 2.656 8.37855C2.656 11.4556 5.056 13.9641 8 13.9641C10.944 13.9641 13.344 11.4556 13.344 8.37855C13.344 5.30149 10.944 2.79301 8 2.79301Z" fill="#00C040" />
              </svg>
              </div>
              <div className='absolute right-0 bottom-0 -mt-6'>
                <svg width="26" height="21" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0502 30.6872L0.499512 0.30249H35.6009L18.0502 30.6872ZM8.25691 4.79353L18.0502 21.7051L27.8435 4.75844H8.25691V4.79353Z" fill="#D2A400" />
                </svg>

              </div>
              <h2 className='lg:text-5xl text-3xl font-bold font-font-clash' >Christian Junior Chiemela</h2>
              <p className='md:text-xl text-base text-gray-200/70 mt-5 font-font-clash'>
                Passionate Software Engineer with a dedication to crafting world-class applications. I bring a blend of deep technical expertise and a commitment to continuous learning, ensuring I stay ahead in an ever-evolving industry. My experience spans full-cycle development, from thorough requirement analysis and architectural design to robust implementation for web and mobile platforms. With a strong foundation in object-oriented programming, I lead projects with precision and a focus on quality, always building with empathy to create solutions that resonate with users.
              </p>
              <div className='mt-6 gap-6 flex'>
                {/* <div className='text-2xl'>Resume</div> */}
                <a href="mailto:chrisfidel.international@gmail.com">
                  <button className='bg-white z-40 w-32 h-12 mt-2 text-gray-600 hover:opacity-75'>Hire Me</button>
                </a>
                <a rel='noopener noreferrer' target='_blank' href="https://drive.google.com/file/d/1RWo4FZuUDPwDvv5FFzQb1oL68w3fAf2v/view?usp=sharing"
                  download="christian-cv">
                  <button className='border text-white z-40 w-32 h-12 mt-2 bg-black hover:opacity-75'>Download CV</button>
                </a>
              </div>
            </div>
            <div className='flex-1 flex justify-center relative h-[350px] mt-24 lg:mt-0'>
              <div className='absolute left-0 -top-14'>
                <svg width="45" height="45" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.796875" y="0.56543" width="93.6036" height="93.6036" rx="9.36036" fill="white" />
                  <g clip-path="url(#clip0_1476_116)">
                    <path d="M47.5986 47.3671C47.5986 42.2502 51.7467 38.1021 56.8637 38.1021C61.9806 38.1021 66.1288 42.2502 66.1288 47.3671C66.1288 52.4841 61.9806 56.6322 56.8637 56.6322C51.7467 56.6322 47.5986 52.4841 47.5986 47.3671Z" fill="#1ABCFE" />
                    <path d="M29.0684 65.8974C29.0684 60.7805 33.2165 56.6323 38.3334 56.6323H47.5985V65.8974C47.5985 71.0144 43.4504 75.1625 38.3334 75.1625C33.2165 75.1625 29.0684 71.0144 29.0684 65.8974Z" fill="#0ACF83" />
                    <path d="M47.5986 19.572V38.1021H56.8637C61.9807 38.1021 66.1288 33.954 66.1288 28.8371C66.1288 23.7201 61.9807 19.572 56.8637 19.572H47.5986Z" fill="#FF7262" />
                    <path d="M29.0684 28.8371C29.0684 33.954 33.2165 38.1021 38.3334 38.1021H47.5985V19.572H38.3334C33.2165 19.572 29.0684 23.7201 29.0684 28.8371Z" fill="#F24E1E" />
                    <path d="M29.0684 47.3671C29.0684 52.4841 33.2165 56.6322 38.3334 56.6322H47.5985V38.1021H38.3334C33.2165 38.1021 29.0684 42.2502 29.0684 47.3671Z" fill="#A259FF" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1476_116">
                      <rect width="37.4414" height="56.1622" fill="white" transform="translate(28.8779 19.2861)" />
                    </clipPath>
                  </defs>
                </svg>


              </div>

              <div className='absolute right-0 md:bottom-0 -bottom-6'>
                <svg width="45" height="45" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect x="0.649414" y="0.668945" width="93.6036" height="93.6036" rx="9.36036" fill="url(#pattern0)" />
                  <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_1476_103" transform="scale(0.0025)" />
                    </pattern>
                    <image id="image0_1476_103" width="400" height="400" xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gKgSUNDX1BST0ZJTEUAAQEAAAKQbGNtcwQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwQVBQTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLWxjbXMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtkZXNjAAABCAAAADhjcHJ0AAABQAAAAE53dHB0AAABkAAAABRjaGFkAAABpAAAACxyWFlaAAAB0AAAABRiWFlaAAAB5AAAABRnWFlaAAAB+AAAABRyVFJDAAACDAAAACBnVFJDAAACLAAAACBiVFJDAAACTAAAACBjaHJtAAACbAAAACRtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABwAAAAcAHMAUgBHAEIAIABiAHUAaQBsAHQALQBpAG4AAG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAMgAAABwATgBvACAAYwBvAHAAeQByAGkAZwBoAHQALAAgAHUAcwBlACAAZgByAGUAZQBsAHkAAAAAWFlaIAAAAAAAAPbWAAEAAAAA0y1zZjMyAAAAAAABDEoAAAXj///zKgAAB5sAAP2H///7ov///aMAAAPYAADAlFhZWiAAAAAAAABvlAAAOO4AAAOQWFlaIAAAAAAAACSdAAAPgwAAtr5YWVogAAAAAAAAYqUAALeQAAAY3nBhcmEAAAAAAAMAAAACZmYAAPKnAAANWQAAE9AAAApbcGFyYQAAAAAAAwAAAAJmZgAA8qcAAA1ZAAAT0AAACltwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR7AABMzQAAmZoAACZmAAAPXP/bAEMABQMEBAQDBQQEBAUFBQYHDAgHBwcHDwsLCQwRDxISEQ8RERMWHBcTFBoVEREYIRgaHR0fHx8TFyIkIh4kHB4fHv/bAEMBBQUFBwYHDggIDh4UERQeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHv/CABEIAZABkAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYCBQcEAwj/xAAaAQEBAAMBAQAAAAAAAAAAAAAABQIDBgEE/9oADAMBAAIQAxAAAAHsoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD56PPVYGj3Dz6DDcAAAAAAAAAAAAAAAAAAAABHm+fJfq+H7V/LC9zm53lY3uWi5WHlnon1OoKrZJVz7DV9AAAAAAAAAAAAAAAAAAEav48l+2d9deW+djDPDLz373Q77LWHut9vix9tdl5f9J9Xqar2iRfka94AAAAAAAAAAAAAAEV3zctoSvr5yzAD3yMcsHvv3ui3mWqUPcJQJQJ6Lzm8zq1hEPpgAAAAAAB83n0RID0AAABSfHQKcacSvEB4AwyxZe7e6LeZapQ91ygSgTeaLevgp2EQepAAAAAAgpez5/Vzv5x0XK7TpXIfrr29uVO2Qenka9wA+TzLmvlqdeHKFORKBKBKAwz2OOz473f6DzEN/wAwAC9UW9T6dhEHqAAAAAAKpzW90ToOUD75gC2VNq39v+vH+mwOn2h4vk+76cn8+ltQIFCaAABLPo+j6K/1D7zD6Gu0a80avBChMAAXuiXr4KdiEDqAAAAAAPPzDq/y+n4uHLNWOh5WUNumUCfv53mXQqBh5/l+74T853a/oxljIAGx23UvgpazfEW8Hmdco15ot7l5QoTJQJQJvVEvfwU7EIHUAAAAAAAYc76M3fLwleqL0fKhu+cAD5+LY4+bNfll8tf0fVhsMffL0Te2CPaST6oAFbo15ot/l5QoTJQJQJvdDvk+nYhA6gAAAAAAABTLlz/6fjpWPi9nS8nIywAAeb0vMtp1fmHTYXRe8Ta4AAFbot6ot/lwoTAAF8od8n07EIHUAAAAAAAMceW7vm9dCle57D6YY7tWxy1/t2fNkMsAAJ9XkY5dWsXCLzFv39hnLsg9ArdEvdEv8wFGYAAvtCvs6nYhA6cAAAAACPl8+Q/R8norCL3OhnrRJ7in0+Z/TLo1OwaofX8IAAG/6fxH2TqnblesMLowx2Vuh3uiX+YCjMAAX2hX2dTsYgdOAAAAABzvnfWeTXOdD7fhAlF61btF1n3fSJfeX1Pm+nkOj7ry67z1aFOQAABnfaBGj6e8zyjpvP8AS6WiXuh14koUJsoEoE32g36fSsY5/pwAAAAAIpF4Z6vzxj1zlt3n/L6Nt1bXnprcRroYbQGGZ5zKo9559Zg0dCvFlD1KBKHh7fDj5sv1f1W015yhu0SgSgTfqBf51Oxjn+mAAAAAAARJ4D0AAAACjc971UasXmTLG3BD3wCMM8GXq2mq2oDEABf6Bf51Oxjn+mAAAAAAAAAAAAAAArHLu76GjK5C9Plvc9KGWLHLB76tpqtoSgxlAlAnoHP+nzKu0EHpAAAAAAAAAAAAAAAANRybt+v+2fxJtNX0PNxjlhnj6tpq9p74Hng9XmXl9FutEypXLRKNcDXuAAAAAAAAAAAAAAAAA8nJuyef6vi4PjZa10fN+na+LeZ4eD2XGyS6lXs/0SLIat4AAAAAAAAAAAAAAAAAAAGGl3rLXpNxm9BhsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8QAKBAAAQQBAwQDAAMBAQAAAAAAAwECBAUwACA0BhAzUBESQBMxgBQh/9oACAEBAAEFAv8APj3NY19vDa4VnGerXNcnrZBhxxW1kSaTUIquQEgoVi2rHaY5r2+qmSRRA2U8s0vaB5uwTFCsW1RdDewjfT2E0UMM6WWYbvA82wRSCdGttCKMrfSWlgKEKXILJNsgebcN7xugWX3d6K3sxwmGK8xdsDzYKwqmiegurVsVCPcR+6B5sFFw/wB93boHSqqrvgebBRcP8LnNbr+8l3cYV1A82Ch4f4Le0SPoj3kfBnHiPgTgzGYFVES7t1NjgebBQ8PPcWv00q/+9hEeN9XbNPvI9o2XVs6WuKBBPNLLrgwYGCh4ebqKU4AN1XbvDoZGEb3OUYRXFmSa/FU05JWgBGAd/wATBQ8PN1SN3xvgTjQ3wZgZY9S5AoobSxLOLhYxxH1FI0fe/wCJgoeHmMNhR2tc+G/eEjwkjXov+ewnGmmwwYZ5haytBCZ3v+JgoeHnexr2W9Y6KuB48NTUFlrGAKOLZf8AEwUPD/AqIqXNUosL2o7TkVq/OxrXOdUUaN0ifG6/4mCh4f4rmpwqnyj2fXvDimllqqsMJu/qDiYKHh/juar+XS/KLgePVRUmmuiRgxRYOoOJgoOH+O9ufppj/hcNbYmhuhygyh4OoOJgoOH+FV+NXlz9+7H/AF0i/OGOcsclXaCl4OoOHgoOH+B7msbeW6yV2McrdIvymBF+FqrnTVRybeoOHgoOHnMRgh3Nq+a7c1VarVRyYayzLDWLIDJHs6g4eCg4eaSYccNvZFnE3xo5ZJYNDHFHsYJYRcMWSaMWssxTE79Q8PBQcLN1gR2CrrDznQYYIYtSAjOK1riQn4WqrXVNz86RflNdQ8PBQcLN1LCdKjbqejUmmNaxvcrGEZb1j4jsVXaliLGOKQPqHh4KDhZ72nQ+nIrXdo4SHLUUw4m9zUc25qlj44co0QsuxFOgYOn+F+C7qGzEkANHfXVcqY6vhAhCw3VR9cS6i+TB0/wv3XVR99f1gXUTyYOn+F++5qkkI5qtdvieTB0/wvQW9YyY0o3iJuieTB0/wvQ2tcOaOQEkcuxdRPJgrAqCH6KxgimimRSxDd11F8m4ISmdXVf8LvSToopYbCGWEbvE8mwEcx3RKdqaGNg2+mlRxyQ2leWETS6ieTtGjHkLFpxt0xrWN9ScQzDt6wkN+o7PrqLEPI1EqAj01EanrFRFQtVCeoqyINURET/N3//EACkRAAEDAgUEAwADAQAAAAAAAAIBAwQAEQUSICExECIwMzJAYRMjYEH/2gAIAQMBAT8B/wA048238ltTbzbnxW/15cwWEt/2jcJwsxUpK2VxqPi5js7vTMlp5O1fqTJyM9o80Zqa3WkpznoJKK3So+LOBs5vTEgHxzD9GbP/AI+wOaVb7r0SnOdGEEqPW8KrbXNn27G656pTnOjCPf4JEgGBzFUqWcgrrxUPEDY2XdKZfB4cwromz83Y3xpbBTWyVKZVo8paMJ9/gxQiV9UXqw+bJXFaiTwkbcLSqiJdamTlc7Q40sRjeWyVHjAwm3NYt79GE+/wS4YyB/aeZJkspdUVR3SlnOOigmtW0RYBOdx7JQAIJYemLe/RhPv8MmKEgbFUiMbBWLQDlq2XihBSWyVFw9A7nOdGLe/RhPv8U1Glb/sowy6BJRrDTZJNvlpxb36MJ9/hkSBZG6088TxXKueaMMugSUVulQ8TQux3Rivv0YT7/BJlCwn7TjhOFmLqKZtqkQXGRzLxph4gTPaW6U24LiZhXpivv0YT7/BiAkjt16ssk6thqPEFlP2lRFSy1Ow9W+8ONMeSbBXGo0sJCbc1ivv0YV7/AAOtC6OUqkRTZX8qNCJ3ddkptoW0sOidh1u9vSBKK3SpDxPFmLRhXv8AoTsPzd7dKluqUWjCvf8ARmwEd7w5ohUVsvRKLRhIKrub6UyCj6Zh5owUFylSUXQRIlslMYUZbubUywDI5R+nLhi+n7TjRNFlKkAnCsKUxhJLu4tNR22ksKfWNoHPkl6BoA+KW/yn/8QAKhEAAQIEBQQDAAMBAAAAAAAAAgEDAAQRIAUSISIzEDAxQBMyYSNBYHH/2gAIAQIBAT8B/wA0DZH9UgmiD7J68tKq8v5DYICUGFFCShQ9hwrqEOsG19k9SVlFd1LxAigpRLFRF8w9h4FqGkOtE0tC9GUk8+4vEIlNOqWYkKfGi+hKSdd52pZiPD2GmidLKMS8sDKUSJmSB7VNFh1om1oVkpJU3naRIKVWGHUdHMlmJcPYw8RRlFTq6yLo0KJmTJnX+oRFXRIlZP49xebXnxZSqw9MG8usYbxWYlw9iWmSZX8hp0XRzD1VKpRYCTbbLMNszOo3tHzBGprUumG8VmJcPZYfJkqpDD4vDmGxR6ESIlViZnVLaFmG8NmJcPalfk+T+OBWtipWJ8XUXXxbhvDZiXD2WGCeWiQyyLQ0Hoi1sIUJKLE1h+Xc3ZhvDZiXD2JeWJ5fyG2xbTKPVSy6wzONullS2akRd3DosGBAtC6Ybw2Ylw9iQJFaonV14WkqUPzRPf8AIRaapEnPfJsPza/Lg8lCiYlTYXXxGG8VmJ8PYbdJsswwxMi6n7ExOC3omqwZka1KyTn67HLSFCSiwyyLKZRsxPh9CTnsuxyEWvYxPh9GTnVa2n4hFQkql+KEiNonpSk4rK0XxAGhpVLCJBSpQ/iYjoGsOvE6WYvTlZsmF/IadF0cwwZiCVKH8URNG4dfN1akvrA4QfVYNwj+y/5T/8QANRAAAQIDBQQKAQQDAQAAAAAAAQIDABEwEjFBUXIEICEiEBMyQEJQUmFxgdEjYqGygKKxgv/aAAgBAQAGPwL/AB8tKIAiSV29MSJUj5iaTMeXF11VlIiXZZFyegpVeI/TWR7RJ8WTmLotJUFD28rLrpkP+xaVwQOynLpOnpm2spiT6Ze4i0hQUPbyi24eOCcTHWOn4GW4fjdm2spMSfT/AOhE21hQ8lmeZw9lMF11Uyf43T8b9pCik+0Bt+UzcryOynmeNycoLrqrSjvHTRSo33HyEssm09/WCtaipRvJ3zponV5Adn2Yzc8SvTEyZmgdNE6u5cygPmqdn2RXspf4pH4onV3EssEF3E+mLbiio5mP01TTik3RNBkrFJvFGZPCDs+ymTfiVnTOmidXcCxsx5vErKJnpC21WVDEQGto5Xc8DvlayAkXkwWWSUs/2p2Wk8MVG4QmwJrKuZZxonVXS02ZKcx9t8NbRNbeBxEBaFBSTiNwuOqCUiLKZpZFwzph16bbP8qgNtICUjKE66J1V2ncBwNCaDNBvSYtNnjinEdBddVIRx5Wx2U0ghCSpRuAgPbWApeCMB0p10TqrqbcE0m+LSZqZNxyoBxtVlQhR2gEOJGHii24eHhTgKVhlPycBHAWnDes7iddE6u4FCxNJvEF1rmZ/rRmKIccm2zniYDbKAlO6nXROruMjxEF/ZxNGKcq4SkEk4CA9tgmcG/zEhvJ10Tq7mdo2VOpH4o8dzq2UTzOAifbdxWaCddE6u6F/ZhJzxJziR4GjMQFrm2z6s/iOrZRZFFOuidXdDs2xq5vEsYfEcaUu21imLbSp5+1FOuidXcuMHZtkVy+JefT7UusaVZMWFcjvpzoJ10Tq7iVKIAF5MFjZzZZxPqrzHAwGdrPw5+YmDMbyddE6u4FxxVlIvMFtuaWB/tQ4UrJ52vTl8R1jK5jdTronVXU66ZJTEuy0OymgGmUWlGCH+d1Q4kYfEWVcUnsqpdYyqR/7Fk8jvp3E66J1V2GfDxVQmORoXrMWGUSzOJ6C26m0kxPtNG5VK0DIiAztZkcF/mJjoTronVXDjQmtvDMb4e2wWUYIxMBKEhIGA3ChaQUm8R1jc1Mn/WnYXNbWWUBxpYUITronV3A7Rswk7in1QUkSIw6Q20gqUYDr0nHv4G+UqEwYL+zibWI9NPrGVfIwMJA5XArmTROruPWsyS//aLDzSkH3ECSChv1qEWGU8cVG80jtGyp4eJAw+Kf1ROrv52jZRzeJGdL6onV5AXmODuI9UFKgQRhQ+qJ1eQ9Y3yvDHOChxJSoXjf+qJ1eRel0XKgtOpkob31RQg33nyOyvgrwqygtuj4Oe79b9lpBUYDr/FYuGXkvVuj4OUWHOKfCrPc+t2TSCqLW0KtftF0WUJCR7eTlp1M0mPU2eyrp+un9JBPvhE3zbOQuiykBI9vKi24kKSYto5mc8uiZvj9NHD1G6JvHrFfxEkiQ8tkeMT6qwf2xPq7WoxIcP8AG/8A/8QAKhABAAADBQcFAQEAAAAAAAAAAQARMSEwQWGhECBRcbHB0UBQgZHh8ID/2gAIAQEAAT8h/wA+IAu1VkEThX/MYmQGXxBMrUR9uOnVrCYzRzs2GyESnaDlE7AY4H4gA+bC8QaUaKn7XLplDFcCJ2Z6xbP1DDGsdTbPOMqMSae/H9QIWMV7RbaKlVh/ZMOh2MMa71N3kCRil/d4RyxA+y0Eixa5uUKqpuA4G1hjXepviBDihpaWQUXP2NxKN5DDaFzV3GGNY6lyhszacZewiwU+ObOEhDNFrusMax1LnUfYDC6A05M4ZuRmrjvsa51LnWfRasaUCCYzu1j68fTyjGbvuxrPUudR9CdQHgfqHyTVJsBHiCtRYVtzh2YBNWJpNAa5TK5YY17qXOo+gO3tI6TOEUirVdqNKCCfYpFHhd8IKzRYQFI1wefK7oLYwHSpKiw/Rc6jf29CTFQb89NB/LMi2ZAbgKw5qxavar9m7lxwHYyzilSQhonRudR7X7hizm4XHxATPhixTNTYGCP7XgROVs8nNzumgBIE1jGeFTm8WCQSNmmdG51m/NqeQYeTk8JuFh4gjAXEbOSLNY0Wxgbm0RlX1YmKVrJb8cDc0zo3Os9vQEhJJMYMNRpj+LmdgvCLRk2QO/bZnB9PmByLAx57umdG51nt6F0QliMTX6p15crkTg8YkhghPayNpATWJT1fAP5hAAAApLe0zo3Os9vRJOsfZQdfCLbgpQmQlotIGJwUU/0Fiw0UsFOXC40To3Os9vSHJlQKZzOAgEGSOFzO6MHAFtRbl8oBmGvFeLc6J0bnUe3pLNDQ76Zs4WQ1HGBEmXJoqjatOXCBZhgxWdzonRudR7eiATQBDTwUloMoYSGsNsAExsuTa9F5wGSZdVOS40Do3Oq9vQiVaaJBCzAZDX87WEhTLEgpw3KEiFEiW5V/DWBIktE3tI6Nzqvb0A+hzSGjUsMcz43WEiaD6iaFdF58+1MBsGNxOe7pXRudd7X4tTTWLVl9XVzuE4cBhmw47KlSIpAcElj+3RJOMYc0B5Qlqa8tzQ+jc6z2v7MLNMOLS4kMmLJocWCecNTN2AtqBiRU08rJuhimTEbSBkqhgv8AMYAEEwTZofRudZ7X9tc7LXElDZY13asi1iZ5Uo8zgQbQpASDcF8skxh0Klccj5uy2e7by+IVkeGHOND6NzrPb0El+sVP1CwnSUWm2jmYI/qxaed8sApIlYWQrY/4u5uJxaGZFnSqvJpxLnUe3oUpC+sjnnGrFrlxhyxFIEsuMVcHmNykxGkJbqsX28Ll2K9z1Ht6JBqXtDNYajOEUjYlTfdirc9R7ewHGS8j9Q2NpKLTeYYq3PUe3sLiQKzBlfMIsGSbzFW56j29iXMglPRyh7WszN5VuJNZFrBqylk8F9jblJo1XiJUd+AcTa7Fffk8hCkEgKTp5eyvp3gVXEiXCZRoNjDFXd84WwPmJPMOT9oDDOAl7OEr7hmRbsVUdHOHYq7ckC40D5iV/Hj9QMGKAke1C6OSMMiXbMWVisOU5KF7X4kADLVP1A8pWAEg9tZABqMIzMYuUHAmZkEgBwP83//aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888AN8888888888888888888888hg7QI88888888888888888880i2KADX28888888888888888lXyvHMMMM88888888y188884LcDDanOOOZ88888887AQ0888UOOOOSzyyyi8888888fBB9/Dx++++KtSyyyk8888888l/McuLePDDsi8HPPPd8888888879yyyV2Mec88tNNNf888888888ceAAAiH8888pBBBD88888888XSMnwwwOfN88Sxxxi8888888jl/+O1BBBhuK8axxx28888888/yyNgDE/8A/wD8RG04493zzzzzzzLLeHzwFk8wgYwEAABDzzzzzzzz3zzzzzy0EEHQIIIILzzzzzzzzzzzzzzzy9Ykd/8A/wD4/PPPPPPPPPPPPPPPPGsptfuLUvPPPPPPPPPPPPPPPPPE7SCYfPPPPPPPPPPPPPPPPPPPPIsPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP/xAAoEQEAAQEHAwQDAQAAAAAAAAABEQAgITFBUXGxEDBhQKHB4WCR0YH/2gAIAQMBAT8Q/GjZPdQsnsfTxNe8D5aVLK1JWHxUQENS5/jU6n8Z/r0hWJx3pK8r1cUEWEqBCGuf3UgZPc39CElnM6fdM1JWotNwW5H27ICWhm1emvzfgpWkVFp8L2EK7Ga6FSwjIZH3S5tum1FJR7m/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" />
                  </defs>
                </svg>
              </div>
              <div className='bg-black xl:h-full h-[300px] lg:w-3/5 md:w-[80%] sm:w-[83%] w-full z-40 border border-gray-600 absolute' />
              <div className='xl:h-full h-[300px] lg:w-3/5 md:w-[70%] sm:w-[80%] w-full z-40 md:top-10 top-5 lg:left-14 lg:px-0 px-5 absolute'>
                <Image className='object-fill h-full w-full' src={me} alt="me" />
              </div>
            </div>
          </div>
        </div>
        <div className='relative'>
          <BackgroundSvg />
          <div className='w-[80%] mx-auto z-40 relative'>
            <h2 className='text-5xl mt-4 font-medium font-font-clash'>Projects</h2>

            <ProjectCard project={projects.slice(0, 3)} />
            <div className='flex justify-end cursor-pointer relative hover:opacity-80 mt-4'>
              <Link href="/portfolio"><span className='border-b hover:opacity-60 text-xs'>View Mores</span></Link>
            </div>
          </div>
          <div className='w-[80%] mx-auto pt-10 pb-32 relative z-40'>
            <h2 className='text-5xl mt-4 font-medium font-font-clash'>Article</h2>
            <div className='mt-6 grid lg:grid-cols-2 grid-cols-1 gap-20 pb-10'>
              <Article />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
