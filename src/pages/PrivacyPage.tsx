import { LegalDocumentPage } from "../components/sections/LegalDocumentPage";
import { privacyDocument } from "../data/legal";

export function PrivacyPage() {
  return <LegalDocumentPage document={privacyDocument} />;
}
