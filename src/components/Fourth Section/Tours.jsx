import React from 'react';
import { Instagram, Youtube } from 'lucide-react'
import ToursImg from '../../assets/ToursImg.jpg'

export const Tours = props => {
    return (
        <div className="flex flex-col min-h-screen"> {/* Add min-h-screen to ensure full page height */}
            <div className="flex-grow"> {/* Allows content to push footer down */}
                <div className="flex flex-col font-Oswald">
                    <h1 className="text-5xl mt-16">Jacks Tour</h1>
                    <img className="mt-36" src={ToursImg} alt="Berlin Tour"/>
                    <h2 className="mt-16 text-4xl">Berlin September 2025</h2>
                    <a href="https://www.ticketmaster.nl/" target="_blank">
                        <h3 className="mt-8 text-2xl underline">Book your tickets here</h3>
                    </a>
                </div>
            </div>

            <footer className="w-full bg-gray-500 mt-auto"> {/* mt-auto pushes footer to bottom */}
                <div className="flex container justify-center gap-8 py-4 border-2 border-black">
                    <a href="https://www.youtube.com/@jackpantomime" target="_blank">
                        <Youtube/>
                    </a>

                    <a href="https://www.instagram.com/jackpantomime/" target="_blank">
                        <Instagram/>
                    </a>

                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-spotify" viewBox="0 0 16 16">
                            <path
                                d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                        </svg>
                    </a>

                    <a href="https://soundcloud.com/jack-pantomime" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             viewBox="0 0 640 512">
                            <path
                                d="M639.8 298.6c-1.3 23.1-11.5 44.8-28.4 60.5s-39.2 24.4-62.3 24.1h-218c-4.8 0-9.4-2-12.8-5.4s-5.3-8-5.3-12.8V130.2c-.2-4 .9-8 3.1-11.4s5.3-6.1 9-7.7c0 0 20.1-13.9 62.3-13.9c25.8 0 51.1 6.9 73.3 20.1c17.3 10.2 32.3 23.8 44.1 40.1s20 34.8 24.2 54.4c7.5-2.1 15.3-3.2 23.1-3.2c11.7-.1 23.3 2.2 34.2 6.7S606.8 226.6 615 235s14.6 18.3 18.9 29.3s6.3 22.6 5.9 34.3zm-354-153.5c.1-1 0-2-.3-2.9s-.8-1.8-1.5-2.6s-1.5-1.3-2.4-1.7s-1.9-.6-2.9-.6s-2 .2-2.9 .6s-1.7 1-2.4 1.7s-1.2 1.6-1.5 2.6s-.4 1.9-.3 2.9c-6 78.9-10.6 152.9 0 231.6c.2 1.7 1 3.3 2.3 4.5s3 1.8 4.7 1.8s3.4-.6 4.7-1.8s2.1-2.8 2.3-4.5c11.3-79.4 6.6-152 0-231.6zm-44 27.3c-.2-1.8-1.1-3.5-2.4-4.7s-3.1-1.9-5-1.9s-3.6 .7-5 1.9s-2.2 2.9-2.4 4.7c-7.9 67.9-7.9 136.5 0 204.4c.3 1.8 1.2 3.4 2.5 4.5s3.1 1.8 4.8 1.8s3.5-.6 4.8-1.8s2.2-2.8 2.5-4.5c8.8-67.8 8.8-136.5 .1-204.4zm-44.3-6.9c-.2-1.8-1-3.4-2.3-4.6s-3-1.8-4.8-1.8s-3.5 .7-4.8 1.8s-2.1 2.8-2.3 4.6c-6.7 72-10.2 139.3 0 211.1c0 1.9 .7 3.7 2.1 5s3.1 2.1 5 2.1s3.7-.7 5-2.1s2.1-3.1 2.1-5c10.5-72.8 7.3-138.2 .1-211.1zm-44 20.6c0-1.9-.8-3.8-2.1-5.2s-3.2-2.1-5.2-2.1s-3.8 .8-5.2 2.1s-2.1 3.2-2.1 5.2c-8.1 63.3-8.1 127.5 0 190.8c.2 1.8 1 3.4 2.4 4.6s3.1 1.9 4.8 1.9s3.5-.7 4.8-1.9s2.2-2.8 2.4-4.6c8.8-63.3 8.9-127.5 .3-190.8zM109 233.7c0-1.9-.8-3.8-2.1-5.1s-3.2-2.1-5.1-2.1s-3.8 .8-5.1 2.1s-2.1 3.2-2.1 5.1c-10.5 49.2-5.5 93.9 .4 143.6c.3 1.6 1.1 3.1 2.3 4.2s2.8 1.7 4.5 1.7s3.2-.6 4.5-1.7s2.1-2.5 2.3-4.2c6.6-50.4 11.6-94.1 .4-143.6zm-44.1-7.5c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9s-3.6 .7-5 1.9s-2.2 2.9-2.4 4.8c-9.3 50.2-6.2 94.4 .3 144.5c.7 7.6 13.6 7.5 14.4 0c7.2-50.9 10.5-93.8 .3-144.5zM20.3 250.8c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9s-3.6 .7-5 1.9s-2.3 2.9-2.4 4.8c-8.5 33.7-5.9 61.6 .6 95.4c.2 1.7 1 3.3 2.3 4.4s2.9 1.8 4.7 1.8s3.4-.6 4.7-1.8s2.1-2.7 2.3-4.4c7.5-34.5 11.2-61.8 .4-95.4z"/>
                        </svg>
                    </a>

                    <a href="https://www.tiktok.com/@jackpantomime" target="_blank">
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
                            </svg>
                        </span>
                    </a>
                </div>

                <div className="flex justify-around pt-4 pb-4">
                    <h1 className="text-base">© 2024 Jack Pantomime</h1>
                    <div>
                        <h1 className="text-lg ">Made By</h1>
                        <h2 className="text-base">Harddant</h2>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Tours

