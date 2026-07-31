import { Layout } from "./components/layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { BriefPage } from "./pages/BriefPage";
import { ClientsPage } from "./pages/ClientsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { HomePage } from "./pages/HomePage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { SuppliesPage } from "./pages/SuppliesPage";
import { TenderPage } from "./pages/TenderPage";
import { useRouter } from "./router/routerContext";

const pages = {
  "/": HomePage,
  "/tender": TenderPage,
  "/brief": BriefPage,
  "/supplies": SuppliesPage,
  "/about": AboutPage,
  "/clients": ClientsPage,
  "/contacts": ContactsPage,
  "/privacy": PrivacyPage,
};

function NotFoundPage() {
  return (
    <div className="section">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="page-title">Страница не найдена</h1>
        <p className="lead">Проверьте адрес или вернитесь на главную.</p>
      </div>
    </div>
  );
}

export default function App() {
  const { path } = useRouter();
  const Page = pages[path as keyof typeof pages] ?? NotFoundPage;

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
