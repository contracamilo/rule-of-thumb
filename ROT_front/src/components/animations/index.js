import React from 'react';
import { Tween, Reveal } from 'react-gsap';

export const FadeIn = ({ children, ref, duration }) => (
  <Reveal repeat trigger={ref}>
    <Tween from={{ opacity: 0 }} duration={duration}>
      {children}
    </Tween>
  </Reveal>
);
