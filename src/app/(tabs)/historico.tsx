import { StyleSheet, Text, View } from 'react-native';
import { Card } from '../../components/Card';
import { LinkButton } from '../../components/LinkButton';
import { ScreenList } from '../../components/Screen';
import { appointments, Appointment } from '../../mocks/data';
import { spacing, typography } from '../../theme';

/** "2026-02-12" -> "12/ 02" (formato do Figma) */
function formatDate(iso: string) {
  const [, m, d] = iso.split('-');
  return `${d}/ ${m}`;
}

function AppointmentCard({ item }: { item: Appointment }) {
  const done = item.status === 'concluida';
  return (
    <Card compact>
      <View style={styles.header}>
        <Text style={typography.cardTitleSm}>{done ? 'Consulta Concluída' : 'Consulta Cancelada'}</Text>
        <Text style={typography.body}>{formatDate(item.date)}</Text>
      </View>

      {done ? (
        <View style={styles.body}>
          <Text style={typography.body}>{item.professional.name}</Text>
          <Text style={[typography.body, styles.line]}>{item.specialty}</Text>
        </View>
      ) : (
        <View style={[styles.body, styles.center]}>
          <Text style={[typography.body, styles.reason]}>{item.reason}</Text>
        </View>
      )}

      {/* TODO: definir destino de "Resultado" e "Saiba mais" */}
      <LinkButton label={done ? 'Resultado' : 'Saiba mais'} underlineInset={0} onPress={() => {}} style={styles.action} />
    </Card>
  );
}

export default function HistoricoConsultasScreen() {
  return (
    <ScreenList
      title="Histórico de Consultas"
      titleDivider={false}
      data={appointments}
      keyExtractor={(a) => a.id}
      itemGap={spacing.md}
      renderItem={({ item }) => <AppointmentCard item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  body: { marginTop: spacing.md, minHeight: 64 },
  line: { marginTop: spacing.md },
  center: { justifyContent: 'center' },
  reason: { textAlign: 'center' },
  action: { alignSelf: 'stretch', marginHorizontal: spacing.lg, marginTop: spacing.md },
});
