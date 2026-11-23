import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { colors, radius, shadows, spacing } from '../theme';

type Props = PropsWithChildren<{ style?: StyleProp<ViewStyle>; compact?: boolean }>;

export function Card({ children, style, compact }: Props) {
  return <View style={[styles.card, compact && styles.compact, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.cardBorder,
    paddingHorizontal: spacing.lg + 4,
    paddingVertical: spacing.lg,
    ...shadows.card,
  },
  compact: { borderRadius: radius.sm, paddingHorizontal: spacing.lg + 8 },
});
