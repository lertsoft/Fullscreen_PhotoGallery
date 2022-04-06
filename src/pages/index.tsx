import React from 'react';

import Image from 'next/image';

import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';

import Carousel, { CarouselItem } from '../components/carousel';

// const photos = [
//   {
//     src: '/assets/images/BLM2020-2.jpg',
//     alt: 'photo taken',
//     title: 'photo mine',
//     width: 3200,
//     height: 2400,
//     sizes: '(max-height: 500px) 1000px',
//     className: 'photos',
//     loader: 'nextJsImage',
//     onClick: 'onClick',
//     id: 'default-carousel',
//   },
//   {
//     src: '/assets/images/000678220001.JPG',
//     width: 1600,
//     height: 900,
//     id: 'default-carousel',
//   },
//   {
//     src: '/assets/images/000678230010.JPG',
//     width: 800,
//     height: 600,
//     id: 'default-carousel',
//   },
//   {
//     src: '/assets/images/IMG_0692.JPG',
//     width: 1600,
//     height: 900,
//     id: 'default-carousel',
//   },
//   {
//     src: '/assets/images/IMG_4328.PNG',
//     width: 800,
//     height: 600,
//   },
//   {
//     src: '/assets/images/IMG_4329.PNG',
//     width: 1600,
//     height: 900,
//   },
// ];

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Gallery du Coste"
          description="Fullscreen gallery of the works selected by the photographer Ronny Coste"
        />
      }
    >
      <div>
        <Carousel>
          <CarouselItem width={undefined}>
            {' '}
            <Image
              src="/assets/images/brook_76480010.jpg"
              alt="Brook Interview portrait"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            {' '}
            <Image
              src="/assets/images/brook_76480009.jpg"
              alt="Brook Interview portrait"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            <Image
              src="/assets/images/arq_000078040018.jpg"
              alt="Old manhattan arquitecture"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            <Image
              src="/assets/images/BLM2020-2.jpg"
              alt="Summer 2020 - BLM"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            <Image
              src="/assets/images/cover_000078040032.jpg"
              alt="Album Cover"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            <Image
              src="/assets/images/tns_21920005.JPG"
              alt="Graduation Portraits"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            <Image
              src="/assets/images/pa_000678220001.JPG"
              alt="Rural PA street"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            <Image
              src="/assets/images/pa_000678230010.JPG"
              alt="Rural PA street"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
          <CarouselItem width={undefined}>
            <Image
              src="/assets/images/portrait_78050009.JPG"
              alt="GoodBye Portrait"
              width="1080"
              height="1350"
              layout="intrinsic"
            />
          </CarouselItem>
        </Carousel>
      </div>
    </Main>
  );
};

export default Index;
