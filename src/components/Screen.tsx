import { ReactElement } from 'react';
import { FlatList, FlatListProps, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, layout, spacing } from '../theme';
import { AppHeader } from './AppHeader';
import { ScreenTitle } from './ScreenTitle';

type Props<T> = {
  title: string;
  titleDivider?: boolean;
  data: readonly T[];
  renderItem: FlatListProps<T>['renderItem'];
  keyExtractor: (item: T) => string;
  itemGap?: number;
  horizontalPadding?: number;
};

/**
 * Layout padrão das telas: safe area, header ACES, título e lista rolável
 * com espaço reservado para a tab bar flutuante.
 */
export function ScreenList<T>({
  title,
  titleDivider,
  data,
  renderItem,
  keyExtractor,
  itemGap = spacing.sm,
  horizontalPadding = spacing.screenHorizontal,
}: Props<T>): ReactElement {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <FlatList
        data={data}
        renderItem={(info) => <View style={{ paddingHorizontal: horizontalPadding }}>{renderItem?.(info)}</View>}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <View>
            <AppHeader />
            <View style={{ paddingHorizontal: horizontalPadding }}>
              <ScreenTitle title={title} divider={titleDivider} />
            </View>
          </View>
        }
        ItemSeparatorComponent={() => <View style={{ height: itemGap }} />}
        contentContainerStyle={styles.content}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  list: { width: '100%', maxWidth: layout.maxContentWidth, alignSelf: 'center' },
  content: { paddingBottom: layout.tabBarHeight + spacing.xl },
});
