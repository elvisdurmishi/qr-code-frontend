import { useRef, useEffect } from 'react';

const MainInput = ({ body, setBody, type, error, setError }) => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  useEffect(() => {
    setFocus();
  }, []);

  return (
    <div className='main-input-container'>
      <input
        ref={htmlElRef}
        type={type}
        className={`main-input ${error ? 'input-error' : ''}`}
        placeholder={type === 'text' ? 'Enter your text' : 'Enter your url'}
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          if (error && body.length > 0) {
            setError(false);
          }
        }}
      />
      <label className='text-gray-500'>Your QR code will be generated automatically.</label>
    </div>
  );
};

export default MainInput;
