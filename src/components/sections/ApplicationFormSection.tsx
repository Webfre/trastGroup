import { Section } from "../ui/Section";
import { ContactForm } from "./ContactForm";

type ApplicationFormSectionProps = {
  formTitle?: string;
  id?: string;
};

export function ApplicationFormSection({
  formTitle = "Финальная форма",
  id,
}: ApplicationFormSectionProps) {
  return (
    <Section
      eyebrow="Заявка"
      id={id}
      title="Обсудим закупку, сопровождение или поставку"
      tone="soft"
    >
      <ContactForm title={formTitle} />
    </Section>
  );
}
