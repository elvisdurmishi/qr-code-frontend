const SidebarIcon = ({ icon, text = 'tooltip', active, setType, type }) => (
  <div
    className={`sidebar-icon group ${active ? 'active' : ''}`}
    onClick={() => {
      setType(type);
    }}
  >
    {icon}
    <span className={'sidebar-tooltip group-hover:scale-100'}>{text}</span>
  </div>
);

export default SidebarIcon;
