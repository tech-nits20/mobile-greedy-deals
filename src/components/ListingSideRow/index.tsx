import React, { FC, memo, useState } from 'react';
import { View } from 'react-native';
import ListingSideRowItem, {
  ListingSideRowItemProps,
} from '../ListingSideRowItem';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';
import { Padding } from '../../../GlobalStyles';
import { ICategory } from '../../redux/sagas/categories/categoriesTypes';

const mockSideRowData: ListingSideRowItemProps[] = [
  {
    title: 'All',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Women',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Men',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Kids',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Summer',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Winter',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Women1',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Men1',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Kids1',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Summer1',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
  {
    title: 'Winter1',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-1.png'),
  },
];
interface IListingSideRowProps {
  subCategories: ICategory[];
  selectedCat: ICategory;
  onSelectedItem: (item: ICategory) => void;
}
const ListingSideRow: FC<IListingSideRowProps> = ({
  subCategories,
  selectedCat,
  onSelectedItem,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ICategory>(selectedCat);

  const onSelected = (category: ICategory) => {
    onSelectedItem(category);
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={subCategories}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ paddingBottom: Padding.p_base }} />
        )}
        renderItem={({ index, item }) => {
          return (
            <ListingSideRowItem
              key={index}
              {...item}
              onSelected={() => onSelected(item)}
              isSelected={selectedCategory.id === item.id}
            />
          );
        }}
      />
    </View>
  );
};

export default memo(ListingSideRow);
