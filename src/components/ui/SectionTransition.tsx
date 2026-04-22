/**
 * SectionTransition Component
 * Dark Luxury Automotive Detailing - Light Reflection Effect
 * 
 * Použití:
 * <SectionTransition />                          // výchozí
 * <SectionTransition variant="subtle" />         // jemnější
 * <SectionTransition variant="strong" />         // výraznější
 * <SectionTransition color="warm" />             // zlatá varianta
 * <SectionTransition color="cool" />             // stříbrná varianta
 * <SectionTransition animated={false} />         // bez animace
 */

import React from 'react';

interface SectionTransitionProps {
  /** Intenzita světelného efektu */
  variant?: 'subtle' | 'normal' | 'strong';
  /** Barevná varianta */
  color?: 'default' | 'warm' | 'cool';
  /** Směr: dark-to-light = glow jen na tmavé (horní) straně; light-to-dark = glow jen na tmavé (spodní) straně */
  direction?: 'dark-to-light' | 'light-to-dark';
  /** Povolit animaci "dýchání" */
  animated?: boolean;
  /** Vlastní CSS třídy */
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  variant = 'normal',
  color = 'default',
  direction,
  animated = true,
  className = '',
}) => {
  const classes = [
    'section-transition',
    variant !== 'normal' && variant,
    color !== 'default' && color,
    direction,
    !animated && 'static',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} aria-hidden="true" />;
};

export default SectionTransition;
