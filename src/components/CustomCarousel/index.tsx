import React, { FC, memo, useEffect, useState } from 'react';
import { View, Dimensions, Image, ImageSourcePropType } from 'react-native';
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
  const [imageError, setImageError] = useState(false);

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
          data={items}
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
                source={
                  imageError
                    ? require('../../../assets/image-122.png')
                    : (item?.imgSrc as ImageSourcePropType)
                }
                onError={() => setImageError(true)}
              />
            </View>
          )}
        />
      </View>
      <View style={styles.paginationContainer}>
        <View style={styles.pagination}>
          {items?.map((_, index) => (
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
