import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../../components/AppHeader';
import { Card } from '../../components/Card';
import { DoctorIcon } from '../../components/icons';
import { LinkButton } from '../../components/LinkButton';
import { Rating } from '../../components/Rating';
import { Shortcut } from '../../components/Shortcut';
import { nextAppointment, reviews } from '../../mocks/data';
import { colors, fonts, layout, spacing } from '../../theme';

/** "2026-02-24" -> "24/02" */
function formatDate(iso: string) {
  const [, m, d] = iso.split('-');
  return `${d}/${m}`;
}

export default function InicioScreen() {
  const lastReview = reviews[0];

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <AppHeader />

        <View style={styles.shortcuts}>
          {/* TODO: definir fluxo de "Marcar Consulta" */}
          <Shortcut label="Marcar Consulta" icon={<MaterialCommunityIcons name="calendar-check-outline" size={50} color={colors.icon} />} onPress={() => {}} />
          <Shortcut label="Profissionais" icon={<DoctorIcon size={48} />} onPress={() => router.push('/profissionais')} />
          {/* TODO: definir tela de UBS */}
          <Shortcut label="UBS" icon={<MaterialCommunityIcons name="hospital-building" size={52} color={colors.icon} />} onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Atendimento agendado</Text>
          {nextAppointment ? (
            <Card style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.cardTitleLg}>Consulta Marcada</Text>
                <Text style={styles.date}>{formatDate(nextAppointment.date)}</Text>
              </View>
              <Text style={styles.body}>
                <Text style={styles.bold}>Local: </Text>
                {nextAppointment.location}
              </Text>
              {/* TODO: definir destino de "Mais Detalhes" */}
              <LinkButton label="Mais Detalhes" size={16} onPress={() => {}} style={styles.centerLink} />
            </Card>
          ) : (
            <Text style={styles.empty}>Nenhum atendimento agendado.</Text>
          )}
          {/* TODO: definir destino (lista de consultas agendadas?) */}
          <LinkButton label="Mostrar Todos" size={15} color={colors.textMuted} onPress={() => {}} style={styles.showAll} />
        </View>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Última Avaliação</Text>
          {lastReview && (
            <Card style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.cardTitle} numberOfLines={1} adjustsFontSizeToFit>
                  Avaliação de Profissional
                </Text>
                <Rating value={lastReview.rating} />
              </View>
              <Text style={styles.body}>{lastReview.professional.name}</Text>
              {/* TODO: definir destino de "Ver Avaliação" */}
              <LinkButton label="Ver Avaliação" size={16} onPress={() => {}} style={styles.centerLink} />
            </Card>
          )}
          <LinkButton label="Mostrar Todos" size={15} color={colors.textMuted} onPress={() => router.push('/avaliacoes')} style={styles.showAll} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { width: '100%', maxWidth: layout.maxContentWidth, alignSelf: 'center' },
  content: { paddingBottom: layout.tabBarHeight + spacing.xl },
  shortcuts: { flexDirection: 'row', paddingHorizontal: spacing.xs, marginTop: spacing.md },
  section: { paddingHorizontal: spacing.md, marginTop: spacing.lg },
  sectionTitle: { fontFamily: fonts.regular, fontSize: 26, color: colors.sectionTitle, marginBottom: spacing.md },
  card: { borderRadius: 4, paddingHorizontal: spacing.md + 4, paddingVertical: spacing.md },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: spacing.xs },
  cardTitleLg: { fontFamily: fonts.bold, fontSize: 23, color: colors.primary },
  cardTitle: { flexShrink: 1, fontFamily: fonts.bold, fontSize: 19, color: colors.primary },
  date: { fontFamily: fonts.regular, fontSize: 19, color: colors.textSecondary },
  body: { fontFamily: fonts.regular, fontSize: 17, color: colors.textPrimary, marginTop: spacing.sm },
  bold: { fontFamily: fonts.bold },
  centerLink: { alignSelf: 'center', marginTop: spacing.sm },
  showAll: { alignSelf: 'flex-end', marginTop: spacing.sm },
  empty: { fontFamily: fonts.regular, fontSize: 16, color: colors.textMuted },
  divider: { height: 2, backgroundColor: colors.divider, marginHorizontal: spacing.xl, marginTop: spacing.xl },
});
