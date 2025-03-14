import React, { FC, memo, useEffect, useState } from 'react';
import { View, Dimensions, Image } from 'react-native';
import { styles } from './styles';
import Carousel from 'react-native-reanimated-carousel';
import { Padding } from '../../../GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ActiveDot from '../../../assets/active_dot.png';
import InActiveDot from '../../../assets/inactive_dot.png';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import { screenWidth } from '../../helper/Utils';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

const mockCarouselData = [
  {
    imgSrc: require('../../../assets/image-122.png'),
  },
  {
    imgSrc: require('../../../assets/carousel1.png'),
  },
  {
    imgSrc: require('../../../assets/carousel2.png'),
  },
];
export interface CarouselProps {
  isFullWidth?: boolean;
  carouselMargin?: number;
  items?: { imgSrc: string }[];
  autoPlay?: boolean;
}

const CustomCarousel: FC<CarouselProps> = ({
  isFullWidth,
  items,
  carouselMargin,
  autoPlay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Carousel
          loop
          width={
            screenWidth - (isFullWidth ? 0 : carouselMargin ?? Padding.p_base)
          }
          height={138}
          style={{
            borderRadius: isFullWidth ? 0 : 12,
          }}
          autoPlay={autoPlay}
          pagingEnabled
          data={mockCarouselData}
          scrollAnimationDuration={autoPlay ? 5000 : 500}
          snapEnabled
          onSnapToItem={(index) => setCurrentIndex(index)}
          renderItem={({ item, index }) => (
            <View style={styles.imageWrapper}>
              <Image
                style={
                  isFullWidth
                    ? styles.imageContainerFull
                    : styles.imageContainer
                }
                source={item.imgSrc}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {mockCarouselData.map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setCurrentIndex(index)}
            >
              <Image
                source={currentIndex === index ? ActiveDot : InActiveDot}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
};

export default memo(CustomCarousel);
