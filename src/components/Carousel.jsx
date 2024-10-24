import { useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { VideoCard } from './VideoCard';
import Autoplay from 'embla-carousel-autoplay'


export function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    const [youtubeLinks, setYoutubeLinks] = useState([
        { url: 'https://www.youtube.com/embed/6U_q5PMG5-I?si=_QOrQ-6HeS9BFjXu', name: 'Train Spotting'},
        { url: 'https://www.youtube.com/embed/O5CeKY9j5wg?si=IkuasqgdLO1hwdzM', name: 'Lifeline'},
        { url: 'https://www.youtube.com/embed/8Iq0gp7ZZqg?si=L8wZE4GlxU54Hq9n', name: 'Dream The Night Away'},
    ]);

    return (
        <section className="embla">
            <p className='mt-4 font-poppins font-semibold text-xl'> Latest Releases! </p>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {youtubeLinks.map((youtubeLink, index) => (
                        <div className="embla__slide">
                            <VideoCard youtubeLink={youtubeLink} key={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
