import { useEffect, useState } from 'react';

const Alert = () => {
  const [alertArr, setAlertArr] = useState([]);
  console.log('state', alertArr);

  function addAlert() {
    const num = Math.floor(Math.random() * 250) + 1;
    setAlertArr((prev) => [...prev, num]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (alertArr.length > 0) {
        setAlertArr((prev) => prev.slice(1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [alertArr]);

  return (
    <>
      <div>
        <button onClick={() => addAlert()}>Click me to crete Alert</button>
      </div>

      <div className='alertBox'>
        {alertArr &&
          alertArr?.map((a) => (
            <div key={a} className='alert'>
              {a}
            </div>
          ))}
      </div>
    </>
  );
};

export default Alert;
