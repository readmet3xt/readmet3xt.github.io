import { useEffect, useState } from 'react';

const PHONE_QUERY = '(max-width: 639px)';

/** True below the sm breakpoint, where the motion stories switch to their portrait cuts. */
export const usePhone = () => {
  const [phone, setPhone] = useState(() => window.matchMedia(PHONE_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(PHONE_QUERY);
    const update = () => setPhone(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return phone;
};
