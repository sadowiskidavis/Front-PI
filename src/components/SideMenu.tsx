import { useEffect, useRef, useState } from 'react';
import { Animated, Modal, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router, type Href } from 'expo-router';
import { colors, fonts, spacing } from '../theme';

type MenuItem = { label: string; href: Href; icon: keyof typeof Ionicons.glyphMap };

// Adicione novas opções do menu aqui.
const ITEMS: MenuItem[] = [
  { label: 'Profissionais', href: '/profissionais', icon: 'people-outline' },
  { label: 'Histórico de Avaliações', href: '/avaliacoes', icon: 'star-outline' },
];

type Props = { visible: boolean; onClose: () => void };

/** Menu lateral que desliza da direita, aberto pelo botão hambúrguer. */
export function SideMenu({ visible, onClose }: Props) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const panelWidth = Math.min(width * 0.78, 340);
  const progress = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = useState(visible);

  useEffect(() => {
    if (visible) setMounted(true);
    Animated.timing(progress, {
      toValue: visible ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished && !visible) setMounted(false);
    });
  }, [visible, progress]);

  const go = (href: Href) => {
    onClose();
    router.push(href);
  };

  return (
    <Modal visible={mounted} transparent animationType="none" onRequestClose={onClose} statusBarTranslucent>
      <Animated.View style={[styles.backdrop, { opacity: progress }]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} accessibilityLabel="Fechar menu" />
      </Animated.View>

      <Animated.View
        style={[
          styles.panel,
          {
            width: panelWidth,
            paddingTop: insets.top + spacing.lg,
            paddingBottom: insets.bottom + spacing.lg,
            transform: [{ translateX: progress.interpolate({ inputRange: [0, 1], outputRange: [panelWidth, 0] }) }],
          },
        ]}
      >
        <Pressable onPress={onClose} hitSlop={12} style={styles.close} accessibilityRole="button" accessibilityLabel="Fechar menu">
          <Ionicons name="close" size={36} color={colors.icon} />
        </Pressable>

        <Text style={styles.heading}>Menu</Text>
        <View style={styles.divider} />

        {ITEMS.map((item) => (
          <Pressable
            key={item.label}
            onPress={() => go(item.href)}
            accessibilityRole="button"
            style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
          >
            <Ionicons name={item.icon} size={26} color={colors.primary} />
            <Text style={styles.itemLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={22} color={colors.divider} />
          </Pressable>
        ))}
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(0,0,0,0.35)' },
  panel: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
  },
  close: { alignSelf: 'flex-end' },
  heading: { fontFamily: fonts.bold, fontSize: 26, color: colors.primary, marginTop: spacing.md },
  divider: { height: 2, backgroundColor: colors.divider, marginTop: spacing.sm, marginBottom: spacing.md },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xs,
    borderRadius: 12,
  },
  itemPressed: { backgroundColor: colors.avatarBg },
  itemLabel: { flex: 1, marginLeft: spacing.md, fontFamily: fonts.semibold, fontSize: 19, color: colors.textPrimary },
});
