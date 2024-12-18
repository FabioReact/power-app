import { StarFilled, StarOutlined } from '@ant-design/icons';

type Props = {
  filled?: boolean;
  onSelect?: () => void;
  onUnSelect?: () => void;
};

const Star = ({ filled = false, onSelect, onUnSelect }: Props) => {
  if (filled) return <StarFilled className='cursor-pointer' onClick={onUnSelect} />;
  return <StarOutlined className='cursor-pointer' onClick={onSelect} />;
};

export default Star;
