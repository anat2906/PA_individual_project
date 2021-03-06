import styled from "styled-components";
import { colors, font_size } from "../../config/var";

const SHashtag = styled.div`
  display: inline-block;
  background: ${colors.pale_2};
  border-radius: 15px;
  font-size: ${font_size.text_sm};
  padding: 0.2em 0.7em;
  font-family: "PT Mono";
  margin: 0.2em;
`;

function Hashtag(props) {
  return <SHashtag>#{props.children}</SHashtag>;
}

export default Hashtag;
