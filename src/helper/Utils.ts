import { Dimensions } from 'react-native';
import { IMAGE_BASE_URL, VENDOR_LOGO_BASE_URL } from '../api/endpoints';
import {
  IExtraGDDealsEnum,
  IOfferCategory,
  IStoreOfferType,
} from '../redux/sagas/categories/categoriesTypes';
import { OfferTypeEnum } from '../types/listingTypes';
import { ImageSourcePropType } from 'react-native';

export interface IGDDealsOffer {
  title: string | undefined;
  value?: number;
}
export interface IOfferType {
  activeOffer: OfferTypeEnum;
  isBoGo?: { buyX?: number; getY?: number; gdDiscount?: IGDDealsOffer };
  flatOrUpto?: {
    title: string;
    value: number;
    gdDiscount?: IGDDealsOffer;
  };
  originalPrice?: {
    value: number;
    gdDiscount?: IGDDealsOffer;
  };
}

export interface IProductOfferText {
  title?: string;
  subTitle?: string;
  sideText?: string;
  gdDiscount?: IGDDealsOffer;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const mobileRegex = /^[6-9]\d{9}$/;

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const getStyleValue = (
  key: string,
  value: string | number | undefined
) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};

export const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
  return passwordRegex.test(password);
};

export const isValidMobile = (mobile: string) => {
  return mobileRegex.test(mobile);
};

const getGDText = (gdType: IStoreOfferType): IGDDealsOffer => {
  switch (gdType.extraGreedyDealsType) {
    case IExtraGDDealsEnum.Cashback:
      return {
        title: `Extra GD discount ${gdType.extraGreedyDealDiscount}₹ cashback`,
        value: gdType.extraGreedyDealDiscount,
      };

    default:
      return {
        title: `Extra GD discount ${gdType.extraGreedyDealDiscount}% off`,
        value: gdType.extraGreedyDealDiscount,
      };
  }
};

export const getOfferType = (offer: IStoreOfferType): IOfferType => {
  switch (offer.selectedOfferType) {
    case OfferTypeEnum.BUY_GEY:
      if (offer.buyX === 0 || offer.getY === 0) {
        return { activeOffer: OfferTypeEnum.NONE };
      }
      return {
        activeOffer: OfferTypeEnum.BUY_GEY,
        isBoGo: {
          buyX: offer.buyX,
          getY: offer.getY,
          gdDiscount: offer.isExtraGreedyDealsAvail
            ? getGDText(offer)
            : undefined,
        },
      };
    case OfferTypeEnum.UPTO:
      if (offer.uptoXPercentOff === 0) {
        return { activeOffer: OfferTypeEnum.NONE };
      }
      return {
        activeOffer: OfferTypeEnum.UPTO,
        flatOrUpto: {
          title: 'Upto',
          value: offer.uptoXPercentOff ?? 0,
          gdDiscount: offer.isExtraGreedyDealsAvail
            ? getGDText(offer)
            : undefined,
        },
      };
    case OfferTypeEnum.FLAT:
      if (offer.flatXPercentOff === 0) {
        return { activeOffer: OfferTypeEnum.NONE };
      }
      return {
        activeOffer: OfferTypeEnum.FLAT,
        flatOrUpto: {
          title: 'Flat',
          value: offer.flatXPercentOff ?? 0,
          gdDiscount: offer.isExtraGreedyDealsAvail
            ? getGDText(offer)
            : undefined,
        },
      };
    case OfferTypeEnum.ORIGINAL_PRICE:
      if (offer.originalPrice === 0) {
        return { activeOffer: OfferTypeEnum.NONE };
      }
      return {
        activeOffer: OfferTypeEnum.ORIGINAL_PRICE,
        originalPrice: {
          value: offer.originalPrice ?? 0,
          gdDiscount: offer.isExtraGreedyDealsAvail
            ? getGDText(offer)
            : undefined,
        },
      };
    default:
      return { activeOffer: OfferTypeEnum.NONE };
  }
};

export const getExtraGDActiveOfferText = (
  type: IOfferType
): IGDDealsOffer | undefined => {
  if (!type) return;
  switch (type.activeOffer) {
    case OfferTypeEnum.BUY_GEY:
      return type?.isBoGo?.gdDiscount;
    case OfferTypeEnum.UPTO:
    case OfferTypeEnum.FLAT:
      return type?.flatOrUpto?.gdDiscount;
    case OfferTypeEnum.ORIGINAL_PRICE:
      return type?.originalPrice?.gdDiscount;
    default:
      return undefined;
  }
};

export const getFormattedExpiryDate = (res: string | undefined): string => {
  if (!res) return '';
  const date = new Date(res);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-GB', { month: 'short' });
  const year = date.getFullYear();
  const formattedDate = `${day} ${month}, ${year}`;
  return formattedDate;
};

export const getOfferDetailText = (
  offer: IStoreOfferType | undefined
): string => {
  switch (offer?.selectedOfferType) {
    case OfferTypeEnum.BUY_GEY:
      return `Buy ${offer.buyX} get ${offer.getY}`;
    case OfferTypeEnum.UPTO:
      return `Upto ${offer.uptoXPercentOff}% off`;
    case OfferTypeEnum.FLAT:
      return `Flat ${offer.flatXPercentOff}% off`;
    case OfferTypeEnum.ORIGINAL_PRICE:
      return `Offer price ${offer.originalPrice}`;
    default:
      return '';
  }
};

export const getCategorySubCatName = (offerCategories: IOfferCategory[]) => {
  return `${offerCategories?.map((item) => item.name).join(' - ')}`;
};

export const getImageURL = (url: string): ImageSourcePropType => {
  return { uri: `${IMAGE_BASE_URL}${url}` };
};

export const getVendorLogoURL = (url: string) => {
  return `${VENDOR_LOGO_BASE_URL}${url}`;
};

export const getProductOfferInfo = (
  offer: IStoreOfferType,
  offerPrice?: number
): IProductOfferText | undefined => {
  const offerType = getOfferType(offer);
  switch (offerType.activeOffer) {
    case OfferTypeEnum.BUY_GEY:
      if (offer.buyX === 0 || offer.getY === 0) {
        return;
      }
      return {
        title: `Buy ${offerType.isBoGo.buyX}`,
        subTitle: `Get ${offerType.isBoGo.getY}`,
        sideText: 'free',
        gdDiscount: offerType?.isBoGo?.gdDiscount,
      };
    case OfferTypeEnum.FLAT:
    case OfferTypeEnum.UPTO:
      return {
        title: offerType.flatOrUpto.title,
        subTitle: `${offerType.flatOrUpto.value}%`,
        sideText: 'off',
        gdDiscount: offerType?.flatOrUpto?.gdDiscount,
      };
    case OfferTypeEnum.ORIGINAL_PRICE:
      return {
        title: `${offerType.originalPrice.value}`,
        subTitle: `${offerPrice}`,
        gdDiscount: offerType?.originalPrice?.gdDiscount,
      };
    default:
      return;
  }
};

export const getRandomBGColor = (): string => {
  const colors = [
    'rgba(129, 195, 65, 0.1)',
    'rgba(248, 152, 29, 0.1)',
    'rgba(73, 89, 105, 0.1)',
    'rgba(1, 126, 180, 0.1)',
    'rgba(252, 39, 122, 0.1)',
    'rgba(236, 0, 140, 0.1)',
    'rgba(15, 123, 213, 0.1)',
    '#fafaf5',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const getOfferInfo = (offer: IOfferType): string => {
  switch (offer?.activeOffer) {
    case OfferTypeEnum.BUY_GEY:
      return `Buy ${offer.isBoGo?.buyX} get ${offer.isBoGo?.getY}`;
    case OfferTypeEnum.FLAT:
    case OfferTypeEnum.UPTO:
      return `${offer.flatOrUpto?.title} ${offer.flatOrUpto?.value}% off`;
    default:
      return '';
  }
};

export type ScreenType = 'small' | 'medium' | 'large';

export const getScreenSize = (): ScreenType => {
  const width = screenWidth;
  if (width <= 320) {
    return 'small';
  } else if (width >= 320 && width <= 360) {
    return 'medium';
  } else {
    return 'large';
  }
};

export const getSectionPadding = () => {
  const screenSize = getScreenSize();
  switch (screenSize) {
    case 'small':
      return 16;
    case 'medium':
      return 16;
    case 'large':
      return 16;
    default:
      return 16;
  }
};
