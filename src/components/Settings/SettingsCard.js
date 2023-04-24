import Icon from '../../assets/QrCode.js';
import Button from '../Common/Button';
import Accordion from './Accordion';
import { CgSoftwareDownload, CgCircleci } from 'react-icons/cg';

const SettingsCard = ({
  generate,
  colors,
  setColors,
  label,
  setLabel,
  resetInput,
  body,
  setError,
  setActiveTab,
  loading,
}) => {
  const getButtonIcon = () => {
    if (loading) {
      return <CgCircleci size={28} className={'loading-button'} />;
    }

    return <CgSoftwareDownload size={28} />;
  };

  return (
    <div
      className={
        'bg-secondary rounded-3xl grid grid-rows-3 lg:px-16 px-8 place-items-center max-h-[90%]'
      }
    >
      <div className='qr-code-image'>
        <Icon backgroundColor={colors.background} foregroundColor={colors.foreground} />
      </div>
      <div className={'flex flex-col items-center w-full row-span-2'}>
        <Accordion text={'Colors'} items={<Colors colors={colors} setColors={setColors} />} />
        <Accordion text={'Label'} items={<LabelInput label={label} setLabel={setLabel} />} />
      </div>
      <div className={'flex gap-4 my-5'}>
        <Button
          onClick={() => {
            if (!body) {
              setError(true);
              setActiveTab(1);
              return;
            }
            generate();
            resetInput();
          }}
          icon={getButtonIcon()}
          text={loading ? '' : 'PNG'}
          color={'lightblue'}
        />
      </div>
    </div>
  );
};

const Colors = ({ colors, setColors }) => {
  const handleColorChange = (type, color) => {
    let hex_code = color.split('');
    let red = parseInt(hex_code[1] + hex_code[2], 16);
    let green = parseInt(hex_code[3] + hex_code[4], 16);
    let blue = parseInt(hex_code[5] + hex_code[6], 16);
    let rgb = [red, green, blue];
    let newColors = Object.assign({}, colors);
    newColors[type] = color;
    newColors[type + '_color'] = rgb;

    setColors(newColors);
  };

  return (
    <div className={'flex flex-col gap-3'}>
      <div className={'flex flex-col items-center accordion-content-item'}>
        <input
          type='color'
          id='background'
          name='head'
          value={colors.background}
          onChange={(e) => {
            handleColorChange('background', e.target.value);
          }}
        />
        <label htmlFor='background'>Background</label>
      </div>
      <div className={'flex flex-col items-center accordion-content-item'}>
        <input
          type='color'
          id='foreground'
          name='head'
          value={colors.foreground}
          onChange={(e) => {
            handleColorChange('foreground', e.target.value);
          }}
        />
        <label htmlFor='foreground'>Foreground</label>
      </div>
    </div>
  );
};

const LabelInput = ({ label, setLabel }) => {
  return (
    <input
      className={'input'}
      type={'text'}
      value={label}
      onChange={(e) => {
        setLabel(e.target.value);
      }}
      placeholder={'Label at the bottom'}
    />
  );
};

export default SettingsCard;
