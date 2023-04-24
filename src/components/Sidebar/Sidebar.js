import { MdTextFields } from 'react-icons/md';
import { VscLink } from 'react-icons/vsc';
import SidebarIcon from './SidebarIcon';

const Sidebar = ({ type, setType }) => {
  return (
    <div className='type-select-sidebar'>
      <SidebarIcon
        icon={<MdTextFields size={28} />}
        text={'Text'}
        active={type === 'text'}
        setType={setType}
        type={'text'}
      />
      <SidebarIcon
        icon={<VscLink size={28} />}
        text={'URL'}
        active={type === 'url'}
        setType={setType}
        type={'url'}
      />
    </div>
  );
};

export default Sidebar;
