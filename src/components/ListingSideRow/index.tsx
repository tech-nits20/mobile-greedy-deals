import React, { FC, memo, useState } from "react";
import { View } from "react-native";
import ListingSideRowItem, {
  ListingSideRowItemProps,
} from "../ListingSideRowItem";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Padding } from "../../../GlobalStyles";

const mockSideRowData: ListingSideRowItemProps[] = [
  {
    title: "All",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Women",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Men",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Kids",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Summer",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Winter",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Women",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Men",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Kids",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Summer",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
  {
    title: "Winter",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png"),
  },
];
const ListingSideRow: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const onSelected = (index: number) => {
    setSelectedCategory(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mockSideRowData}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => (
          <View style={{ paddingBottom: Padding.p_base }} />
        )}
        renderItem={({ index, item }) => {
          return (
            <ListingSideRowItem
              {...item}
              id={index}
              onSelected={() => onSelected(index)}
              isSelected={selectedCategory === index}
            />
          );
        }}
      />
    </View>
  );
};

export default memo(ListingSideRow);
