import { Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ComponentProps } from 'react';
import type { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { colors, radius, shadows, spacing } from '../theme';
import { HistoryIcon } from './icons';

type BottomTabBarProps = Parameters<NonNullable<ComponentProps<typeof Tabs>['tabBar']>>[0];

const TABS = ['index', 'historico', 'perfil'] as const;
type TabName = (typeof TABS)[number];

function TabIcon({ name, color }: { name: TabName; color: string }) {
  switch (name) {
    case 'index':
      return <Ionicons name="home-outline" size={56} color={color} />;
    case 'historico':
      return <HistoryIcon size={54} color={color} />;
    case 'perfil':
      return <Ionicons name="person-outline" size={54} color={color} />;
  }
}

const LABELS: Record<TabName, string> = { index: 'Início', historico: 'Histórico', perfil: 'Perfil' };

/** Barra inferior flutuante e arredondada. A aba ativa fica verde com um traço embaixo. */
export function BottomTabBar({ state, navigateToTab }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const currentRoute = state.routes[state.index]?.name;

  return (
    <View pointerEvents="box-none" style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, spacing.md) }]}>
      <View style={styles.bar}>
        {TABS.map((name) => {
          const route = state.routes.find((r) => r.name === name);
          const focused = currentRoute === name;
          const color = focused ? colors.primary : colors.icon;
          return (
            <Pressable
              key={name}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={LABELS[name]}
              onPress={() => route && navigateToTab(route.key)}
              style={styles.tab}
            >
              <TabIcon name={name} color={color} />
              <View style={[styles.indicator, focused && styles.indicatorActive]} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: spacing.md },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.cardBorder,
    paddingTop: spacing.md,
    paddingBottom: spacing.xs,
    ...shadows.card,
  },
  tab: { alignItems: 'center', flex: 1 },
  indicator: { marginTop: spacing.xxs, height: 4, width: 84, borderRadius: 2, backgroundColor: 'transparent' },
  indicatorActive: { backgroundColor: colors.primary },
});
