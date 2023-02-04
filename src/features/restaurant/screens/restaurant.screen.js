import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { Searchbar } from "react-native-paper";
import RestaurantInfoCard from "../components/restaurant-info.component";

const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

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
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
