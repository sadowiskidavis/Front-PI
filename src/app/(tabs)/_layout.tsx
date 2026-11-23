import { Tabs } from 'expo-router';
import { BottomTabBar } from '../../components/BottomTabBar';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <BottomTabBar {...props} />}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="historico" />
      <Tabs.Screen name="perfil" />
      {/*
        Telas com a tab bar visível, mas sem ícone próprio.
        Não usar `href: null`: no expo-router 58 isso marca a rota como `hidden`
        e a navegação até ela é redirecionada para a aba inicial.
        A BottomTabBar customizada só desenha os ícones listados em TABS.
      */}
      <Tabs.Screen name="avaliacoes" />
      <Tabs.Screen name="profissionais" />
    </Tabs>
  );
}
