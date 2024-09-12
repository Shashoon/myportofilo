import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import '../Styles/Projects.css';
import projectsData from '../Data/projects-data';

const Projects = () => {
    return (
        <section className='projects-section' id='projects'>
            <h1 className='project-title'>Projects</h1>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        coverflowEffect: {
                            rotate: 0,
                            stretch: 0,
                            depth: 0,
                            modifier: 1,
                            slideShadows: true,
                        }
                    }, 768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper"
            >
                {
                    projectsData.map((curr, _index) => (
                        <SwiperSlide key={_index}>
                            <img src={curr.imageUrl} alt={_index} />
                            <div className="slide-text">
                                <div className='slide-header'>
                                    <h1>{curr.title}</h1>
                                    <div className='slide-icon'>
                                        <a href={curr.pageUrl} target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path></svg>
                                        </a>
                                        <a href={curr.gitUrl} target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                                <p>{curr.desc}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    );
}

export default Projects;