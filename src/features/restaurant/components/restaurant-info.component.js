import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";
import { Spacer } from "../../../components/spacer/spacer.component.js";
import { Text } from "../../../components/typography/text.component.js";
import {
  Address,
  CardCover,
  CardView,
  Icon,
  Info,
  Section,
  SectionEnd,
  Stars,
} from "./restaurant-info.styles.js";

const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name = "Pizza Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "Cairo, Egypt",
    isOpenNow = true,
    rating = "5",
    isClosedTemporarily = true,
  } = restaurant || {};

  const RenderedStars = () => {
    const numberOfTimes = Array.from(new Array(Math.ceil(rating)));
    return numberOfTimes.map((_, i) => (
      <SvgXml key={i} xml={star} width={20} height={20} />
    ));
  };

  return (
    <CardView elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Stars>
            <RenderedStars />
          </Stars>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </CardView>
  );
};

export default RestaurantInfoCard;
