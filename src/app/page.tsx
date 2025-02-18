import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/main"); // Redirige inmediatamente en el servidor
}