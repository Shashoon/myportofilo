// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// Import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import '../Styles/Skills.css';

const Skills = () => {
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="3"
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            }}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false, }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={require('../Images/crypto-dashboard.png')} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('../Images/wordle.png')} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('../Images/rootix.png')} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('../Images/crypto-dashboard.png')} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('../Images/wordle.png')} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={require('../Images/rootix.png')} alt="Slide 3" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Skills;
