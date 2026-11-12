/** Packet names like "Malaria Consortium: seasonal malaria chemoprevention" become a title and a program line. */
export function splitCharityName(name: string) {
  const [title, ...rest] = name.split(": ");
  return { title, program: rest.join(": ") || undefined };
}
