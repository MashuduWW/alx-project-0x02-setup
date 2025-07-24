// components/layouts/DarkBodyLayout.tsx
import { useEffect } from 'react';
import { DarkBodyBackgroundProps } from "@/interfaces"



const DarkBodyLayout: React.FC<DarkBodyBackgroundProps> = ({ children }) => {
  useEffect(() => {
    document.body.classList.add('bg-gray-500', 'text-gray-200');

    return () => {
      document.body.classList.remove('bg-gray-500', 'text-gray-200');
    };
  }, []);

  return <>{children}</>;
};

export default DarkBodyLayout;
