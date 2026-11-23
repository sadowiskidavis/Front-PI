import { StyleSheet, View } from 'react-native';
import { colors } from '../theme';
import { DoctorIcon } from './icons';

type Props = { size?: number };

/** Avatar padrão de profissional (ícone de médico em círculo cinza). */
export function Avatar({ size = 92 }: Props) {
  return (
    <View style={[styles.circle, { width: size, height: size, borderRadius: size / 2 }]}>
      <DoctorIcon size={size * 0.54} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { backgroundColor: colors.avatarBg, alignItems: 'center', justifyContent: 'center' },
});
