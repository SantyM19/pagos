import { Operadores } from "app/components/home/Operadores"
import { ConsultaFactura } from "app/components/home/ConsultaFactura"
import { ResumenFactura } from "app/components/home/ResumenFactura"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "📲 Pago de Facturas | Claro, Tigo, Movistar, WOM, Virgin",
  description: "Paga tus facturas de operadores telefónicos de forma rápida y segura. Compatible con Claro, Tigo, Movistar, WOM y Virgin Mobile.",
  keywords: [
    "pago de facturas", 
    "operadores telefónicos", 
    "Claro", 
    "Tigo", 
    "Movistar", 
    "WOM", 
    "Virgin", 
    "facturas en línea", 
    "servicios móviles", 
    "pago seguro"
  ],
  authors:[{ name: "pagos de facturas Team", url: "https://pagosdefacturas" },],
  robots: "index, follow", // Asegura que los motores de búsqueda rastreen y sigan los enlaces
};

export default function Home() {
  return (
    <main>
      <Operadores />
      <ConsultaFactura/>
      <ResumenFactura/>
    </main>
  )
}