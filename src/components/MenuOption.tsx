import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, fonts, shadows, spacing } from '../theme';

type Props = {
  label: string;
  icon: ReactNode;
  onPress?: () => void;
  /** Variante vermelha (ex.: "Encerrar sessão"). */
  danger?: boolean;
};

/** Linha de opção com ícone, borda leve e sombra (usada no Perfil). */
export function MenuOption({ label, icon, onPress, danger }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.row, danger && styles.danger, pressed && styles.pressed]}
    >
      {icon}
      <Text style={[styles.label, danger && { color: colors.danger }]} numberOfLines={1} adjustsFontSizeToFit>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 66,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.background,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    ...shadows.card,
  },
  danger: { borderColor: colors.dangerBorder },
  pressed: { opacity: 0.6 },
  label: { flex: 1, marginLeft: spacing.sm, fontFamily: fonts.regular, fontSize: 21, color: colors.textSecondary },
});
