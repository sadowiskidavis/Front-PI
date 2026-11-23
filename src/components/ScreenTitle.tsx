import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing, typography } from '../theme';

type Props = { title: string; divider?: boolean };

export function ScreenTitle({ title, divider = true }: Props) {
  return (
    <View style={styles.container}>
      <Text style={typography.screenTitle} accessibilityRole="header" adjustsFontSizeToFit numberOfLines={1}>
        {title}
      </Text>
      {divider && <View style={styles.divider} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: spacing.xl, marginBottom: spacing.lg },
  divider: {
    alignSelf: 'stretch',
    height: 2,
    backgroundColor: colors.divider,
    marginTop: spacing.sm,
  },
});
