'use client';

import { createContext, type ReactNode, useContext, useEffect, useRef, useState } from 'react';

type FooterContextValue = {
  setFooter: (node: ReactNode) => void;
  clearFooter: () => void;
  footer: ReactNode;
};

const FooterContext = createContext<FooterContextValue>({
  setFooter: () => {},
  clearFooter: () => {},
  footer: null,
});

export function FooterProvider({ children }: { children: ReactNode }) {
  const [footer, setFooterState] = useState<ReactNode>(null);

  const setFooter = (node: ReactNode) => setFooterState(node);
  const clearFooter = () => setFooterState(null);

  return (
    <FooterContext.Provider value={{ setFooter, clearFooter, footer }}>
      {children}
    </FooterContext.Provider>
  );
}

export function usePageFooter(node: ReactNode) {
  const { setFooter, clearFooter } = useContext(FooterContext);
  const nodeRef = useRef(node);
  nodeRef.current = node;

  useEffect(() => {
    setFooter(nodeRef.current);
    return () => clearFooter();
  });
}

export function useFooterContent() {
  return useContext(FooterContext).footer;
}
