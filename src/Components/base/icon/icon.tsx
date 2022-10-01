import PropTypes from "prop-types";
import {icons} from '../../../Assets/icons/index';

const Icon = ({
  size, bgColor, stroke="#7C7C7A", icon, onClick, className,
}: {size: 'x-small' | 'small' | 'medium' | 'large', bgColor?: string, stroke?: string, icon: string, onClick?: any, className?:string}) => {

  let sizeWidth: string
  // let sizeHeight: string
  sizeWidth = size === 'small' ? '20' : size === 'medium' ? '30' : size === 'large' ? '40' : '15'

  const IconComp = icons[icon as keyof typeof icons];
  return <IconComp fill={bgColor} stroke={stroke} strokeWidth='0.3' width={sizeWidth} height={sizeWidth} onClick={onClick} className={className} />
};

Icon.defaultProps = {
  size: 'small',
  height: 'small',
  bgColor: "transparent",
};

Icon.propTypes = {
  size: PropTypes.oneOf(['x-small','small', 'medium', 'large']),
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default Icon;
