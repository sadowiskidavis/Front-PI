import { Platform, TextStyle, ViewStyle } from 'react-native';

export const colors = {
  background: '#FFFFFF',
  primary: '#2C6E67', // títulos de tela (verde-petróleo)
  link: '#3FA39B', // "Ver Comentário", "Resultado", "Informações"
  linkAlt: '#4A86C8', // "Modificar"
  brandNavy: '#25376B', // logo ACES
  brandBlue: '#4A90E2',
  brandTeal: '#3E8C87',
  brandOrange: '#F2994A',
  textPrimary: '#000000',
  textSecondary: '#3A3A3A',
  star: '#F6B931',
  avatarBg: '#EEEEEE',
  divider: '#7A7A7A',
  icon: '#000000',
  cardBorder: '#F1F1F1',
  profileBg: '#DDEEF0', // card do perfil
  profileName: '#4F9A93',
  editBadge: '#B3E4E6',
  textMuted: '#9A9A9A',
  sectionTitle: '#6B6B6B',
  danger: '#D9534F',
  dangerBorder: '#F7D4D4',
} as const;

export const fonts = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semibold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

export const typography = {
  screenTitle: { fontFamily: fonts.bold, fontSize: 30, color: colors.primary },
  cardTitle: { fontFamily: fonts.semibold, fontSize: 21, color: colors.textPrimary },
  cardTitleSm: { fontFamily: fonts.semibold, fontSize: 18, color: colors.textPrimary },
  name: { fontFamily: fonts.regular, fontSize: 19, color: colors.textPrimary },
  nameBold: { fontFamily: fonts.bold, fontSize: 24, color: colors.textSecondary },
  body: { fontFamily: fonts.regular, fontSize: 17, color: colors.textPrimary },
  link: { fontFamily: fonts.semibold, fontSize: 18 },
  rating: { fontFamily: fonts.regular, fontSize: 15, color: colors.textSecondary },
} satisfies Record<string, TextStyle>;

export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  screenHorizontal: 24,
} as const;

export const radius = {
  sm: 12,
  md: 20,
  lg: 28,
  round: 999,
} as const;

export const shadows = {
  card: Platform.select<ViewStyle>({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 4 },
    },
    default: { elevation: 5 },
  }),
};

export const layout = {
  tabBarHeight: 100,
  maxContentWidth: 560,
} as const;

export const theme = { colors, fonts, typography, spacing, radius, shadows, layout };
export default theme;
