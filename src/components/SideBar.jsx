import { Instagram, Youtube } from 'lucide-react'
import portrait from '../assets/Portrait.jpg'


const SideBar = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <a href="/" className='w-1/3'>
                    <img src={portrait} className='w-full rounded-full' />
                </a>
            </div>
            <div className='flex flex-row justify-center gap-4 pt-4'>
                <a href="https://www.youtube.com/@jackpantomime" target='_blank'>
                    <button>
                        <Youtube />
                    </button>
                </a>
                <a href="https://www.instagram.com/jackpantomime/" target='_blank'>
                    <button>
                        <Instagram />
                    </button>
                </a>
                <a href="https://www.tiktok.com/@jackpantomime" target='_blank'>
                    <button>
                        <span className="[&>svg]:h-5 [&>svg]:w-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                            </svg>
                        </span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default SideBar