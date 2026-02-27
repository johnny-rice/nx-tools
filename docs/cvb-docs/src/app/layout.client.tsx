'use client';

import Logo from '@/app/icon.svg';
import Image from 'next/image';
import { useId } from 'react';

export function CVBIcon(props: React.SVGProps<SVGSVGElement>) {
  const id = useId();

  return <Image src={Logo} alt="Logo" width={20} height={20} />;
}
