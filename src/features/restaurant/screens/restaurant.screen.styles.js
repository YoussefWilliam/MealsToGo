import styled from "styled-components/native";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";

export const SearchBarContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const ListContainer = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
