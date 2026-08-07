import { Section } from "../ui/Section";
import { ContactForm } from "./ContactForm";

type ApplicationFormSectionProps = {
  description?: string;
  eyebrow?: string;
  formTitle?: string;
  id?: string;
  title?: string;
};

export function ApplicationFormSection({
  description,
  eyebrow = "Заявка",
  formTitle = "Финальная форма",
  id,
  title = "Обсудим закупку, сопровождение или поставку",
}: ApplicationFormSectionProps) {
  return (
    <Section
      description={description}
      eyebrow={eyebrow}
      id={id}
      title={title}
      tone="soft"
    >
      <ContactForm title={formTitle} />
    </Section>
  );
}
