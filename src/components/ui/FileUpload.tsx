import { Upload } from "lucide-react";
import { useId, useState } from "react";

type FileUploadProps = {
  label?: string;
  name?: string;
};

export function FileUpload({
  label = "Прикрепить файл",
  name = "attachment",
}: FileUploadProps) {
  const inputId = useId();
  const [fileName, setFileName] = useState("");

  return (
    <label className="field field--full" htmlFor={inputId}>
      <span>{label}</span>
      <span className="file-upload">
        <span className="file-upload__text">
          {fileName || "Документация, заявка, спецификация или реквизиты"}
        </span>
        <Upload aria-hidden="true" size={19} />
        <input
          id={inputId}
          name={name}
          type="file"
          onChange={(event) => {
            setFileName(event.target.files?.[0]?.name ?? "");
          }}
        />
      </span>
    </label>
  );
}
