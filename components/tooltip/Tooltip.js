import Tooltip from "react-simple-tooltip";
import { colors, font_size } from "../../config/var";

function STooltip(props) {
  return (
    <Tooltip
      {...props}
      background="#fff"
      padding={3}
      color={colors.dark_1}
      placement="top"
      fontSize={font_size.text_sm}
      fontFamily="Roboto"
    >
      {props.children}
    </Tooltip>
  );
}

export default STooltip;
