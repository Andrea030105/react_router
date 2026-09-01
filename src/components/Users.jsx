import { Link } from "react-router-dom";

const USERSDATA = [
  { id: 1, name: "Mario", surname: "Rossi", age: 27 },
  { id: 2, name: "Giuseppe", surname: "Verdi", age: 18 },
  { id: 3, name: "Luca", surname: "Gialli", age: 32 },
];

function Users() {
  return (
    <section className="min-h-[calc(100vh-62px)] bg-slate-950 px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
        <span className="mb-3 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
          Users
        </span>
        <h1 className="mb-4 text-3xl font-bold text-white">Users</h1>

        <div className="flex flex-col  ">
          {USERSDATA.map((user) => (
            <div
              key={user.id}
              className="m-3 relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="p-6">
                <div>
                  <Link
                    to={`/user/${user.id}`}
                    className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                  >
                    {user.name} {user.surname}
                  </Link>
                  <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                    Age: {user.age}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Users;
