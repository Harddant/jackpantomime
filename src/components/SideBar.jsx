import { Instagram, Twitter, Youtube } from 'lucide-react'
import portrait from '../assets/Portrait.jpg'

const SideBar = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center">
                <a href="/" className='w-1/3'>
                    <img src={portrait} className='w-full rounded-full' />
                </a>
            </div>
            <div className='flex flex-row justify-center gap-4 pt-4 text-orange'>
                <button>
                    <Youtube />
                </button>
                <button>
                    <Instagram />
                </button>
                <button>
                    <Twitter />
                </button>
            </div>
        </div>
    )
}

export default SideBar