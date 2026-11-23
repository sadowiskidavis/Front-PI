// Dados mockados. Substituir pela API quando ela estiver definida.

export type Professional = { id: string; name: string; rating: number; specialty?: string };

export type Review = { id: string; professional: Professional; rating: number; comment: string };

export type Appointment =
  | { id: string; status: 'concluida'; date: string; professional: Professional; specialty: string }
  | { id: string; status: 'cancelada'; date: string; reason: string };

export type User = { id: string; name: string; phone: string; photoUrl?: string };

export const currentUser: User = { id: 'u1', name: 'Fulano de Tal', phone: '(51) 9537-2907' };

export const professionals: Professional[] = [
  { id: 'p1', name: 'Dr. Fulano', rating: 4 },
  { id: 'p2', name: 'Dr. Fulano', rating: 4 },
  { id: 'p3', name: 'Dr. Fulano', rating: 4 },
  { id: 'p4', name: 'Dr. Fulano', rating: 4 },
  { id: 'p5', name: 'Dr. Fulano', rating: 4 },
];

const fulano: Professional = { id: 'p1', name: 'Dr. Fulano de Tal', rating: 4 };

export const reviews: Review[] = [
  { id: 'r1', professional: fulano, rating: 4, comment: 'Atendimento muito bom.' },
  { id: 'r2', professional: fulano, rating: 5, comment: 'Excelente profissional.' },
  { id: 'r3', professional: fulano, rating: 3, comment: 'Demorou para atender.' },
];

export type ScheduledAppointment = { id: string; date: string; location: string };

export const nextAppointment: ScheduledAppointment | null = { id: 'a1', date: '2026-02-24', location: 'UBS Scharlau' };

export const appointments: Appointment[] = [
  { id: 'c1', status: 'concluida', date: '2026-02-12', professional: fulano, specialty: 'Pediatria' },
  { id: 'c2', status: 'cancelada', date: '2026-01-24', reason: 'Falta justificada do profissional' },
  { id: 'c3', status: 'cancelada', date: '2026-01-24', reason: 'Falta justificada do profissional' },
];
