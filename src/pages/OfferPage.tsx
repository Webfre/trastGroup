import { LegalDocumentPage } from "../components/sections/LegalDocumentPage";
import { offerDocument } from "../data/legal";

export function OfferPage() {
  return <LegalDocumentPage document={offerDocument} />;
}
