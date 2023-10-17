/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx=classNames.bind(styles);
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={cx('slider')}>
      <FontAwesomeIcon icon={faChevronLeft}  className={cx('left-arrow')}onClick={prevSlide} />
      <FontAwesomeIcon icon={faChevronRight} className={cx('right-arrow')} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className={cx('image')}/>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;