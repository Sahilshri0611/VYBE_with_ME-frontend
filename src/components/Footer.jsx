import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="display-font text-3xl font-bold">VYBE.</div>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
              A modern way to discover movies, live events and experiences worth remembering.
            </p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold">Explore</p>
            <div className="space-y-3 text-sm text-zinc-500">
              <Link className="block hover:text-white" to="/movies">Movies</Link>
              <Link className="block hover:text-white" to="/events">Events</Link>
              <Link className="block hover:text-white" to="/profile">Profile</Link>
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold">Company</p>
            <div className="space-y-3 text-sm text-zinc-500">
              <Link className="block hover:text-white" to="/about">About VYBE</Link>
              <a className="flex items-center gap-1 hover:text-white" href="mailto:hello@vybe.demo">
                Contact <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-zinc-600">
          © 2026 VYBE. Frontend concept.
        </div>
      </div>
    </footer>
  );
}