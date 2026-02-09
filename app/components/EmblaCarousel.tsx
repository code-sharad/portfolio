import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import Project from './project'
import { projectsData } from '@/lib/data'

type PropType = {
    options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <section className="embla w-full max-w-xl mx-auto sm:hidden">
            <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                    {projectsData.map((project, index) => (
                        <div className="embla__slide flex-[0_0_100%] min-w-0 px-2" key={index}>
                            <Project {...project} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls flex justify-center mt-6">
                <div className="embla__dots flex gap-2">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'w-3 h-3 rounded-full transition-all '.concat(
                                index === selectedIndex
                                    ? 'bg-stone-800 dark:bg-stone-200 w-6'
                                    : 'bg-stone-300 dark:bg-stone-700 hover:bg-stone-400 dark:hover:bg-stone-600'
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
