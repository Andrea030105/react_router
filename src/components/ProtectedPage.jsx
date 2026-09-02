import { Link } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function ProtectedPage({ children }) {
  const isAutenticated = useAuth();

  if (isAutenticated) {
    return children;
  }

  if (!isAutenticated) {
    return (
      <section className="min-h-[calc(100vh-62px)] bg-slate-950 px-4 py-10 text-slate-100">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
          <span className="mb-3 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-400">
            Access denied
          </span>

          <h1 className="mb-4 text-3xl font-bold text-white">
            Non sei autenticato
          </h1>

          <p className="mb-6 text-slate-300">
            Per accedere a questa pagina devi effettuare il login con un account
            valido.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/login"
              className="inline-block rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 transition-all duration-200 hover:bg-sky-400"
            >
              Vai al login
            </Link>

            <Link
              to="/"
              className="inline-block rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-slate-600"
            >
              Torna alla home
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default ProtectedPage;
