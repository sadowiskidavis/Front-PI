import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../../components/Avatar';
import { Card } from '../../components/Card';
import { LinkButton } from '../../components/LinkButton';
import { Rating } from '../../components/Rating';
import { ScreenList } from '../../components/Screen';
import { professionals } from '../../mocks/data';
import { spacing, typography } from '../../theme';

export default function ProfissionaisScreen() {
  return (
    <ScreenList
      title="Profissionais"
      data={professionals}
      keyExtractor={(p) => p.id}
      horizontalPadding={spacing.md}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Avatar />
          <Text style={[typography.nameBold, styles.name]} numberOfLines={1}>
            {item.name}
          </Text>
          <View style={styles.rating}>
            <Rating value={item.rating} />
          </View>
          {/* TODO: definir destino (tela de detalhes do profissional?) */}
          <LinkButton label="Informações" size={17} onPress={() => {}} style={styles.info} />
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: spacing.lg, paddingVertical: spacing.md + 2 },
  name: { marginLeft: spacing.lg, flexShrink: 1 },
  rating: { position: 'absolute', top: spacing.md, right: spacing.lg },
  info: { position: 'absolute', bottom: spacing.md, right: spacing.lg },
});
