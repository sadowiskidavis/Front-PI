import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { AppHeader } from '../../components/AppHeader';
import { MenuOption } from '../../components/MenuOption';
import { currentUser } from '../../mocks/data';
import { colors, fonts, layout, spacing } from '../../theme';

const AVATAR = 92;

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.content} style={styles.scroll} showsVerticalScrollIndicator={false}>
        <AppHeader />

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={40} color={colors.icon} />
            {/* TODO: definir o que a edição faz (trocar foto? editar dados?) */}
            <Pressable style={styles.editBadge} onPress={() => {}} hitSlop={8} accessibilityRole="button" accessibilityLabel="Editar perfil">
              <Feather name="edit-2" size={20} color={colors.icon} />
            </Pressable>
          </View>
          <View style={styles.profileText}>
            <Text style={styles.name} numberOfLines={1} adjustsFontSizeToFit>
              {currentUser.name}
            </Text>
            <Text style={styles.phone}>{currentUser.phone}</Text>
          </View>
        </View>

        <View style={styles.options}>
          {/* TODO: definir destino de cada opção */}
          <MenuOption label="Informações pessoais" icon={<Ionicons name="person-outline" size={38} color={colors.icon} />} onPress={() => {}} />
          <MenuOption
            label="Privacidade e segurança"
            icon={<MaterialCommunityIcons name="shield-check-outline" size={38} color={colors.icon} />}
            onPress={() => {}}
          />
          <MenuOption
            label="Encerrar sessão"
            danger
            icon={<MaterialCommunityIcons name="logout" size={38} color={colors.icon} />}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { width: '100%', maxWidth: layout.maxContentWidth, alignSelf: 'center' },
  content: { paddingBottom: layout.tabBarHeight + spacing.xl },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.profileBg,
    borderRadius: 12,
    marginHorizontal: spacing.md,
    marginTop: spacing.lg,
    padding: spacing.sm,
  },
  avatar: {
    width: AVATAR,
    height: AVATAR,
    borderRadius: AVATAR / 2,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editBadge: {
    position: 'absolute',
    top: -12,
    right: -14,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: colors.editBadge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: { flex: 1, marginLeft: spacing.xl },
  name: { fontFamily: fonts.semibold, fontSize: 25, color: colors.profileName },
  phone: { fontFamily: fonts.bold, fontStyle: 'italic', fontSize: 17, color: colors.textMuted, marginTop: 2 },
  options: { marginHorizontal: spacing.xl, marginTop: spacing.xl, gap: spacing.xl },
});
