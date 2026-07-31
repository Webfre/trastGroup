import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "../ui/Button";

type ContactFormProps = {
  title?: string;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const normalized = digits.startsWith("8")
    ? `7${digits.slice(1)}`
    : digits.startsWith("7")
      ? digits
      : digits;

  if (!normalized) {
    return "";
  }

  const parts = [
    normalized.slice(0, 1),
    normalized.slice(1, 4),
    normalized.slice(4, 7),
    normalized.slice(7, 9),
    normalized.slice(9, 11),
  ].filter(Boolean);

  if (parts.length === 1) {
    return `+${parts[0]}`;
  }

  return `+${parts[0]} (${parts[1] ?? ""}${parts[1]?.length === 3 ? ")" : ""} ${
    parts[2] ?? ""
  }${parts[3] ? `-${parts[3]}` : ""}${parts[4] ? `-${parts[4]}` : ""}`
    .replace(/\s+$/g, "")
    .replace("( ", "(");
};

export function ContactForm({ title = "Заявка" }: ContactFormProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const hasEmail = email.trim().length > 0;
  const hasPhone = phone.trim().length > 0;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="section__header" style={{ marginBottom: 22 }}>
        <span className="eyebrow">{title}</span>
        <h2 className="section-title" style={{ fontSize: "2rem" }}>
          Расскажите, с чем нужна помощь
        </h2>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>Имя</span>
          <input name="name" autoComplete="name" required placeholder="Как к вам обращаться" />
        </label>
        <label className="field">
          <span>Телефон</span>
          <input
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+7 (___) ___-__-__"
            required={!hasEmail}
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
          />
        </label>
        <label className="field field--full">
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@company.ru"
            required={!hasPhone}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="field field--full">
          <span>Комментарий</span>
          <textarea name="comment" placeholder="" />
        </label>
      </div>

      <div className="form__footer">
        <label className="checkbox-field">
          <input type="checkbox" required />
          <span>
            Согласен на обработку персональных данных в соответствии с{" "}
            <a href="/privacy" rel="noopener noreferrer" target="_blank">
              политикой обработки персональных данных
            </a>
            .
          </span>
        </label>
        <Button
          className="form__submit"
          icon={<Send aria-hidden="true" size={18} />}
          type="submit"
          variant="primary"
        >
          Отправить заявку
        </Button>
      </div>
    </form>
  );
}
