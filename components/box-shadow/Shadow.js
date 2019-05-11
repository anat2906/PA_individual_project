import styled from "styled-components";
import { colors } from "../../config/var";

const Shadow = styled.div`
  border: 1px solid ${props => props.color};
  box-shadow: 5px 5px 0px 0px ${props => props.color};
  padding: 1em;
  background: ${colors.light_1};
  border-radius: 3px;
`;

export default Shadow;
