import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from '../../components/Avatar';
import { Card } from '../../components/Card';
import { LinkButton } from '../../components/LinkButton';
import { Rating } from '../../components/Rating';
import { ScreenList } from '../../components/Screen';
import { reviews } from '../../mocks/data';
import { colors, spacing, typography } from '../../theme';

export default function HistoricoAvaliacoesScreen() {
  return (
    <ScreenList
      title="Histórico de Avaliações"
      data={reviews}
      keyExtractor={(r) => r.id}
      renderItem={({ item }) => (
        <Card>
          <View style={styles.header}>
            <Text style={typography.cardTitle}>Avaliação</Text>
            <Rating value={item.rating} />
          </View>

          <View style={styles.professional}>
            <Avatar />
            <Text style={[typography.name, styles.name]} numberOfLines={2}>
              {item.professional.name}
            </Text>
          </View>

          <View style={styles.actions}>
            {/* TODO: definir comportamento (modal com o comentário? nova tela?) */}
            <LinkButton label="Ver Comentário" onPress={() => {}} />
            {/* TODO: definir comportamento (editar nota e comentário) */}
            <LinkButton label="Modificar" color={colors.linkAlt} underlineInset={10} onPress={() => {}} />
          </View>
        </Card>
      )}
    />
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  professional: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.lg },
  name: { marginLeft: spacing.lg, flexShrink: 1 },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
    marginHorizontal: -spacing.xs,
    marginBottom: -spacing.xs,
  },
});
