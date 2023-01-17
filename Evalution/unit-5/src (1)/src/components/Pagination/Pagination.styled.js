import styled from 'styled-components'
import {rem} from "polished"
import { getColorCode } from "../../utils/getColorCode.utils";
import { size } from "../../utils/size.utils";

export const BorderBtn=styled.button`
    padding: 10px;
    &&:focus{
      border-color: blue;
    }
  
`