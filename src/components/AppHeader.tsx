import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors, fonts, spacing } from '../theme';
import { SideMenu } from './SideMenu';

/**
 * Cabeçalho com logo ACES + menu hambúrguer.
 * TODO: trocar o logo provisório pelo asset oficial (PNG/SVG exportado do Figma).
 */
export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logo} accessibilityRole="image" accessibilityLabel="ACES - Acesso Cidadão à Emergência de Saúde">
        <View style={styles.logoMark}>
          <FontAwesome5 name="map-marker" size={40} color={colors.brandBlue} />
          <FontAwesome5 name="plus" size={14} color="#fff" style={styles.logoPlus} />
          <FontAwesome5 name="hand-holding" size={30} color={colors.brandTeal} style={styles.logoHand} />
        </View>
        <View>
          <Text style={styles.logoTitle}>ACES</Text>
          <Text style={styles.logoSubtitle}>{'Acesso Cidadão\nà Emergência\nde Saúde'}</Text>
        </View>
      </View>

      <Pressable
        onPress={() => setMenuOpen(true)}
        hitSlop={12}
        accessibilityRole="button"
        accessibilityLabel="Abrir menu"
        style={styles.menu}
      >
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </Pressable>

      <SideMenu visible={menuOpen} onClose={() => setMenuOpen(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screenHorizontal + 4,
    paddingTop: spacing.xl,
  },
  logo: { flexDirection: 'row', alignItems: 'flex-start' },
  logoMark: { width: 52, height: 72, marginRight: 2 },
  logoPlus: { position: 'absolute', top: 8, left: 9 },
  logoHand: { position: 'absolute', bottom: 0, left: 0 },
  logoTitle: { fontFamily: fonts.bold, fontSize: 28, color: colors.brandNavy, lineHeight: 32 },
  logoSubtitle: { fontFamily: fonts.medium, fontSize: 10, color: colors.brandNavy, lineHeight: 12 },
  menu: { width: 62, height: 42, justifyContent: 'space-between' },
  menuLine: { height: 4, borderRadius: 2, backgroundColor: colors.icon },
});
