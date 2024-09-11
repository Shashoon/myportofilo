import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import '../Styles/Skills.css';
import skillsData from '../Data/skills-icons-data';

const Skills = () => {
    return (
        <Swiper slidesPerView={5}
            spaceBetween={5}
            navigation={true}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySkillsSwiper">
            {
                skillsData.map((curr, _index) => (
                    <SwiperSlide key={_index}>
                        <div className='skills-item'>
                            {curr}
                        </div>
                    </SwiperSlide>
                ))
            }


        </Swiper>
    );
};

export default Skills;
