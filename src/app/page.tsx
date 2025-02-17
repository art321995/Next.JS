import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/counter"); // Redirige inmediatamente en el servidor
}