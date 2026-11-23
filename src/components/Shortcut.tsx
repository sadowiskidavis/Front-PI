import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, shadows, spacing } from '../theme';

type Props = { label: string; icon: ReactNode; onPress?: () => void };

/** Atalho circular com ícone e legenda (usado na tela de Início). */
export function Shortcut({ label, icon, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.6 }]}
    >
      <View style={styles.circle}>
        {icon}
      </View>
      <Text style={styles.label} numberOfLines={1} adjustsFontSizeToFit>
        {label}
      </Text>
    </Pressable>
  );
}

const SIZE = 96;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.card,
  },
  label: { marginTop: spacing.sm, fontFamily: fonts.regular, fontSize: 15, color: colors.textPrimary },
});
