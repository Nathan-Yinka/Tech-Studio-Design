import { useEffect } from 'react';

const useClearFormError = (fieldName, dependency, setFormErrors) => {
  useEffect(() => {
    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [fieldName]: "",
    }));
  }, [dependency]);
};


export default useClearFormError;