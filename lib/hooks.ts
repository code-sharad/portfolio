import { useActiveSectionContext } from '@/context/active-session-context';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

type useSectionInViewProps = {
    sectionName: SectionName;
}

function useSectionInView(
    sectionName
:SectionName,threshold=0.75) {
    const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastclick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastclick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastclick, sectionName]);

  return {ref,inView};
}

export default useSectionInView