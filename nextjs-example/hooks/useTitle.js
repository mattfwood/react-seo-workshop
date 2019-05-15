import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    return () => {
      document.title = title;
    };
  }, [title])
}

export default useTitle;
