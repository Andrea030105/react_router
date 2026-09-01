import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const USERSDATA = [
  { id: 1, name: "Mario", surname: "Rossi", age: 27 },
  { id: 2, name: "Giuseppe", surname: "Verdi", age: 18 },
  { id: 3, name: "Luca", surname: "Gialli", age: 32 },
];

function UserId() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundUser = USERSDATA.find((user) => user.id === parseInt(id));
      setUser(foundUser || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-[calc(100vh-62px)] bg-slate-950 px-4 py-10 text-slate-100">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
          <h1 className="mb-4 text-3xl font-bold text-white">Loading...</h1>
        </div>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="min-h-[calc(100vh-62px)] bg-slate-950 px-4 py-10 text-slate-100">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
          <h1 className="mb-4 text-3xl font-bold text-white">User not found</h1>
          <Link
            to={"/Users"}
            className="bg-slate-700 text-white shadow rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 my-4"
          >
            Users
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-62px)] bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
        <span className="mb-3 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
          User
        </span>

        <h1 className="mb-4 text-3xl font-bold text-white">
          {user.name} {user.surname}
        </h1>
        <Link
          to={"/Users"}
          className="bg-slate-700 text-white shadow rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 my-4"
        >
          Return to Users
        </Link>
      </div>
    </section>
  );
}

export default UserId;
