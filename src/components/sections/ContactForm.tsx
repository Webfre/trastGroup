import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "../../router/Router";
import { Button } from "../ui/Button";
import { FileUpload } from "../ui/FileUpload";

type ContactFormProps = {
  fileLabel?: string;
  title?: string;
  withCompany?: boolean;
  withFile?: boolean;
};

const requestTypes = [
  "Тендерное сопровождение",
  "БРИФ / Росатом",
  "Поставка",
  "Срочная проверка закупки",
  "Другой вопрос",
];

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

export function ContactForm({
  fileLabel,
  title = "Заявка",
  withCompany = false,
  withFile = true,
}: ContactFormProps) {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Форма готова к подключению канала отправки заявок.");
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
            required
            value={phone}
            onChange={(event) => setPhone(formatPhone(event.target.value))}
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="name@company.ru" />
        </label>
        <label className="field">
          <span>Тип обращения</span>
          <select name="requestType" defaultValue={requestTypes[0]}>
            {requestTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        {withCompany && (
          <label className="field field--full">
            <span>Компания / ИНН</span>
            <input name="company" placeholder="Название компании или ИНН" />
          </label>
        )}
        <label className="field field--full">
          <span>Комментарий</span>
          <textarea
            name="comment"
            placeholder="Ссылка на закупку, сроки, продукция или короткое описание задачи"
          />
        </label>
        {withFile && <FileUpload label={fileLabel} />}
      </div>

      <div className="form__footer">
        <label className="checkbox-field">
          <input type="checkbox" required />
          <span>
            Согласен на обработку персональных данных в соответствии с{" "}
            <Link to="/privacy">политикой обработки персональных данных</Link>.
          </span>
        </label>
        <Button
          full
          icon={<Send aria-hidden="true" size={18} />}
          type="submit"
          variant="primary"
        >
          Отправить заявку
        </Button>
        <p className="form__note">
          Канал отправки заявок требует настройки: email, Telegram, CRM или SMTP.
        </p>
        {status && <p className="notice">{status}</p>}
      </div>
    </form>
  );
}
