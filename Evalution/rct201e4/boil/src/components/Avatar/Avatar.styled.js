import styled from "styled-components";
import { rem } from "polished";
import { getColorCode } from "../../utils/getColorCode.utils";
import { size } from "../../utils/size.utils";

export const AvatarWrapperStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  border-radius: 50%;
  font-size: ${(props) => size(props.size)};
  font-weight: 700;
  border: ${rem("2px")} solid #ddd;
  padding: ${(props) => size(props.size)};
  width: ${(props) => size(props.size)};
  height: ${(props) => size(props.size)};
  background-color: ${(props) =>
    props.hasSrc ? "white" : getColorCode(props.name)};
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
AvatarWrapperStyled.displayName = "AvatarWrapperStyled";

export const NameStyled = styled.div``;
NameStyled.displayName = "NameStyled";

export const AvatarStyled = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: auto;
`;
AvatarStyled.displayName = "AvatarStyled";
