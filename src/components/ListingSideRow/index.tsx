import React, { FC, memo, useState } from "react";
import { View } from "react-native";
import ListingSideRowItem, {
  ListingSideRowItemProps,
} from "../ListingSideRowItem";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";

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
    <ScrollView horizontal>
      <View style={styles.container}>
        {mockSideRowData.map((value, index) => {
          return (
            <ListingSideRowItem
              {...value}
              id={index}
              onSelected={() => onSelected(index)}
              isSelected={selectedCategory === index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default memo(ListingSideRow);
