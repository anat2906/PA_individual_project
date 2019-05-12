import Tooltip from "react-simple-tooltip";
import { colors } from "../../config/var";

function STooltip(props) {
  return (
    <Tooltip
      {...props}
      background="#fff"
      padding={3}
      color={colors.dark_1}
      placement="top"
      fontSize="13px"
      fontFamily="Roboto"
    >
      {props.children}
    </Tooltip>
  );
}

export default STooltip;
