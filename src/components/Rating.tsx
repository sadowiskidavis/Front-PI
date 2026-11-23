import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography } from '../theme';

type Props = { value: number; max?: number };

export function Rating({ value, max = 5 }: Props) {
  return (
    <View style={styles.row} accessibilityLabel={`Nota ${value} de ${max}`}>
      <Ionicons name="star" size={20} color={colors.star} />
      <Text style={[typography.rating, styles.text]}>
        {value} / {max}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  text: { marginLeft: 4 },
});
