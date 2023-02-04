import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

import {
  ListContainer,
  SafeArea,
  SearchBarContainer,
} from "./restaurant.screen.styles";
import RestaurantInfoCard from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (text) => {
    setSearchQuery(text);
  };

  return (
    <SafeArea>
      <SearchBarContainer>
        <Searchbar
          onChangeText={onChangeSearch}
          placeholder="Search"
          value={searchQuery}
        />
      </SearchBarContainer>
      <ListContainer
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        keyExtractor={(item) => item.name}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
      />
    </SafeArea>
  );
};

export default RestaurantScreen;
