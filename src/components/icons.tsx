import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from '../theme';

type IconProps = { size?: number; color?: string };

/** Médico com estetoscópio (contorno), igual ao avatar do Figma. */
export function DoctorIcon({ size = 48, color = colors.icon }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Circle cx={24} cy={13} r={9} stroke={color} strokeWidth={2.6} />
      <Path
        d="M8 44v-5c0-7 5-12 12-12h8c7 0 12 5 12 12v5"
        stroke={color}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      <Path d="M17 27v8" stroke={color} strokeWidth={2.6} strokeLinecap="round" />
      <Circle cx={17} cy={38} r={3} stroke={color} strokeWidth={2.4} />
      <Path
        d="M31 27v5m-3 12v-6a3 3 0 0 1 6 0v6"
        stroke={color}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
    </Svg>
  );
}

/** Relógio com seta + lista (aba Histórico). */
export function HistoryIcon({ size = 64, color = colors.icon }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <Path
        d="M6 17a13 13 0 1 0 4-9.4"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <Path d="M9 2v6h6" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M19 11v7h5" stroke={color} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M22 34v26h28V26H36M28 40h16M28 47h16M28 54h16M56 32v28"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
