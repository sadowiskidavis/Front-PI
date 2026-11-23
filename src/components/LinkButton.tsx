import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors, typography } from '../theme';

type Props = {
  label: string;
  onPress?: () => void;
  color?: string;
  /** Largura extra do sublinhado em relação ao texto (o Figma mostra a linha mais larga que o texto). */
  underlineInset?: number;
  style?: StyleProp<ViewStyle>;
  size?: number;
};

/** Texto clicável sublinhado com uma linha grossa (ex.: "Ver Comentário", "Modificar"). */
export function LinkButton({ label, onPress, color = colors.link, underlineInset = 6, style, size }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      hitSlop={8}
      style={({ pressed }) => [styles.button, { borderBottomColor: color, paddingHorizontal: underlineInset }, pressed && styles.pressed, style]}
    >
      <Text style={[typography.link, { color }, size ? { fontSize: size } : null]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { borderBottomWidth: 2, alignItems: 'center', paddingBottom: 1 },
  pressed: { opacity: 0.6 },
});
