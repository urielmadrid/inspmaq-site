import CallToAction from "@/components/CallToAction";
import ManutencaoService from "@/components/ManutencaoService";
import InspecoesService from "@/components/InspecoesService";
import GuindautoService from "@/components/GuindautoService";
import ServicosHero from "@/components/ServicosHero";

export default function ServicosPage() {
  return (
    <main>
      <ServicosHero />
      <ManutencaoService />
      <InspecoesService />
      <GuindautoService />

      <CallToAction />
    </main>
  );
}