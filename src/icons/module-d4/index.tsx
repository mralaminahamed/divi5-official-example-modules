import React, { ReactElement } from 'react';

// Icon data.
export const name      = 'example/module-d4'; // Unique name.
export const viewBox   = '0 96 960 960'; // You will need to adjust this to match your SVG.
export const component = (): ReactElement => (
  <path d="M480.276 1006q-88.916 0-167.743-33.104-78.828-33.103-137.577-91.852-58.749-58.749-91.852-137.535Q50 664.723 50 575.542q0-89.438 33.162-167.491 33.163-78.053 92.175-136.942 59.011-58.889 137.533-91.999Q391.393 146 480.458 146q89.428 0 167.518 33.093T784.94 271.06q58.874 58.874 91.967 137.215Q910 486.615 910 575.808q0 89.192-33.11 167.518-33.11 78.326-91.999 137.337-58.889 59.012-137.167 92.174Q569.447 1006 480.276 1006ZM523 774h97V378h-97v161h-86V378h-97v259h183v137Z"/>
); // Your SVG path. without the svg tag.
